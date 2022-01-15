import React from "react";

function SubGenre(props) {
    console.log(props.list);
    return (
       
        < div class = "field" >
        <br/>
        <center>

            < label > < span > <b> Sub Department </b>: < /span>< /label >

            <select name = "department" style = {{ width: "75%" ,marginTop:"10px"}}  value={props.obj["Is_SubBook_Department_Others"] ? "Others" : props.obj["Book_SubDepartment"]} onChange={props.change}>

            {props.list.map((obj,index)=>{
                return (<option key={index} value={obj}>{obj}</option>);
            })}

            </select>
            </center>
         
        < /div > );
}
export default SubGenre;