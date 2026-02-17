import { base_url } from "../utils/constants.js";
import { useEffect, useState } from "react";
import mainImg from "../assets/main.jpg";

const AboutMe = () => {
    const [person, setPerson] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(res => {
                if (!res.ok) throw new Error(res.status);
                return res.json();
            })
            .then(data => setPerson(data))
            .catch(() => setError("Error loading About Me"));
    }, []);

    if (error) {
        return <p className="far-galaxy">{error}</p>;
    }

    if (!person) {
        return (
            <p className="far-galaxy">
                <span className="spinner-border spinner-border-sm"></span>
            </p>
        );
    }

    return (
        <div className="far-galaxy">
            <p>Name: {person.name}</p>
            <p>Gender: {person.gender}</p>
            <p>Height: {person.height}</p>
            <p>Hair color: {person.hair_color}</p>
            <p>Eye color: {person.eye_color}</p>
            <p>
                <img src={mainImg} alt={person.name}/>
            </p>
        </div>
    );
};

export default AboutMe; AboutMe;