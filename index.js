

// const testCase = 'menu5'

// switch (testCase) {
//     case 'menu1': {
//         console.log('test1')
//         break;
//     }
//     case 'menu2': {
//         console.log('test2')
//         break;
//     }
//     case 'menu3': {
//         console.log('test3')
//         break;
//     }
//     case 'menu4': {
//         console.log('test')
//         break;
//     }
//     default: {
//         console.log('nu avem asa meniu')
//     }
// }

// const user = {
//     name: 'Iulian',
//     job: 'developer',
//     city: 'Chisinau',
// }

// user.name = 'Alex'
// user['hobby'] = 'swiming'

// const condition = 'menu5'

// const user = {
//     menu1: () => console.log('meniu1'),
//     menu2: () => console.log('meniu2'),
//     menu3: () => console.log('meniu3'),
//     menu4: () => console.log('meniu4'),
// }

// console.log("User name's: ", user.name)



// const str = 'Hey, I am Iulian and I like swiming like';

// console.log(str.length)
// console.log(str.charAt(str.length - 3))
// console.log(str[3])
// console.log(str.substring(5, str.indexOf('and') - 1))                    
// console.log(str.slice(str.indexOf('I like ')))                           
// console.log(str.indexOf('Iulian'))                
// console.log(str.lastIndexOf('swiming'))  
// console.log(str.replace('hi', ' changed'))
// console.log(str.split(''))
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

const countBE = 56;

// less then an hour
// 2hour 4minutes
// 1day 5hour
// 2weeks 6day 

const hour = 60;
const day = 1440;
const week = 10080;

if (countBE / week >= 1) {
    const remainingWeeks = countBE / week
    const remainingDaysInMinutes = countBE % week
    console.log(`${Math.floor(remainingWeeks)}week ${Math.floor(remainingDaysInMinutes / day)}d`)

} else if (countBE / day >= 1) {
    const remainingDays = countBE / day
    const remainingHourInMinutes = countBE % day
    console.log(`${Math.floor(remainingDays)}d ${Math.floor(remainingHourInMinutes / hour)}h`)

} else if (countBE / hour >= 1) {
    const remainingHour = countBE / hour
    console.log(`${Math.floor(remainingHour)}h ${Math.floor(countBE % hour)}m`)

} else {
    console.log('less than an hour')
}


