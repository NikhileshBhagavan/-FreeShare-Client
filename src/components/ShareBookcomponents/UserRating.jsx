import React from "react";
import Rating from '@material-ui/lab/Rating';

function UserRating(props) {
    return ( < >
    <div className="ui segment rate" >

        <label > <b> Rating</b>: < /label>

        <Rating name = "Rating Label" value = { props.obj.Rating } onChange={props.func}/>
       
       
        </div> </ > );
    }
    export default UserRating;

