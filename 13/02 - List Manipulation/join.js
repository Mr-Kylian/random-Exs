const peopleList = [{ name: 'Johan' }, { name: 'Nicolau' }, { name: 'Jhuliana' }, { name: 'Kyliana' }]

const peopleListInHtml = peopleList
    .filter((e) => e.name.startsWith('J'))
    .map(e => `<li>${e.name}</li>`)
    .join('')

console.log(peopleListInHtml)