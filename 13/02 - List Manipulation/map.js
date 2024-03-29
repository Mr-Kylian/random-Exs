class People {
    constructor(name) {
        this.name = name;
    }
}

const peopleList = [new People('Johan'), new People('Victoria'), new People('Marcola'), new People('Mac Lovin')]

const namesOfPeopleList = peopleList.map((element, i) => {
    return `
    <li>
        ${i} - ${element.name}
    </li>
    `
}) // map é a conversão de um objeto em outro, inclusive html

console.log(namesOfPeopleList)