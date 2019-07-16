let quicksort = function(arr) {
  if(arr.length <= 1) return arr;

  let pivot = Math.floor((arr.length -1)/2);
  let val = arr[pivot], less = [], more = [];

  arr.splice(pivot, 1);
  arr.forEach(function(e,i,a){
    e < val ? less.push(e) : more.push(e);
  });

  return (quicksort(less)).concat([val],quicksort(more))
}

console.log(quicksort([2,4,3,5,1]))