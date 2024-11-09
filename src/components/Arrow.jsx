import {useEffect, useState} from "react";

const Arrow = (props) => {
    const [style, setStyle] = useState(props.style);
    const [minute, setMinute] = useState(new Date().getMinutes());
    const [second, setSecond] = useState(new Date().getSeconds());
    let angle = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            setMinute(new Date().getMinutes());
            setSecond(new Date().getSeconds());
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });

    useEffect(() => {
        if (props.id === "second-arrow") {
            angle = 6 * second;
            setStyle({...style, transform: "rotate(" + angle + "deg)"});
        }
    }, [second]);

    useEffect(() => {
        if (props.id === "minute-arrow") {
            angle = 6 * minute;
            setStyle({...style, transform: "rotate(" + angle + "deg)"});
        } else if (props.id === "hour-arrow") {
            angle = 30 * (new Date().getHours()) + minute / 2;
            setStyle({...style, transform: "rotate(" + angle + "deg)"});
        }
    }, [minute]);

    return (
        <div id={props.id} style={style}>
            <div className="visible"></div>
            <div className="invisible"></div>
        </div>
    )
}

export default Arrow;