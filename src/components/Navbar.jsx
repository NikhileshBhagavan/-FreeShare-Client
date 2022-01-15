import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

function Navbar() {
    return ( < header > < nav class = "navbar" >

        <
        div class = "logo" > < Link to = "/"
        style = {
            { color: "white" }
        } > < i class = "book icon" > < /i> &nbsp;FreeShare </Link > < /div >

        <
        ul class = "nav-links" >

        <
        input type = "checkbox"
        id = "checkbox_toggle" / >
        <
        label
        for = "checkbox_toggle"
        class = "hamburger" > < i class = "align right icon" > < /i>< /label >







        <
        div class = "menu" >
        <
        Link to = "/" >
        <
        li > Home < /li > < /Link >

        <
        li class = "services" >
        <
        a href = "#" > Books < /a> <
        ul class = "dropdown" >
        <
        Link to = "/viewbook" >
        <
        li > View < /li >< /Link >
        <
        Link to = "/sharebook" >
        <
        li > Share < /li > < /Link >




        <
        /ul> </li > < Link to = "/contact" > <
        li > Contact < /li >< /Link >
        <
        a href = "/admin
        "> <
        li > Admin < /li></a >


        <
        /div> < /
        ul > <
        /nav></header > );
}
export default Navbar;