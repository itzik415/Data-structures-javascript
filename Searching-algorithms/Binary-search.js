
function binarySearch(arr, n) {
    let i = 0;
    while(i < arr.length) {
        let tmp = arr[arr.length/2];
        if(tmp === n) return true;
        if(tmp > n) arr.splice(arr.length/2)
        if(tmp < n) arr.splice(0,arr.length/2)
        if(arr.length === 1 && tmp !== n) return false
    }
}

binarySearch([1,2,3,4,5,6,7,8], 3)
