import {useContext} from "react";
import {StarWarsContext} from "../utils/constants.js";

const NavItem = ({itemTitle}) => {
    const {setPage} = useContext(StarWarsContext)
    return (
        <div onClick={() => setPage(itemTitle)} className={`bg-danger rounded-md px-3 border cursor-pointer hover:bg-red-500 hover:text-white`}>{itemTitle}</div>
    )
}

export default NavItem;