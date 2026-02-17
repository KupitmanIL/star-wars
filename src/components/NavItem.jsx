const NavItem = ({itemTitle}) => {
    return (
        <li onClick={() => alert(itemTitle)} className="nav-item btn btn-danger border-warning">{itemTitle}</li>
    )
}

export default NavItem;