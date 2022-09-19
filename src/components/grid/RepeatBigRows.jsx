// Based on React documentation
// https://reactjs.org/docs/jsx-in-depth.html
import { React } from "react";
import BigRow from "./BigRow";

export default function RepeatBigRows({rows, cols}) {
    let items = [];
    for (let i = 0; i < cols; i++) {
        items.push(<BigRow bigRowNumber={i} times={rows} key={i} />);
    }
    return (<div>{items}</div>);
}
