// calculate column that a cell is in
const getCellCol = (index, subcols, subrows) => {
    const bigCol = Math.floor(index / (subcols * subrows)) % subrows;
    const colNumber = (index % subcols) + (bigCol * subcols);
    return colNumber;
}

// calculate row that a cell is in
const getCellRow = (index, subcols, subrows) => {
    const subGridNumber = Math.floor(index / (subcols * subrows));
    const bigRow = Math.floor(subGridNumber / subrows);
    const rowNumber = (Math.floor(index/subcols) % subrows) + (bigRow * subrows);
    return rowNumber;
}

export { getCellCol, getCellRow };
