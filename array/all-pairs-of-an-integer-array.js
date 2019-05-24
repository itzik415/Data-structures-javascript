//How do you find all pairs of an integer array whose sum is equal to a given number?
function integerPairs(array, n) {
    var found = {};
    var results = [];
    for(var i of array) {
        if (found[n - i] === true) {
            results.push({ a: i, b: n - i });
        }

        found[i] = true;
    }
    console.log(results)
    return results;
}

integerPairs([1,2,3,4,5,6,7,8,9,10,12,13,14,16,17], 10);