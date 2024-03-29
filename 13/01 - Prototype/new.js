function Nigga(niggaName, color) {
    this.niggaName = niggaName
    this.color = color
}

Nigga.prototype.speak = function () {
    console.log('I love Mike tyson bitches')
}

// const superNigga = new Nigga('Dwayne Johnson', 'Slave ship shell color')
// superNigga.speak()

const superNigga = {
    niggaGender: 'male'
}

Nigga.call(superNigga, 'William', 'Extra Black')

console.log(superNigga)