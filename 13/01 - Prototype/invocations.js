const person = {
    name: 'Matheus',
    age: 21
}

function speak(prefix) {
    console.log(prefix, this.name)
}

speak.call(person, 'Meu nome é') // dar prefereência para o call
speak.apply(person, ['Meu nome é'])