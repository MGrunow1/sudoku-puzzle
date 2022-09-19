import './grid.css'
import RepeatBigRows from "./RepeatBigRows";

export default function ShowGrid() {
    const puzzleSize = {subrows: 3, subcols: 4}
    return (
    <>
    <div className='Thickborder'>
        <RepeatBigRows rows={puzzleSize.subrows} cols={puzzleSize.subcols}/>
    </div>
    </>
    )
}
