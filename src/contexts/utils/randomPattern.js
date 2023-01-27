// import { getRowIndices } from "./getIndices";
// import { shuffleRowsByPattern } from "./shuffleRowsByPattern";

const randomPattern = (subcols, subrows) => {
    let scrambleArray = [];
    if(subcols === 3 && subrows === 4) {
        switch(Math.floor(Math.random() * 14)) {
            case 0:
                scrambleArray = ["abcd", "abcd", "bdca", "adcb", "cbda", "badc", "badc", "acbd", "badc", "cabd", "bacd", "dbac"];
                break;
            case 1:
                scrambleArray = ["abcd", "acbd", "cdab", "cdab", "acbd", "abcd", "abcd", "bcda", "bcad", "dcab", "bcad", "cdba"];
                break;
            case 2:
                scrambleArray = ["abcd", "abdc", "bcda", "bdca", "bdac", "badc", "bacd", "bacd", "dbac", "cadb", "bacd", "abcd"];
                break;
            case 3:
                scrambleArray = ["abcd", "acbd", "cdab", "cdab", "acbd", "abcd", "abcd", "bcda", "bcad", "dcab", "bcad", "cdba"];
                break;
            case 4:
                scrambleArray = ["abcd", "adbc", "cdba", "cdab", "adbc", "abdc", "abcd", "cabd", "bcad", "dcab", "acbd", "cdab"];
                break;
            case 5:
                scrambleArray = ["abcd", "bacd", "abcd", "dbca", "bdca", "acdb", "abdc", "badc", "dabc", "acbd", "dabc", "abcd"];
                break;
            case 6:
                scrambleArray = ["abcd", "bacd", "adbc", "cbda", "bacd", "badc", "abdc", "dbca", "badc", "bdac", "abdc", "cbad"];
                break;
            case 7:
                scrambleArray = ["abcd", "bcda", "bdac", "bcda", "cabd", "badc", "cabd", "acdb", "dabc", "abcd", "badc", "abcd"];
                break;
            case 8:
                scrambleArray = ["abcd", "cbda", "adbc", "bdca", "acdb", "cbda", "cbda", "dcab", "acdb", "adbc", "acdb", "cdab"];
                break;
            case 9:
                scrambleArray = ["abcd", "cbda", "dbac", "dbca", "adbc", "abcd", "abcd", "badc", "acdb", "abcd", "badc", "cabd"];
                break;
            case 10:
                scrambleArray = ["abcd", "dabc", "dcba", "dcab", "dabc", "badc", "bacd", "abcd", "dbac", "cdab", "cbad", "dbac"];
                break;
            case 11:
                scrambleArray = ["abcd", "dbca", "cadb", "cbda", "acdb", "cabd", "cbda", "dabc", "dbca", "dbac", "bdca", "dbca"];
                break;
            case 12:
                scrambleArray = ["abcd", "dcab", "adbc", "bcad", "adbc", "adbc", "cdba", "abcd", "dabc", "abcd", "dcab", "adbc"];
                break;
            case 13:
                scrambleArray = ["abcd", "dcba", "adcb", "bcda", "acdb", "adcb", "cdba", "adbc", "dacb", "abdc", "dbca", "adcb"];
                break;
            default:
                // leave pattern alone
                scrambleArray = ["abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd"];
        }
    }

    return scrambleArray;
}

export { randomPattern };
