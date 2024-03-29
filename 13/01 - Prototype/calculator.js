function multiplication(x, y) {
    return x * y
}

function division(x, y) {
    return x / y
}

function sum(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}
function calculator(x, operation, y) {
    console.log(operation(x, y))
}

calculator(5, multiplication, 5)