import {base_url, period_month} from "../utils/constants.js";
import {useEffect, useState} from "react";

const AboutMe = () => {
    const [hero, setHero] = useState(() => {
        const hero = JSON.parse(localStorage.getItem("hero"));
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            return hero.payload;
        }
    });

    useEffect(() => {
        if (!hero) {
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem("hero", JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }
    }, [])


    return (
        <>
            {(!!hero) &&
                <div className="text-3xl text-justify leading-normal tracking-widest">
                    {Object.entries(hero).map(([key, value]) => (
                        <p key={key}>
                        <span className="display-3">
                        {key.replace(/_/, " ")}:
                        </span>{" "}
                            {value}
                        </p>
                    ))}
                </div>
            }
        </>
    );

}

export default AboutMe;