import React from "react";

function Topic(props) {
    console.log(props.obj);
    return (
        < div class = "field" >

            <input name="Book_Department" style = {{ width: "75%" } } placeholder = "Topic" type = "text" value={props.obj["Book_Department"]} onChange={props.change} required = "required" / >   

        </div>

        );
    }
export default Topic;