//How do you find the missing number in a given integer array of 1 to n? 
function missingNumber(array, n) {
    for(let i = 0; i < n; i++) {
        if(array[i] === n) break;
        if(array[i]+1 !== array[i+1] && array.length-1 >= i) {
            console.log(`The number ${array[i]+1} is missing in the array`)
        }
        let number = 1;
        if(array.length-1 < i) {
            if(i > array[array.length-1]) {
                console.log(`The number ${i+number} is missing in the array`)
                number++;
            }
        }
    }
    return 'done';
}

missingNumber([1,2,3,4,5,6,7,8,9,10,12,13,14,16,17], 24)