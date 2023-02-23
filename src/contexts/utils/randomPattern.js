// choose random pattern for scrambling
// order of letters in each part of array is order of columns in row
// these patterns are ones that avoid copying two duplicates into the same column
const randomPattern = (subcols, subrows) => {
    let scrambleArray = [];
    if(subcols === 2 && subrows === 3) {
        // patterns for size 6
        switch(Math.floor(Math.random() * 3)) {
            case 0:
                scrambleArray = ["abc", "bca", "bca", "bac", "bac", "cba"];
                break;
            case 1:
                scrambleArray = ["abc", "bca", "cba", "bac", "abc", "cba"];
                break;
            case 2:
                scrambleArray = ["abc", "cab", "cba", "abc", "acb", "cba"];
                break;
            default:
                // leave pattern alone
        }
    } else if(subcols === 2 && subrows === 4) {
        // patterns for size 8
        switch(Math.floor(Math.random() * 6)) {
            case 0:
                scrambleArray = ["abcd", "acdb", "acdb", "cabd", "badc", "acdb", "cbad", "dabc"];
                break;
            case 1:
                scrambleArray = ["abcd", "bcad", "dcab", "cabd", "badc", "dcba", "dbac", "dabc"];
                break;
            case 2:
                scrambleArray = ["abcd", "cadb", "dbca", "acbd", "abdc", "dacb", "acbd", "abcd"];
                break;
            case 3:
                scrambleArray = ["abcd", "dacb", "acdb", "abcd", "badc", "abcd", "bcad", "dbca"];
                break;
            case 4:
                scrambleArray = ["abcd", "dacb", "cbad", "bdac", "dbca", "dabc", "bcad", "dabc"];
                break;
            case 5:
                scrambleArray = ["abcd", "dcab", "cdab", "acbd", "abdc", "acbd", "bcad", "cdba"];
                break;
            default:
                // leave pattern alone
        }
    } else if(subcols === 3 && subrows === 3) {
        switch(Math.floor(Math.random() * 6)) {
            // patterns for size 9
            case 0:
                scrambleArray = ["abc", "acb", "abc", "bca", "bac", "bca", "cab", "cba", "cab"];
                break;
            case 1:
                scrambleArray = ["abc", "acb", "acb", "bca", "bac", "bac", "cab", "cba", "cba"];
                break;
            case 2:
                scrambleArray = ["abc", "acb", "cba", "bca", "cab", "acb", "cab", "abc", "cab"];
                break;
            case 3:
                scrambleArray = ["abc", "bca", "cab", "bca", "cab", "abc", "bac", "acb", "cba"];
                break;
            case 4:
                scrambleArray = ["abc", "cab", "acb", "cba", "abc", "bac", "acb", "cba", "cba"];
                break;
            case 5:
                scrambleArray = ["abc", "cab", "bac", "cba", "abc", "bca", "acb", "bca", "cab"];
                break;
            default:
                // leave pattern alone
        }
    } else if(subcols === 3 && subrows === 4) {
        // patterns for size 12
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
        }
    } else if(subcols === 3 && subrows === 5) {
        // patterns for size 15
        switch(Math.floor(Math.random() * 8)) {
            case 0:
                scrambleArray = ["abcde", "adbce", "becda", "adebc", "bdeca", "dbcae", "cdbea", "caedb", "bdeca", "dabce", "ecabd", "eacdb", "ecdab", "bcade", "edabc"];
                break;
            case 1:
                scrambleArray = ["abcde", "aebcd", "bdcea", "aedbc", "ebcda", "cdeab", "cbdea", "adebc", "caebd", "dbace", "eabcd", "ecadb", "ecdab", "acbde", "edabc"];
                break;
            case 2:
                scrambleArray = ["abcde", "baecd", "cabed", "bcdea", "cabed", "acdbe", "badce", "abdce", "eabdc", "beadc", "cbade", "abcde", "baced", "acdeb", "abcde"];
                break;
            case 3:
                scrambleArray = ["abcde", "cbaed", "bcade", "cdaeb", "dcabe", "daceb", "dabce", "dabec", "ebacd", "baedc", "acbed", "abced", "cbaed", "dacbe", "dbace"];
                break;
            case 4:
                scrambleArray = ["abcde", "dabce", "beadc", "ecadb", "bacde", "cabed", "bacde", "cbade", "eabcd", "beadc", "ecbda", "baced", "cabed", "bacde", "dbace"];
                break;
            case 5:
                scrambleArray = ["abcde", "dcbae", "decba", "bdeac", "bceda", "acedb", "edbca", "decab", "caebd", "cabde", "bcaed", "dcaeb", "acdeb", "dacbe", "edabc"];
                break;
            case 6:
                scrambleArray = ["abcde", "ebdac", "edbac", "aecdb", "aebcd", "bdcae", "dbcae", "aedcb", "bacde", "becda", "dabec", "ecdba", "eacdb", "badec", "edbca"];
                break;
            case 7:
                scrambleArray = ["abcde", "ecbda", "bcdea", "adebc", "becda", "dceab", "cdbea", "bedac", "bcade", "dabce", "eabcd", "ecdab", "bcdae", "bacde", "edacb"];
                break;
            default:
                // leave pattern alone
        }
    }

    return scrambleArray;
}

export { randomPattern };
