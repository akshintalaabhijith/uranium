let today = new Date()
const printDate = function () {
    console.log('Current date is: ',today.getDate())
}
const printMonth = function () {
    console.log('Current month is: ', today.getMonth()+1)
}
const getBatchInfo = function () {
    console.log('Thorium, W3D1, the topic for today is Nodejs module system')
}  

module.exports.currentDate = printDate;
module.exports.currentMonth = printMonth;
module.exports.batchInformation = getBatchInfo;