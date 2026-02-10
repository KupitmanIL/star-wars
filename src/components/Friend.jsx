import { FriendsStyle, FriendsRoundedPositions } from "../utils/constants.js";

const Friend = ({ src, index }) => {
    const className = [
        FriendsStyle,
        FriendsRoundedPositions[index],
    ]
        .filter(Boolean)
        .join(" ");

    return <img className={className} src={src} alt="Friend" />;
};

export default Friend;
