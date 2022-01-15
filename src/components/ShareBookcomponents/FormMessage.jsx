import React from "react";
import { Button, Icon } from 'semantic-ui-react';

function FormMessage(props) {
    console.log(props.obj);
    let k=props.obj["Is_success_or_error"];
    return ( 
        <div>
        { k!==null  ? 
       

        < div className = "row">
      
            <center >
            {k==="success" ?
            <div class = "ui success message" style = { { width: "75%", float: "none",marginBottom:"20px",wordWrap:"break-word",marginTop:"10px"}} >


                <Icon className = "close" onClick={props.cancel} / >

                <div class = "header" style={{fontSize:"1em"}} > {props.obj["success_or_error_message"]} < /div> 

                

            < /div > : <div class = "ui error message" style = { { width: "75%", float: "none",marginBottom:"20px",wordWrap:"break-word",}} >

<Icon className = "close" onClick={props.cancel} / >

<div class = "header" > {props.obj["success_or_error_message"]} < /div> 



< /div >}

            </center > 

        < / div > : null } </div>);

}
export default FormMessage;