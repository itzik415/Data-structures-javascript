//How do you find duplicate numbers in an array if it contains multiple duplicates?
function duplicateNumbers(array) {
    let orderNumbers = {};
    let duplicateNumbersArray = [];
    for(let i = 0; i < array.length; i++) {
        if(!orderNumbers[array[i]]) {
            orderNumbers[array[i]] = 1;
        } else {
            duplicateNumbersArray.push(array[i])
        }
    }
    console.log([...new Set(duplicateNumbersArray)])
    return 'done';
}

//2, 3, 7
duplicateNumbers([2,7,5,2,1,2,1,7])