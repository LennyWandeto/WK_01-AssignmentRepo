// Prompt to enter the marks for a student
let mark = prompt(`Hello Student! Kindly enter your marks to know your grade!`)

// Incase user has not entered any value.
if (mark === null || mark === "" ) {
    alert(`The user has cancelled the program or not entered a value, refresh to restart.`)
}

// Incase user has not entered a number.
 else if (isNaN(mark)) {
    alert(`The grade entered must be a number.`)

// If user has entered a value that is not betweeen 0 and 100
} else if (mark >100 || mark < 0 ){
    alert('The grade must be between 0 and 100.')
}

// This is the if block for the A grade.
else if (mark > 79) {
    alert(`Your grade with ${mark} marks is A.`)
}
// The if block for the B grade.
else if(mark >= 60 && mark <= 79){
    alert(`Your grade with ${mark} marks is B.`)
}
// The if block for the C grade.
else if(mark >= 49 && mark <= 59){
    alert(`Your grade with ${mark} marks is C.`)
}
// The if block for the D grade.
else if(mark >= 40 && mark <= 49){
    alert(`Your grade with ${mark} marks is D.`)
}
// The if block for the E grade.
else if (mark >= 0 && mark <=39){
    alert(`Your grade with ${mark} marks is E.`)
}



