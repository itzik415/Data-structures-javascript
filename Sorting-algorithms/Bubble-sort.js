//Implementation of Bubble-sort algorithm

//Solution number 1
const bubbleSort = arr => {
    let swapped;
    do{
        swapped = false;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > arr[i+1]) {
                let tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
                swapped = true;
            }
        }
    }while(swapped);
    return arr;
}

//Solution number 2
let bubbleSortg = arr => {
    let bool = true;
    while(bool) {
        bool = false;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i+1]){
                tmp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = tmp;
                bool = true;
            }
        }
    }
    return arr;
}


//Increasing order
//Solution number 1
let bubbleSort = arr => {
    let bool = true;
    while(bool) {
        bool = false;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] < arr[i+1]){
                tmp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = tmp;
                bool = true;
            }
        }
    }
    return arr;
}

// console.log(bubbleSortg([4,2,1,3,7,4,8,9,5,2,3]))