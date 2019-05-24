//How do you find the duplicate number on a given integer array?  
function duplicateNumber(array) {
    let obj = {};
    for(let i = 0; i < array.length; i++) {
        if(obj[array[i]]) {
            console.log('found duplicate number - ', array[i])
        } else {
            obj[array[i]] = 1
        }
    }
    return 'done';
}

duplicateNumber([12,1,2,3,4,5,6,7,8,9,10,10,12,13,14,16,17])