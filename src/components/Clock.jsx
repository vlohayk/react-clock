import Frame from "./Frame.jsx";
import Number from "./Number.jsx";
import Center from "./Center.jsx";
import Arrow from "./Arrow.jsx";
import {hourArrow, minuteArrow, secondArrow} from "../config/clock.js";

const Clock = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
    <Frame id="clock-frame">
        {numbers.map((number) =>{
            return <Number number={number} key={number} />;
        })}
        <Center/>
        <Arrow id="hour-arrow" style={hourArrow} />
        <Arrow id="minute-arrow" style={minuteArrow}/>
        <Arrow id="second-arrow" style={secondArrow}/>
    </Frame>
)
}

export default Clock;
