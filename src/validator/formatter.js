const string = ' functionUp  '

const trim = function () {
    console.log('This is using trim: ',string.trim())
}

const changetoLowerCase = function () {
    console.log('This is using toLowerCase: ',string.toLowerCase());
}

const changeToUpperCase = function () {
    console.log('This is using toUpperCase: ',string.toUpperCase());
}


module.exports.noSpace = trim;
module.exports.lowerCase = changetoLowerCase;
module.exports.upperCase = changeToUpperCase;
