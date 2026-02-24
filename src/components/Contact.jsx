
import {base_url, period_month} from "../utils/constants.js";
import {useEffect, useState} from "react";

const Contact = () => {
    const [planets, setPlanets] = useState(() => {
        const planets = JSON.parse(localStorage.getItem('planets'));
        if (planets && ((Date.now() - planets.time) < period_month)) {
            return planets.payload;
        } else {
            return ['wait...']
        }
    });

    useEffect(() => {
        const getPlanets = async () => {
            const res = await fetch(`${base_url}/v1/planets`);
            const data = await res.json();
            const planets = data.map(item => item.name);
            setPlanets(planets);
            localStorage.setItem('planets', JSON.stringify({
                payload: planets,
                time: Date.now()
            }));
        }

        if (planets.length === 1){
            getPlanets().then(() => console.log('Planets were loaded'));
        }
    }, [])

    return (
        <form
            className="container text-3xl leading-normal tracking-widest
             grid grid-cols-5 gap-x-6 gap-y-4 items-center"
            onSubmit={(e) => e.preventDefault()}
        >
            <label className="text-center grid-cols-1 col-start-1">First Name:</label>
            <input className="w-full border text-center grid-cols-1" type="text" />

            <label className="text-center grid-cols-1 col-start-1">Last Name:</label>
            <input className="w-full border text-center grid-cols-1" type="text" />

            <label className="text-center grid-cols-start-1 col-start-1">Planet:</label>
            <select className="w-full border text-center grid-cols-1">
                {planets.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>

            <label className="text-center grid-cols-1 col-start-1">Subject:</label>
            <textarea className="w-full border text-center grid-cols-1"></textarea>

            <div></div>
            <button className="bg-danger rounded-md px-3 border cursor-pointer hover:bg-red-500 hover:text-white
             grid-cols-1 col-start-1 ">Submit</button>
        </form>
    )
}

export default Contact;