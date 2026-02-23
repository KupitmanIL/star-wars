import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import StarWars from "./StarWars.jsx";
import {navItems,StarWarsContext} from "../utils/constants.js";
import {useContext} from "react";

const Main = () => {
const {page} = useContext(StarWarsContext)
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