import OpeningCrawl from "./OpeningCrawl.jsx";
import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";

const Home = () => {
    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    )
}

export default Home;