import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import StarWars from "./StarWars.jsx";
import {useState} from "react";
import {navItems} from "../utils/constants.js";

const Main = () => {
    const [page, setPage] = useState(navItems[3]);

    switch (page) {
        case navItems[1]:
            return <AboutMe/>;
        case navItems[2]:
            return <StarWars/>;
        case navItems[3]:
            return <Contact/>;
        default:
            return <Home/>;
    }
}

export default Main;