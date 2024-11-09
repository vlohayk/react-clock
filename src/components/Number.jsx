const Number = ({number}) => {
    const top = 185 + 185 * Math.sin((number - 3) * (Math.PI / 6));
    const left = 190 + 185 * Math.cos((number - 3) * (Math.PI / 6));
    return <div id={"number-" + number} className="number" style={{top: top, left: left}}>{number}</div>;
}

export default Number;
