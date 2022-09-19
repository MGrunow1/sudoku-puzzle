import RepeatSmallRows from "./RepeatSmallRows";

export default function SubGrid({subGridNumber}) {
    const puzzleSize = {subrows: 3, subcols: 4}
    return (
    <>
    <div>
        <RepeatSmallRows rows={puzzleSize.subrows} cols={puzzleSize.subcols} subGridNumber={subGridNumber} />
    </div>
    </>
    )
}
