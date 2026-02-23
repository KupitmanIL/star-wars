import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import {navItems, StarWarsContext} from "./utils/constants.js";

function App() {
    const [page, setPage] = useState(navItems[0]);

    return (
        <div className={'mx-2'}>
            <StarWarsContext.Provider value={{page, setPage}}>
                <Header />
                <Main />
                <Footer/>
            </StarWarsContext.Provider>
        </div>
    )
}

export default App
