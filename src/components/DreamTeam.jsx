import Friend from "./Friend.jsx";
import { friends } from "../utils/constants.js";

const DreamTeam = () => {
    return (
        <div className="d-flex float-end w-50 row m-lg-0">
            {friends.map((src, index) => (
                <Friend
                    key={src}
                    src={src}
                    index={index}
                />
            ))}
        </div>
    );
};

export default DreamTeam;