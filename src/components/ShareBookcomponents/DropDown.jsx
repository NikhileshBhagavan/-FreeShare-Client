import React from "react";

function Dropdown(props) {
    return ( < >
    
 


        <div className = "header" style={{marginBottom:"10px",color:"darkblue"}} > 

            <b>📚Upload Book📚 </b>
            

        </div > 

        < div className = "content kill" >

            <div id = 'holder' >

            < div {...props.root() } >

            <input {...props.inp() }/>

                <i className = "file pdf outline icon upic" > < /i> 

                <br / >

                < br / >

                <span> <b > Drag and drop < /b> or <b>Click</b> to upload file  </span> 
               
            </div>

            < /div > 

        </div>




< / > );

    }
export default Dropdown;