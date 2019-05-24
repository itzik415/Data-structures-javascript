//How do you find the largest and smallest number in an unsorted integer array?
function maxAndMinValues(array) {
    let sortArray = array.sort((a,b) => a - b);
    console.log(`
        The min value is ${sortArray[0]} and 
        the max value is ${sortArray[sortArray.length-1]}
    `);  
    return 'done';
}       
        
maxAndMinValues([3,5,1,9,4,6,10,12,23,1]);