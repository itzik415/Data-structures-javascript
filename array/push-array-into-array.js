//Push an array inside another array without 
//changing arr1 and arr 2 values at the end of the process
function frankenSplice(arr1, arr2, n) {
	let newArray = [...arr2];
  	newArray.splice(n, 0, ...arr1);
    return newArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);