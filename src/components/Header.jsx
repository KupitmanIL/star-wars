import Navigation from "./Navigation.jsx";

const Header = ({changePage}) => {
    return (
        <header className="rounded-top-5">
            <Navigation changePage={changePage}/>
            <h1 className="text-center fs-1 py-4">Luke Skywalker</h1>
        </header>
    )
}

export default Header;