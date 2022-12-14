import { FlexRow } from "./GridStyles";
import GridCell from "./GridCell";

export default function SmallRow({smallRowNumber, subGridNumber, rows, cols}) {
    let items = [];
    for (let i = 0; i < cols; i++) {
        const spaceNumber = (subGridNumber * rows * cols) + (smallRowNumber * cols) + i;
        items.push(<GridCell spaceNumber={spaceNumber} key={i} />);
    }
    return (<FlexRow>{items}</FlexRow>);
}
