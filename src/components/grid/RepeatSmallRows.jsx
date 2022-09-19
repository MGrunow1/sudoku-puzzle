import SmallRow from "./SmallRow";

export default function RepeatSmallRows({rows, cols, subGridNumber}) {
    let items = [];
    for (let i = 0; i < rows; i++) {
        items.push(<SmallRow smallRowNumber={i} subGridNumber={subGridNumber} rows={rows} cols={cols} key={i} />);
    }
    return (<div>{items}</div>);
}
