function sum(x) {
    return function (y) { // closure function
        return x + y;
    }
}

const parcialSum = sum(10)

console.log(parcialSum(20))
console.log(parcialSum(30))
console.log(parcialSum(40))