import friend1 from '../assets/friend1.jpg'
import friend2 from '../assets/friend2.jpg'
import friend3 from '../assets/friend3.jpg'
import friend4 from '../assets/friend4.jpg'
import friend5 from '../assets/friend5.jpg'
import friend6 from '../assets/friend6.jpg'
import friend7 from '../assets/friend7.jpg'
import friend8 from '../assets/friend8.jpg'
import friend9 from '../assets/friend9.jpg'
import Friend from "./Friend.jsx";

const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border border-warning rounded-bottom-5 my-1 ms-2 me-0">
            <h2 className="col-sm-12 text-center">Dream team</h2>
            <Friend friend={friend1}/>
            <Friend friend={friend2}/>
            <Friend friend={friend3}/>
            <Friend friend={friend4}/>
            <Friend friend={friend5}/>
            <Friend friend={friend6}/>
            <Friend friend={friend7} pos={7}/>
            <Friend friend={friend8}/>
            <Friend friend={friend9} pos={9}/>
        </section>
    )
}

export default DreamTeam;