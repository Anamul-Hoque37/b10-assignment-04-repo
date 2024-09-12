function calculateTax(income, expenses) {
    if ( income < 0 || expenses < 0 ||  income < expenses) {
      return "Invalid Input"
    }
    let calculatedTax = (income - expenses) * .20
    return calculatedTax
}



function sendNotification(email) {
    let check = email.split('')
    if (!check.includes('@')){
        return "Invalid Email"
    }
    let text = email.split("@")
   let notificationMessage = text[0] + ' sent you an email form ' + text[1]
    return notificationMessage
}


function checkDigitsInName(name) {
    if (typeof name !== 'string'){
        return "Invalid Input"
    }
    let num = name[0];
    for (let word of name){
        if (!isNaN(word) && word !== " ") {
            num = word;
        }
    }
    if (!isNaN(num)){
        return 'true'
    }else{
        return 'false'
    }
}


function calculateFinalScore(obj) {
    if (typeof obj !== "object"){
        return  "Invalid Input"
    }
    let total = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily){
        total = total + 20
    }
    if (total >=80){
        return "true"
    }else{
        return "false"
    }
}


function  waitingTime(waitingTimes  , serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof(serialNumber) !== 'number'){
        return "Invalid Input"
    }
    let sum = 0;
    for (const number of waitingTimes){
    sum = sum + number ;
    }
    let count = waitingTimes.length;
    let avgTime = sum / count ;
    let avg = Math.round(avgTime)
    let stillSerial = serialNumber -1
    let remainingSerial = stillSerial - count 
    let wait = avg * remainingSerial
    return wait 
}



console.log(calculateTax(10000, 3000))
console.log(sendNotification('zihad@gmail.com'))
console.log(checkDigitsInName('Raj123'))
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }))
console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10))