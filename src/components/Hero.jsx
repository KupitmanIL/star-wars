import hero from "../assets/main.jpg";

const Hero = () => {
    return (
        <section className="float-start w-25 mt-1 me-3">
            <img className="w-100" src={hero} alt="Luke Skywalker"/>
        </section>
    );
};

export default Hero;