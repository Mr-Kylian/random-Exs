// function Person(name, age) { // sempre que o nome da função estiver com a inicial máiscula a nomeclatura dela é de construtora
//     this.name = name
//     this.age = age
// }

// Person.prototype.speak = function () {
//     console.log(`Meu nome é ${this.name}`)
// }

// const KYLIAN = new Person('Kylian', 19)

// KYLIAN.speak()

// Esse jeito é codar a moda antiga, não usar

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    speak() {
        console.log(`Meu nome é ${this.name}`)
    }
}

// os dois códigos fazem a mesma coisa, porem são jeitos diferentes de escrever