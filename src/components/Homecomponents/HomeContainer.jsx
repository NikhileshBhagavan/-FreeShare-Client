import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';


function HomeContainer() {


    return (

        <
        div style = {
            { height: "100%", position: "relative" }
        } >


        <
        div style = {
            {
                color: "white",
                margin: "0",
                position: "absolute",
                top: "50%",
                left: "50%",

                transform: "translate(-50%, -50%)"
            }
        } >

        <
        h1 > Holla!! < /h1> 

        <
        h3 > <a href="/" style={{color:"#4183c4"}}>FreeShare</a> &nbsp;is a E - Book📚 Sharing Platform < /h3> 

        <
        br / >


        <
        Link to = "/viewbook" >

        <
        Button animated style = {
            { width: "300px" }
        } >

        <
        Button.Content visible > < Icon className = ' download' / > < /Button.Content>

        <
        Button.Content hidden >

        View And Download Books

        <
        /Button.Content>

        <
        / Button >

        <
        /Link > 

        <
        br / >

        <
        br / >

        <
        Link to = "/sharebook" >

        <
        Button animated = "vertical"
        style = {
            { width: "300px" }
        } >

        <
        Button.Content visible > < Icon className = ' share' / > < /Button.Content>

        <
        Button.Content hidden >

        Share Books

        <
        /Button.Content> 

        <
        /Button >

        <
        /Link > <
        br / > < br / > <
        a href = "/admin"
        style = {
            { fontSize: "1.1rem", color: "white", }
        } > Are u an admin ?  &nbsp; < span style = {
            { color: "#4183c4" }
        } > < b > Click here < /b>< /span > < /a > < /
        div >

        <
        /div >

    );
}
export default HomeContainer;