function findSum() {
    var i, sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
} 
console.log("Sum: " + findSum(1,2,3));
console.log("Sum: " + findSum(1,2,3,4,5,6,7,8,9,10));