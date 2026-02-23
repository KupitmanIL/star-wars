import { base_url } from "../utils/constants.js";
import { useEffect, useState } from "react";

const STORAGE_KEY_ABOUT = "hero_v1_peoples_1";

function readHeroFromStorage() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY_ABOUT);
        if (!raw) return { hero: null, isExpired: true };

        const parsed = JSON.parse(raw);
        if (!parsed?.savedAt || !parsed?.data) return { hero: null, isExpired: true };

        const isExpired = Date.now() - parsed.savedAt > TTL_MS;
        return { hero: parsed.data, isExpired };
    } catch {
        return { hero: null, isExpired: true };
    }
}

function saveHeroToStorage(hero) {
    try {
        localStorage.setItem(
            STORAGE_KEY_ABOUT,
            JSON.stringify({ savedAt: Date.now(), data: hero })
        );
    } catch {

    }
}

const AboutMe = () => {
    const [hero, setHero] = useState(null);

    useEffect(() => {
        const { hero: cachedHero, isExpired } = readHeroFromStorage();

        if (cachedHero) setHero(cachedHero);

        if (!cachedHero || isExpired) {
            fetch(`${base_url}/v1/peoples/1`)
                .then((response) => response.json())
                .then((data) => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color,
                    };

                    setHero(info);
                    saveHeroToStorage(info);
                })
                .catch(() => {

                });
        }
    }, []);

    return (
        <>
            {!!hero && (
                <div className="fs-2 lh-lg text-justify ms-5">
                    <p>
                        <span className="display-3">name:</span> {hero.name}
                    </p>
                    <p>
                        <span className="display-3">gender:</span> {hero.gender}
                    </p>
                    <p>
                        <span className="display-3">birth year:</span> {hero.birth_year}
                    </p>
                    <p>
                        <span className="display-3">height:</span> {hero.height}
                    </p>
                    <p>
                        <span className="display-3">mass:</span> {hero.mass}
                    </p>
                    <p>
                        <span className="display-3">hair color:</span> {hero.hair_color}
                    </p>
                    <p>
                        <span className="display-3">skin color:</span> {hero.skin_color}
                    </p>
                    <p>
                        <span className="display-3">eye color:</span> {hero.eye_color}
                    </p>
                </div>
            )}
        </>
    );
};

export default AboutMe;
