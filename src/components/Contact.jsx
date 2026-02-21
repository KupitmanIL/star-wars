import { useEffect, useState } from "react";
import { base_url } from "../utils/constants.js";
import {TTL_MS} from "../utils/constants.js";

const STORAGE_KEY_CONTACT = "hero_v1_planets_1";

function readFromStorage() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY_CONTACT);
        if (!raw) return { data: null, isExpired: true };

        const parsed = JSON.parse(raw);
        if (!parsed?.savedAt || !parsed?.data) return { data: null, isExpired: true };

        const isExpired = Date.now() - parsed.savedAt > TTL_MS;
        return { data: parsed.data, isExpired };
    } catch {
        return { data: null, isExpired: true };
    }
}
function saveToStorage(data) {
    try {
        localStorage.setItem(
            STORAGE_KEY_CONTACT,
            JSON.stringify({ savedAt: Date.now(), data })
        );
    } catch {}
}

const Contact = () => {
    const [planets, setPlanets] = useState([]);
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        planet: "",
        subject: "",
    });

    useEffect(() => {
        const{data:cached,isExpired} = readFromStorage();
        if (cached){
            setPlanets(cached);
        }
        if(!cached||isExpired){
            fetch(`${base_url}/v1/planets`)
                .then(res => res.json())
                .then(data => {
                    const list = data.results ?? data;
                    setPlanets(list);
                    saveToStorage(list);
                });
        }
    }, []);

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="container">
            <form onSubmit={onSubmit}>

                <label htmlFor="fname">First Name</label>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={form.fname}
                    onChange={onChange}
                />

                <label htmlFor="lname">Last Name</label>
                <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={form.lname}
                    onChange={onChange}
                />

                <label htmlFor="planet">Planet</label>
                <select
                    id="planet"
                    name="planet"
                    value={form.planet}
                    onChange={onChange}
                >
                    <option value="">Select planet</option>

                    {planets.map((planet) => (
                        <option key={planet.url ?? planet.name} value={planet.name}>
                            {planet.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    style={{ height: "200px" }}
                />

                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default Contact;
