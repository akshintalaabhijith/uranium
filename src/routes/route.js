const express = require('express');
const loggerFile = require('../logger/logger')
const helperFile = require('../util/helper')
const formatterFile = require('../validator/formatter')
const lodash = require('lodash')


const router = express.Router();

router.get('/test-me', function (req, res) {
    loggerFile.loggerProblem()
    helperFile.currentDate()
    helperFile.currentMonth()
    helperFile.batchInformation()
    formatterFile.noSpace()
    formatterFile.lowerCase()
    formatterFile.upperCase()


    res.send('My first ever api!')
});


router.get('/hello', function (req, res) {
    
    //Problem 1
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let divMonths = lodash.chunk(months, 3)
    console.log('The resulting array i: ', divMonths)


    //problem 2
    let odds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let output = lodash.tail(odds)
    console.log('out put after using tail in lodash: ', output)

    //problem 3
    let a = [1, 2, 6, 4, 5]
    let b = [1, 5, 3, 2, 7]
    let c = [7, 3, 11]
    let d = [12, 5, 6, 17]
    let e


    res.send('This is another api')
});


module.exports = router;
// adding this comment for no reason