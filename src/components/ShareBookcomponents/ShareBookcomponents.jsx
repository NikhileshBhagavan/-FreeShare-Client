import React, {useState, useCallback,useEffect} from "react";
import { Button, Confirm,Icon } from 'semantic-ui-react';
import {useDropzone} from 'react-dropzone'
import Rating from '@material-ui/lab/Rating';
import obj from "../data.jsx";
import axios from "axios";
import FormMessage from "./FormMessage.jsx";
import BookTitle  from "./BookTitle.jsx";
import Genre from "./Genre.jsx";
import Topic from "./topic_if_choose_others.jsx";
import SubGenre from "./SubGenre.jsx";
import SubTopic from "./subtopic_if_choose_others.jsx";
import UserRating from "./UserRating.jsx";
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Dropdown from "./DropDown.jsx";
import Submit from "./Submit.jsx";
import ImageUpload from "./ImageUpload.jsx";
import Slide from '@mui/material/Slide';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function ShareBookContainer() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "60%",
        minHeight:"100px",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        wordWrap:"break-word"
      };
    
    
    let objkeys=Object.keys(obj);
    console.log(obj[objkeys[1]]);
   
    
    const [bookinfo,setbookinfo]=useState({
        Book_title:"",
        Book_Department:"Action & Adventure",
        Is_Book_Department_Others:false,
        Book_SubDepartment:"Action",
        Is_SubBook_Department_Others:false,
        Book_img_file:null,
        Is_image_uploaded:false,
        Book_pdf_file:null,

        Is_pdf_uploaded:false,
   
        Is_success_or_error:null,
     
        success_or_error_message:"",
        open:false,
       

    });




   



       function closemessagebutton(event){
           setbookinfo((prevobj)=>{
               return ({...prevobj, Is_success_or_error:null,
     
                success_or_error_message:"",});

           });
       }
       function changecontent(event){
           let {name,value}=event.target
           setbookinfo((prevobj)=>{
               return ({
                   ...prevobj,
                  [name]:value,

               });
           });
       }    
       function changegenre(event){
           let text=event.target.value;
           if(text!=="Others"){
            setbookinfo((prevobj)=>{
                return ({
                    ...prevobj,
                    Book_Department:text,
                    Book_SubDepartment:obj[text].sublist[0],
                    Is_Book_Department_Others:false,
                    Is_SubBook_Department_Others:false,
 
                });
            });
           }
           else{
            setbookinfo((prevobj)=>{
                return ({
                    ...prevobj,
                    Book_Department:"",
                    Is_Book_Department_Others:true,
                    Book_SubDepartment:"",
                    Is_SubBook_Department_Others:false,

 
                });
            });
           }
       } 
       function changesubgenre(event){
        let text=event.target.value;
        if(text!=="Others"){
         setbookinfo((prevobj)=>{
             return ({
                 ...prevobj,
                 Book_SubDepartment:text,
                 Is_SubBook_Department_Others:false,

             });
         });
        }
        else{
         setbookinfo((prevobj)=>{
             return ({
                 ...prevobj,
                 Book_SubDepartment:"",
                 Is_SubBook_Department_Others:true,

             });
         });
        }
       }

       function upload(event){
            let file=event.target.files[0];
            let ext=file.name.split(".").pop();
            if(ext=="jpg" || ext =="png" || ext=="jpeg" || ext=="svg"){
             
                setbookinfo((prevobj)=>{
                    return ({...prevobj, 
                        Is_image_uploaded:true,
                        Book_img_file:file,
                        Is_success_or_error:"success",
          
                     success_or_error_message:`${file.name}  uploaded successfully???????????? `,
                    open:true});
     
                });
            }
            else{
               
                setbookinfo((prevobj)=>{
                    return ({...prevobj, 
                        Is_success_or_error:"error",
          
                     success_or_error_message:"Image accepted formats: (jpg,png,jpeg,svg) Only!!",
                    open:true,});
     
                });
            }

       }
   



