import React from "react";

function Genre(props) {
    return (
         
        < div class = "field" >

            <label > < span ><b> Department / Genre </b> : < /span>< /label >


            <select name = "department" style = { { width: "75%" ,marginTop:"10px"}} value={props.obj["Is_Book_Department_Others"] ? "Others" : props.obj["Book_Department"]} onChange={props.change} >
            {props.list.map((obj,index)=>{
                return (<option key={index} value={obj}>{obj}</option>);
            })}


            </select> 

        < / div > );
}
export default Genre;