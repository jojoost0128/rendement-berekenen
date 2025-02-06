

const aandelen = [{datum:"01-01", prijs: 20}, {datum:"02-01", prijs: 25}, {datum:"03-01", prijs: 10}, {datum:"04-01", prijs: 30}, {datum:"05-01", prijs: 10}]

for (let i = 1; i < aandelen.length; i++) {
    const rendement = []
    rendement.push(aandelen[i].prijs - aandelen[i - 1].prijs)
}