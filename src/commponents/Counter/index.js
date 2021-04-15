import React, { useEffect } from "react";
import CounterItem from "./CounterItem";
import "./index.css";

export default function Counter(props) {
    const [timer, setTimer] = React.useState(props.initialTime);

    const intervalId = React.useRef(null);

    const clear = () => {
        window.clearInterval(intervalId.current);
    };

    useEffect(() => {
        intervalId.current = window.setInterval(() => {
            setTimer((time) => time - 1);
        }, 1000);
        return () => clear();
    }, []);

    useEffect(() => {
        if (timer === 0) {
            clear();
        }
    }, [timer]);

    return (
        <div className="counterContainer">
            <CounterItem timer={timer} stopCounter={clear} />
        </div>
    );
}
