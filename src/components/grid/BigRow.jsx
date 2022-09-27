import { FlexRow } from "./GridStyles";
import SubGrid from "./SubGrid"

export default function BigRow({times, bigRowNumber}) {
    let items = [];
    for (let i = 0; i < times; i++) {
        const subGridNumber = (bigRowNumber * times) + i;
        items.push(<SubGrid subGridNumber={subGridNumber} key={i} />);
    }
    return (<FlexRow>{items}</FlexRow>);
}
