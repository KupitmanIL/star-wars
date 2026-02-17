const Friend = ({friend, pos}) => {
    let styles = "col-sm-4 p-1";
    if (pos === 9) {
        styles += " rounded-bottom-right";
    }
    if (pos === 7) {
        styles += " rounded-bottom-left";
    }
    return (
        <img className={styles} src={friend} alt="Friend"/>
    )
}

export default Friend;