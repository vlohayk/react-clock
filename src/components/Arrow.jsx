import {useEffect, useState} from "react";

const Arrow = (props) => {
    const [style, setStyle] = useState(props.style);
    let angle = 0;

    // updates the clock every second
    useEffect(() => {
        const interval = setInterval(() => {
            switch (props.id) {
                case "second-arrow":
                    angle = 6 * (new Date().getSeconds());
                    setStyle({...style, transform: "rotate(" + angle + "deg)"});
                    break;
                case "minute-arrow":
                    angle = 6 * (new Date().getMinutes());
                    setStyle({...style, transform: "rotate(" + angle + "deg)"});
                    break;
                case "hour-arrow":
                    angle = 30 * (new Date().getHours()) + (new Date().getMinutes()) / 2;
                    setStyle({...style, transform: "rotate(" + angle + "deg)"});
                    break;
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [props.id]);

    return (
        <div id={props.id} style={style}>
            <div className="visible"></div>
            <div className="invisible"></div>
        </div>
    )
}

export default Arrow;