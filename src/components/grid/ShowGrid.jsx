import RepeatBigRows from "./RepeatBigRows";

export default function ShowGrid() {
    const puzzleSize = {subrows: 3, subcols: 4}
    return (
    <>
    <div>
        <RepeatBigRows rows={puzzleSize.subrows} cols={puzzleSize.subcols}/>
    </div>
    </>
    )
}
