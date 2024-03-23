// Prompt for the user to enter the speed
let speed = prompt(`Kindly enter your the speed of the car.`)

// Function pre-defined for calculating the demerit points of a car for each 5km/h exceeded
function demeritpointcalc() {
    overspeed = speed - 70
    // Math.ceil is used so that within every bracket of 5km/h a demerit point is added without decimal points or an initial zero.
    demeritpoint = Math.ceil(overspeed/5)
    return demeritpoint
}
// Incase the user has not entered a value or cancelled the prompt
if (speed === null || speed === "" ) {
    alert(`The user has cancelled the program or not entered a value, refresh to restart.`)
// Incase the user has not entered a number for speed.
} else if (isNaN(speed)){
    alert(`The speed entered must be a number.`)
}
// Incase the user has entered a  negative number for speed.
else if (speed < 0){
    alert(`The speed cannot be negative.`)
}
// If speed is below 70
else if (speed < 70){
    alert(`Ok.`)
}

// Speed above 70
else if (speed > 70){
    demeritpoint = demeritpointcalc()
    // Alert if speed has surpassed 12 demerit points.
    if (demeritpoint > 12) {
        alert(`Your demerit points are ${demeritpoint} and have surpassed 12 demerit points. Your license is therefore suspended.`)
    // Alert if speed is below or equal to 12 demerit points.
    } else {
        alert(`Your speed is above the limit. Your demerit points are ${demeritpoint}.`)
}
    }
    