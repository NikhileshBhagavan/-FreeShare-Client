import React,{useState,useEffect,useRef} from 'react';
import { Dropdown, Dimmer, Loader, Image, Segment ,Popup,Accordion, Icon  } from 'semantic-ui-react';
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
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { styled } from '@mui/material/styles';


function ViewBookContainer(){
 const [activeindex,setactiveindex]=useState(null);
 const [report,setreport]=useState({
   report_book_id:null,
   report_book_name:null,
   report_book_department:null,
   report_book_sub_department:null,

 });

 const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
  
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
  console.log(report);




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
      let z=k.toLowerCase().replace(/\s|_|,|-|"|'/g,'');
      console.log(z);
      const filteredData = prevobj.filterlist.filter(item => {
        let keys=["title","department","subdepartment"];
        return keys.some(key =>
          item[key].toLowerCase().replace(/\s|_|,|-|"|'/g,'').includes(z)
        );
      });
     return ({ ...prevobj,
      searchvalue:k,
    viewlist:filteredData});

    });}
  }
useEffect(()=>{
 
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
const report_subject = useRef(null);//report_subject.current.childNodes[1].childNodes[0].value
const report_message=useRef(null);//report_message.current.childNodes[1].childNodes[0].value)
const report_email=useRef(null);//report_email.current.childNodes[0].childNodes[0].value)
const report_otp=useRef(null);//report_otp.current.childNodes[0].childNodes[0].value
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true);
  }

    return (false);
}
function handleSubmit(e){
  let a=report_subject.current.childNodes[1].childNodes[0].value;
  let b=report_message.current.childNodes[1].childNodes[0].value;
  let c=report_email.current.childNodes[0].childNodes[0].value;
  let d=report_otp.current.childNodes[0].childNodes[0].value;
  if(a===""){
    alert("Subject Of the Report Must Be Mentioned Before Submitting Report...");
    return;
  }
  if(b===""){
    alert("Reason of the Report Must Be Mentioned Before Submitting Report...");
    return;
  }
  if(ValidateEmail(c)===false){
    alert("Invalid Email Format...");
    return;
  }
  if(d.length!==6){
    alert("Invalid OTP...");
    return ;
  }
  axios.post('http://localhost:8000/report', {
    report_book_id:report.report_book_id,
    report_subject:a,
    report_message:b,
    report_email:c,
    report_otp:d
   })
   .then(function (response) {
     if(response.data.message==="success"){
       alert(`Your Report for Book named: ${report.report_book_name} have been Noted . Report Update will be Sent to Your Mail Shortly 🙂`);
       setreport((prevobj)=>{
         return ({
        report_book_id:null,
        report_book_name:null,
        report_book_department:null,
        report_book_sub_department:null,
        
       });
     });}
     else{
       alert(response.data.message);
     }
   })
   .catch(function (error) {
     alert("Error, Try Submitting Again");
   });

}

