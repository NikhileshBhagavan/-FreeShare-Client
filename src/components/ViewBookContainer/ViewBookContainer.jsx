import React,{useState,useEffect} from 'react';
import { Dropdown, Dimmer, Loader, Image, Segment  } from 'semantic-ui-react';
import obj from "../data.jsx";

import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";


function ViewBookContainer(){
  
  let keys=Object.keys(obj);
  keys.pop();
  let options=["All"]
  for(let i=0;i<keys.length;i++){
    options.push(keys[i]);
  }
  //console.log(options);
  let mappings={"All":["All"]};
  

  for(let i=1;i<keys.length+1;i++){
    let arr=["All"];
    let k=obj[options[i]].sublist.slice(0,obj[options[i]].sublist.length-1);
    k=arr.concat(k);
    mappings[options[i]]=k;
  }
  //console.log(mappings);


  const [value, setValue] = useState('');
  const [info,setinfo]=useState({
    
    department:"All",
    subdepartment:"All",
    searchvalue:"",
    isloaded:false,
    mainlist:null,
    filterlist:null,
    viewlist:null,
  });
  console.log(info);




  //console.log(department+" "+subdepartment +" "+searchvalue);
  function change(event){
    let k=event.target.value;
    if(k===""){
      
      setinfo((prevobj)=>{
        return ({ ...prevobj,
         searchvalue:k,
        viewlist:prevobj.filterlist});
   
       });
    }
    else{

    setinfo((prevobj)=>{
      let z=k.toLowerCase().replace(/\s|_|,|-|"|/g,'');
      console.log(z);
      const filteredData = prevobj.filterlist.filter(item => {
        let keys=["title","department","subdepartment"];
        return keys.some(key =>
          item[key].toLowerCase().replace(/\s|_|,|-|"|/g,'').includes(z)
        );
      });
     return ({ ...prevobj,
      searchvalue:k,
    viewlist:filteredData});

    });}
  }
useEffect(()=>{
  alert("hi");
  axios.get('http://localhost:8000/books')
  .then(function (response) {
    if(response.data.message==="Success"){
     /* setmainlist(response.data.books);
      setfilterlist(response.data.books);
      setviewlist(response.data.books);
      setisloaded(true);
      setsearch("");
      setdepartment(options[0]);
      setsubdepartment(mappings[options[0]][0]);
      console.log(response.data.books);*/
      setinfo((prevobj)=>{
        return (
          {...prevobj,
            mainlist:response.data.books,
            filterlist:response.data.books,
            viewlist:response.data.books,
            isloaded:true,
            searchvalue:"",
            department:"All",
            subdepartment:"All",


        });
      });

    }
    else{
      alert("Error Connecting to Server.Refresh to Try Again");
    }
  })
  .catch(function (error) {
    alert("Error Connecting to Server.Refresh to Try Again");
  });

},[value]);
  return (<>
  <div className="ui blue message" style={{margin:"0px",borderRadius:"0px",paddingTop:"21px"}}>
  <Autocomplete  
   value={info.department}
        onChange={(event, newValue) => {
          if(newValue===null){
            newValue="All";}
            setinfo((prevobj)=>{
              let li=null;
              if(newValue==="All"){
                li=prevobj.mainlist;
              }
              else{
               li=prevobj.mainlist.filter((element)=>{
                return element.department===newValue;
              });
              }

     return ({ ...prevobj,
      department:newValue,
      subdepartment:mappings[newValue][0],
      searchvalue:"",
      filterlist:li,
      viewlist:li,
     });

    });
         
        }}
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: "100%",padding:"0px" }}
      renderInput={(params) => <TextField {...params} label="Department" fullWidth/>}
    /><br/>
    <Autocomplete 
 
 

value={info.subdepartment}
   onChange={(event, newValue) => {
     if(newValue===null){
       newValue="All";}
       setinfo((prevobj)=>{
         let li=undefined;
         if(newValue==="All"){
          li=prevobj.mainlist.filter((element)=>{
                return element.department===prevobj.department;
              });
         }
         else{
          li=prevobj.mainlist.filter((element)=>{
                return element.subdepartment===newValue && element.department===prevobj.department;
              });
         }
     return ({ ...prevobj,
   
      subdepartment:newValue,
      searchvalue:"",
      filterlist:li,
      viewlist:li});

    });
         
        }}
   
 disablePortal
 id="combo-box-demo"
 options={mappings[info.department]}
 sx={{ width: "100%" }}
 renderInput={(params) => <TextField {...params} label="Sub Department" fullWidth/>}
/>
  </div>
  <div className="ui red message" style={{margin:"0px",borderRadius:"0px",paddingRight:"5px"}}>
  <input type="text" value={info.searchvalue} onChange={change} className="form-control adjust" style={{display:"inline-block"}} placeholder="Search by any keyword" /> <button className="btn btn-primary" style={{position:"relative",right:"10px",bottom:"2px",height:"51px"}}><i className="search icon"></i></button> 
  </div>
  <div className="ui red message" style={{margin:"0px",borderRadius:"0px",paddingLeft:"10.5px",paddingRight:"10.5px"}}>
   {info.isloaded===false ?  <Segment >
      <Dimmer active inverted>
        <Loader size='large'>Loading</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment>:
   <div className="row" style={{margin:"0px"}}>
   {info.viewlist.map((obj)=>{
     const a="http://localhost:8000"+obj.book_img_url;
     const b="http://localhost:8000"+obj.book_url
     return (<div className="col-xl-3 col-lg-4 col-sm-6" style={{marginTop:"10px"}}>

<Card sx={{minHeight:"100%",wordWrap:"break-word"}}>
   <CardMedia
     component="img"
     height="200"
     image={a}

     alt="green iguana"
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
       {obj.title}
     
     </Typography>
     <Typography variant="body2" color="text.secondary">
     {obj.subdepartment}<br/>
     {obj.department}
     

    
     </Typography>
   </CardContent>
   <CardActions>
     <Button size="small"><a href={b} target="_blank">Download</a></Button>
     <Button size="small">Report</Button>
   </CardActions>
 </Card>
</div>);
   })}

   
   
   
   </div>
   }
  
    </div>
    
  </>);
}
export default ViewBookContainer;