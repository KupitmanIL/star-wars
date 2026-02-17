import NavItem from "./NavItem.jsx";
import {navItems} from "../utils/constants.js";

const Navigation = () => {
    return (
        <nav className="fixed-top mt-2 ms-5">
            <ul className="nav gap-2">
                {navItems.map(item => <NavItem itemTitle={item} key={item}/>)}
            </ul>
        </nav>
    )
}

export default Navigation;