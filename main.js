// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
// console.log(users[0])

// Append the katas to this element:
const main = document.querySelector('main')


function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("Kata " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

// const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
let greenEyes1 = users.filter(function (user) {
    return user.eyeColor === "green"
})
printKata(0, greenEyes1) 

let userIsActive = users.filter(function (user) {
    return user.isActive === true
})
printKata(1, userIsActive) 
// console.log(userIsActive)

let userEmail = users
.map(user => user.email)

printKata(2, userEmail) 
// console.log(userEmail)

let userCompany = users.some(users => users.company === "OVATION")
    userCompany === "OVATION"

printKata(3, userCompany) 
// console.log(userCompany)

let firstUserOver38 = users.filter(user => user.age === 38)

printKata(4, firstUserOver38) 
// console.log(firstUserOver38)

let firstUserActive38 = users
.filter(user => user.age > 38)
.find(user => user.isActive === true)

printKata(5, firstUserActive38) 
// console.log(firstUserActive38)

let usersZencoBalance = users
.filter(user => user.company === "ZENCO")
.map(user => user.balance)

printKata(6, usersZencoBalance) 
// console.log(usersZencoBalance)

let usersWithFugiat = users
.filter(user => user.tags.includes("fugiat"))
.map(user => user.age)

printKata(7, usersWithFugiat) 
console.log(usersWithFugiat)

