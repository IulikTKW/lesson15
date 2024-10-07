

if (1 === 1) console.log('pass')
if (1 !== 1) console.log('pass')
if (1 === 1 || 1 !== 1) console.log('pass')
if (1 === 1 && true) console.log('pass')

const test = false || false;

console.log(test)

const ternary = false ? true ? 'option1' : 'option2' : 'option3';