const onDrop = useCallback(acceptedFiles => {
    if(acceptedFiles.length===0){
    
        setbookinfo((prevobj)=>{
            return ({...prevobj, Is_success_or_error:"error",
  
             success_or_error_message:"Book accepted formats: ( pdf ) Only!!",
            open:true});

        });
    }
    else{
     
        setbookinfo((prevobj)=>{

            return ({...prevobj, 
                Is_pdf_uploaded:true,
                Book_pdf_file:acceptedFiles[0],
               
                Is_success_or_error:"success",
  
             success_or_error_message:`${acceptedFiles[0].name}  uploaded successfully ???????????? `,
            open:true});

        }); 
    }
    


      

    }
, []);
const {
    getRootProps,
    getInputProps,
    isDragActive,
} = useDropzone({
    onDrop,
    accept: 'application/pdf'
});
 function uploadform(event){
  
        event.preventDefault();
        if(bookinfo.Is_pdf_uploaded===false){
          
        setbookinfo((prevobj)=>{

            return ({...prevobj, 
                
               
                Is_success_or_error:"error",
  
             success_or_error_message:`Upload ????Book before Submitting `,
            open:true});

        }); 
        }
        else{
            let formData = new FormData();
            formData.append("title",bookinfo.Book_title);
            formData.append("department",bookinfo.Book_Department);
            formData.append("subdepartment",bookinfo.Book_SubDepartment);
            formData.append("isdepartmentothers",bookinfo.Is_Book_Department_Others);
            formData.append("issubdepartmentothers",bookinfo.Is_SubBook_Department_Others);
            formData.append("isimageuploaded",bookinfo.Is_image_uploaded);
            if(bookinfo.Is_image_uploaded){
                formData.append("book_img",bookinfo.Book_img_file);
            }
      
            formData.append("book_pdf",bookinfo.Book_pdf_file);
            formData.append("book_rating",bookinfo.Rating);
            axios.post(
                "http://localhost:8000/api/bookupload",
                formData,
                {
                    headers: {
                        
                        "Content-type": "multipart/form-data",
                    },                    
                }
            )
            .then(res => {
                console.log(res.data);
                if(res.data.message==="success"){
              
        setbookinfo((prevobj)=>{

            return ({
                Book_title:"",
                Book_Department:"Action & Adventure",
                Is_Book_Department_Others:false,
                Book_SubDepartment:"Action",
                Is_SubBook_Department_Others:false,
                Book_img_file:null,
                Is_image_uploaded:false,
                Book_pdf_file:null,
        
                Is_pdf_uploaded:false,
                Rating:5,
                Is_success_or_error:"success",
  
             success_or_error_message:`FormData Submitted successfully ???????????? `,
            open:true,});

        }); }
        else{
         
                setbookinfo((prevobj)=>{
        
                    return ({...prevobj, 
                        
                       
                        Is_success_or_error:"error",
          
                     success_or_error_message:`Error Submitting, Try Again ??????????????????????`,
                    open:true,});
        
                }); 
        }

            })
            .catch(err => {
              
                setbookinfo((prevobj)=>{
        
                    return ({...prevobj, 
                        
                       
                        Is_success_or_error:"error",
          
                     success_or_error_message:`Error Submitting, Try Again ??????????????????????`,
                    open:true,});
        
                }); 
            });
        }
       
    }
  function closemodal(event){
      setbookinfo((prevobj)=>{
          return ({...prevobj,open:false});
      });
  }  

  return ( < > 

  {bookinfo.open?      
    <Dialog
        open={bookinfo.open}
        aria-describedby="alert-dialog-slide-description"
      >
        
        <DialogTitle>
           <span style={bookinfo.Is_success_or_error==="success"?{color:"green"}:{color:"red"}}><b>{bookinfo.Is_success_or_error.toUpperCase()}</b></span>
           </DialogTitle>
           <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <b>{bookinfo.success_or_error_message}</b>
            </DialogContentText></DialogContent>
            <DialogActions>
            <button type="button" className="ui blue button" onClick={closemodal} >Ok {bookinfo.Is_success_or_error==="success"?<span>????</span>:<span>????</span>}</button>
            </DialogActions>
   
      </Dialog>:null}

		<center>

        <form onSubmit={uploadform} encType="multipart/form-data" style={{width:"100%"}}>
        <br/>
        <FormMessage obj={bookinfo} cancel={closemessagebutton} />
      

                <div className = "row" style={{width:"75%"}} >
                
      
            
                <div className = "col-lg-6" >
                <div className="ui segment" style={{marginBottom:"20px",padding:"10.75px"}}>

            < center >

            <BookTitle obj={bookinfo} change={changecontent}/>

            <br/>

            <Genre obj={bookinfo}  list={objkeys} change={changegenre} />
            {bookinfo["Is_Book_Department_Others"] ?  <><Topic obj={bookinfo} change={changecontent} /><br/><center> < label > < span > <b> Sub Department </b>: < /span>< /label ><SubTopic obj={bookinfo} change={changecontent}/></center> </> :
            <><SubGenre obj={bookinfo} list={obj[bookinfo.Book_Department].sublist} change={changesubgenre} />
      {bookinfo["Is_SubBook_Department_Others"] ? <SubTopic obj={bookinfo} change={changecontent}/>  : null}
      </>
             }
     
           

            

            <br/>
          
            <ImageUpload func={upload} />
         
           
           

           

            < /center >


                < /div > 
                </div>

                <div className = "col-lg-6"  >

            < center >
   <div className = "ui basic "  style={{marginBottom:"13px"}}>
   <div className="ui segment" style={bookinfo["Is_Book_Department_Others"] ?{paddingTop:"31px",paddingBottom:"31px"}:bookinfo["Is_SubBook_Department_Others"] ?{paddingTop:"35px",paddingBottom:"35px"}:null}>
            <Dropdown root={getRootProps} inp={getInputProps} dragactive={isDragActive} />
            </div>
  </div>
        
     
            < /center>
            <br/>
          

                </div >

             
</div>
         

            <Submit />
          

        < /form >

</center>
    < / > );
}
export default ShareBookContainer;