function sendmail(e){
  let mail=report_email.current.childNodes[0].childNodes[0].value
  if(ValidateEmail(report_email.current.childNodes[0].childNodes[0].value)===true){
    axios.post('http://localhost:8000/initialreport', {
     email:mail,
     book_uuid:report.report_book_id
    })
    .then(function (response) {
      alert(response.data.message);
    })
    .catch(function (error) {
      alert("Error, Click Send OTP again");
    });
  }
  else{
    alert("Invalid Email...");
  }

}
const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));
  return (<>
  


   <Dialog key={report.report_book_id===null? "#fffffff" :report.report_book_id}
        fullScreen
        open={report.report_book_id===null?false:true}
  
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={()=>{
                setreport((prevobj)=>{
                  return ({report_book_id:null,
                      report_book_name:null,
                      report_book_department:null,
                      report_book_sub_department:null,
                    
                  
             
                  });
                });}}
              aria-label="close"
            >
              <CloseIcon 
            />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Book Id : {report.report_book_id}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSubmit}>
              Report
            </Button>
          </Toolbar>
        </AppBar>
        <List>

          <ListItem >
            <ListItemText primary="Book Name" secondary={report.report_book_name} />
            <ListItemText primary="Sub Department" secondary={report.report_book_sub_department===""?report.report_book_department:report.report_book_sub_department}/>
            <ListItemText primary="Department" secondary={report.report_book_department} />
          </ListItem>
          <Divider />
          <ListItem >
         
               <TextField
               ref={report_subject}
              
          sx={{ width: "98%" ,my:1,mb:0,mt:2}}
          fullWidth
          required
          id="outlined-required"
          label="Subject of the Report"
          placeholder="Enter the Subject of the Report (Eg:Plagiarized, UnUsual Content , UnRelated Content) in less than 50 Characters"
          inputProps={{ maxLength: 50 }}
       
        />
        
          </ListItem>
          <ListItem>
          <TextField
          ref={report_message}
           minRows={6}
          sx={{width:"98%",mb:2}}
          required
          id="standard-textarea"
          label="Reason of the Report"
          placeholder=' Give Detailed Explanation of Why do you want to report this book?
          Eg: 
          This book is different from its Title
          This book is not Related to Mentioned Department
          This book is Plagiarized.
          
          '
          multiline
        
        />
          </ListItem>

 
          <Divider />
          <ListItem >
          <EmailIcon sx={{ color: 'action.active',mt:1 }} />
         
        <TextField ref={report_email} sx={{width:"85%",ml:1,mb:2,mt:2}} required id="input-with-sx"  placeholder="Enter Your Email for Confirmation" variant="standard" />
        <Popup inverted content="Confirm Email" trigger={<Button onClick={sendmail} variant="contained" sx={{ml:"2%"}}>
      Send OTP 🔐
      </Button>}/>
          </ListItem>
          <ListItem>
          <VpnKeyIcon sx={{ color: 'action.active'}} />
         
         <TextField ref={report_otp} type="password" sx={{width:"96%",ml:1,mb:2}} required   placeholder="Enter OTP Sent To Above Mail Id" variant="standard" />
          </ListItem>
        </List>




      
      </Dialog>
  <div className="ui message" style={{minHeight:"100vh",margin:"0px",borderRadius:"0px",padding:"21px"}}>
  
  <Accordion fluid styled style={{width:"calc(100% - 21px)",marginLeft:"10.5px",marginBottom:"15px"}}>
        <Accordion.Title
          active={activeindex === 0}
          index={0}
          onClick={(e)=>{
            setactiveindex((prevvalue)=>{
              return prevvalue===null ?0:null;
            });
          }}
        >
          <Icon name='dropdown' />
          <b>Filters</b>
        </Accordion.Title>
        <Accordion.Content active={activeindex === 0}>
         
        
  
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
</Accordion.Content>
</Accordion>
 

  

  
  <input type="text" value={info.searchvalue} onChange={change} className="form-control adjust" style={{display:"inline-block",paddingLeft:"5px",paddingRight:"5px"}} placeholder="Search by any keyword" /> <button className="btn btn-primary" style={{position:"relative",right:"10px",bottom:"2px",height:"51px"}}><i className="search icon"></i></button> 
   {info.isloaded===false ?  <Segment >
      <Dimmer active inverted>
        <Loader size='large'>Loading</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment>:
   <div className="row" style={{margin:"0px"}}>
   {info.viewlist.length===0?<>  <center><img className="nothing"  src="https://in.bmscdn.com/discovery-catalog/lib/tr:w-600/no-entertainement-in-area-202007011731.png"/>
 
   <div className="ui message " style={{border:"0px",margin:"0px",padding:"10px"}}>
     <b>Nope! &nbsp;Nothing!&nbsp; Nada!</b><br/>
     <div>Sorry! We haven't found anything related to your search</div>

   </div>
   </center>
   </>:null}
   
   {info.viewlist.map((obj)=>{
     const a="http://localhost:8000"+obj.book_img_url;
     const b="http://localhost:8000"+obj.book_url
     return (<div key={obj.uuid} className="col-xl-3 col-lg-4 col-sm-6" style={{marginTop:"15px"}}>

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
     {obj.subdepartment===""? obj.department: obj.subdepartment}<br/>
     {obj.department}
     

    
     </Typography>
   </CardContent> 
   <CardActions>
     <Button size="small"><a href={b} target="_blank">Download</a></Button>
     <Button size="small" name={obj.uuid} onClick={(e)=>{
       let k=e.target.name;
        let obj=info.mainlist.filter((obj)=>{
          return obj.uuid===k;
        })
        console.log(k);
        console.log(obj);
       setreport((prevobj)=>{
         return ({...prevobj,report_book_id:k,
        
   report_book_name:obj[0].title,
   report_book_department:obj[0].department,
   report_book_sub_department:obj[0].subdepartment,
   
         });
       })
     }}>Report</Button>
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