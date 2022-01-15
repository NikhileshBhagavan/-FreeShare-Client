import React from "react";
import { Button, Icon } from 'semantic-ui-react';

function ImageUpload(props) {

    return (<div className="field imageupload">
    <label for="file-input">
   <div className="ui blue button">Upload Front View Of Book</div>
    </label>

    <input id="file-input" type="file" accept="image/*" style={{display:"none"}} onChange={props.func}/>
<br/><br/></div>);

}

export default ImageUpload;