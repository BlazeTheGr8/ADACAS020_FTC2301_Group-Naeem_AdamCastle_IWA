const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

let sarahTotal = Math.abs(parseFloat(sarahBalance).toFixed(2));
let leoTotal = Math.abs(leoBalance);

console.log(sarahTotal + leoTotal);

const owed = "R" + (Math.abs(leoBalance) + Math.abs(parseFloat(sarahBalance).toFixed(2)))
const leo = `${leoName} ${leoSurname.trim()} (Owed: R${leoTotal})`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R${sarahTotal})`
console.log(sarah);
const total = `Total amount owed: R${(sarahTotal + leoTotal).toLocaleString()}`
const result = `
${leo} 
${sarah}

${divider}
\t${total}
${divider}`

console.log(result)