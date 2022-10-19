// get the list of index numbers for cells in a column
const getColIndices = (colNum, subcols, subrows) => {
    const subGridSize = subcols * subrows;
    const bigColNum = Math.floor(colNum / subcols);
    let colStart = (colNum % subcols)
    colStart += bigColNum * subGridSize;
    let indexArray = [];
    for(let bigRowIndex = 0; bigRowIndex < subcols; bigRowIndex++) {
        for(let rowIndex = 0; rowIndex < subrows; rowIndex++) {
            const index = colStart + (rowIndex * subcols) + (bigRowIndex * subGridSize * subrows);
            indexArray.push(index);
        }
    }
    return indexArray;
}
    
// get the list of index numbers for cells in a row
 const getRowIndices = (rowNum, subcols, subrows) => {
    const subGridSize = subcols * subrows;
     const bigRowNum = Math.floor(rowNum / subrows);
    let rowStart = (rowNum % subrows) * subcols;
    rowStart += bigRowNum * (subrows * subGridSize);
    let indexArray = [];
    for(let bigColIndex = 0; bigColIndex < subrows; bigColIndex++) {
        for(let colIndex = 0; colIndex < subcols; colIndex++) {
            const index = rowStart + colIndex + (bigColIndex * subGridSize);
            indexArray.push(index);
        }
    }
    return indexArray;
}

export { getColIndices, getRowIndices };
