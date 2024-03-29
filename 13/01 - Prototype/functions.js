// function sayMyName() {
//     console.log('My name is Doss')
// }

// function sayMyFullName(sayMyName) {
//     sayMyName()
//     console.log(`Alejandro Dias`)
//     return sayMyName
// }

// sayMyFullName(sayMyName)()

function monkey() { // function declaration | backdrop isolation
    console.log(this)
}

const gorilla = function() { // function expression | backdrop isolation
    console.log(this)
}

const dancingDog = () => { // arrow function | no backdrop isolation
    console.log(this)
}

const animals = {
    animalsName: 'Macaco, gorrila e cachorro dançante',
    monkey,
    gorilla,
    dancingDog,
}

animals.monkey()
animals.gorilla()
animals.dancingDog()