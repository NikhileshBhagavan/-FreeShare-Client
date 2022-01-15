import React from "react";

function Topic(props) {
    console.log(props.obj);
    return (
        < div class = "field" >

            <input name="Book_Department" style = {{ width: "70%" } } placeholder = "Topic" type = "text" value={props.obj["Book_Department"]} onChange={props.change} required = "required" / >   <span style={{color:"red"}}>*</span>

        </div>

        );
    }
export default Topic;