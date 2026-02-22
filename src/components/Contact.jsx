import {friends} from "../utils/constants.js";
import {useEffect, useState} from "react";
import {getPlanets} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState(() => {
        const saved = localStorage.getItem("planets");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        getPlanets().then((list) => {
            setPlanets(list);
            localStorage.setItem("planets", JSON.stringify(list));
        });
    }, []);
    if (planets.length === 0) {
        return (
            <p className="far-galaxy">
                <span className={'spinner-border spinner-border-sm'}></span>
                <span className={'spinner-grow spinner-grow-sm'}>Loading...</span>
            </p>
        )
    }
    else {
        return (
            <div className="container">
                <div >
                    <h2>Contact Us</h2>
                    <p>We will answer you at cosmic speed!</p>
                </div>
                <div className="row">
                    <div className="column">
                        <img src={friends[6]} style={{ width: '33%' }} />
                    </div>
                    <div className="column" style={{ width: '100%'  }}>
                        <form >
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                            <label htmlFor="country">Planet</label>
                            <select id="planetId" name='planetName'>
                                {planets.map((planets) => (<option key={planets.id} value={planets.name}>{planets.name}</option>
                                ))}
                            </select>
                            <label htmlFor="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;