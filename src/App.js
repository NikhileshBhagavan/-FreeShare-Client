import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ViewBook from "./components/viewbook";
import ShareBook from "./components/sharebook";
import Contact from "./components/contact";

function App() {
    return ( < Router > < Navbar / > < Routes >
        <
        Route exact path = '/'
        element = { < Home / > } > < /Route> <
        Route exact path = '/viewbook'
        element = { < ViewBook / > } > < /Route> <
        Route exact path = '/sharebook'
        element = { < ShareBook / > } > < /Route> <
        Route exact path = '/contact'
        element = { < Contact / > } > < /Route> < /
        Routes > < /Router > );

    }

    export default App;