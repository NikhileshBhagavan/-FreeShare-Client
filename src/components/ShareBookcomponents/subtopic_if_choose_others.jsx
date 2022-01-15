import React from "react";

function SubTopic(props) {
    return ( 
        < div class = "field" >

            <input name="Book_SubDepartment" style = {{ width: "75%" }}  placeholder = "Sub-Topic" type = "text" value={props.obj["Book_SubDepartment"]} onChange={props.change} / >

        </div> );
    }
export default SubTopic;