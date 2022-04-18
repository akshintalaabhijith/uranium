const batchModel = require("../models/batchModel")
const developersModel = require("../models/developersModel")

const createBatch= async function (req, res) {
    let data= req.body
    let savedData= await batchModel.create(data)
    res.send({msg: savedData})
}

const createDeveloper= async function (req, res) {
    let data= req.body
    let savedData= await developersModel.create(data)
    res.send({msg: savedData})
}

const scholarsDev = async function (req, res) {
let eligibles = await developersModel.find({gender : "female",percentage : {$gte : 70}})
    res.send({msg: eligibles})
}

const developers = async function (req, res) {
    let value1 = req.query.percentage
    let value2 = req.query.program
    let id = await batchModel.findOne({program : value2}).select({_id : 1})
    let listOut = await developersModel.find({percentage : {$gte : value1}, batch : id}).select({name : 1, _id : 0})
        res.send({msg: listOut})
    }



module.exports.createBatch= createBatch
module.exports.createDeveloper= createDeveloper
module.exports.scholarsDev= scholarsDev
module.exports.developers= developers