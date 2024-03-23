// The prompt for entering the name
let name = prompt(`Hey! Enter your name so as to begin calculating your salary!`)

// The prompt for entering the gross pay
let grosspay = prompt(`Hello ${name}! Enter your monthly gross Pay to calculate your net salary.`)

// Defining PAYE and NHIF beforehand.
let paye = 0
let nhif = 0

// Incase the user has cancelled the prompt or not entered anything.
if (grosspay === null || grosspay === "" || name === null || name === "") {
    alert(`The user has cancelled the program or not entered a value, refresh to restart.`)
}

// Incase the user has entered a value that is not a number in Grosspay.
else if (isNaN(grosspay)) {
    alert(`The grosspay entered must be a number.`)
}

// Incase the user has entered a value that is a number in Name.
else if (!isNaN(name)) {
    alert('The name entered should not have numbers.')
}

// Incase the user has entered a value that is negative for Grosspay
else if (grosspay < 0) {
    alert(`The grosspay cannot be negative.`)
}

// The PAYE calculations for each value of Gross Pay
else if (grosspay <= 24000) {
     paye = grosspay * 0.1
}
else if (grosspay >= 24001 && grosspay <= 32333) {
     paye = grosspay * 0.25
}
else if (grosspay >= 32334 && grosspay <= 500000) {
     paye = grosspay * 0.3
}
else if (grosspay >= 500001 && grosspay <= 800000) {
     paye = grosspay * 0.325
}
else  (grosspay > 800000) ;{
     paye = grosspay * 0.35
}

// The NHIF calculations for each value of Gross Pay

if (grosspay <=5999){
     nhif = 150
}
else if (grosspay >= 6000 && grosspay <= 7999) {
     nhif = 300
}
else if (grosspay >= 8000 && grosspay <= 11999) {
     nhif = 400
}
else if (grosspay >= 12000 && grosspay <= 14999) {
     nhif = 500
}
else if (grosspay >= 15000 && grosspay <= 19999) {
     nhif = 600
}
else if (grosspay >= 20000 && grosspay <= 24999) {
     nhif = 750
}
else if (grosspay >= 25000 && grosspay <= 29999) {
     nhif = 850
}

else if(grosspay >=30000 && grosspay <= 34999){
     nhif = 900
} 
else if (grosspay >= 35000 && grosspay <= 39999) {
     nhif = 950
}
else if (grosspay >40000) {
      nhif = 1000
}
// Final Calculation for Net Salary
let netsal = grosspay - (nhif+ paye)

// Final Output.
alert(`Hello ${name}! Your net salary is ${netsal}.`)
