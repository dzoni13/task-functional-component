import "./CounterItem.css";

export default function CounterItem(props) {
    return (
        <div className="counterWraper">
            <h1> {props.timer} </h1>
            <button className="stopButton" onClick={() => props.stopCounter()}>Stop Timer</button>
        </div>
    );
};


