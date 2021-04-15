import "./FootballMatch.css";

function FootballMatch(props) {
    return (
        <li className="listElement">Match {props?.item?.name} won by {props?.item?.winner}</li>
    )
};

export default FootballMatch;



