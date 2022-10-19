// create a list from 1 to the maximum number
function scrambledCount(size) {
    // start with 1
    let countList = [1];
    for(let loop = 1; loop < size; loop++) {
        // choose random spot in list
        const randomIndex = Math.floor(Math.random() * countList.length);
        // insert in that random spot
        countList = countList.slice(0, randomIndex).concat(loop + 1).concat(countList.slice(randomIndex, countList.length));
    }
    return countList;
}

export { scrambledCount };
