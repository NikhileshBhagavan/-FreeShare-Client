import React from "react";

function BookTitle(props) {
    return (
         < div class = "field" style={{marginTop:"15px"}}>

            <label > <b>Book Title<span style={{color:"red"}}>*</span></b> < /label > :&nbsp;
            <br/>

            <input autoComplete="off" name="Book_title" style = { { width: "76%" ,marginTop:"10px"} } placeholder = "Book Title" type = "text" value={props.obj["Book_title"]} onChange={props.change} required = "required" / >
            
        </div>);
}
export default BookTitle;