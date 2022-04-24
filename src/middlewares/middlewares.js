
const mid1 = function (req, res, next) {
    let header = req.headers["isfreeappuser"];

    if (!header) {
       return res.send({status : false, msg : "Missing a mandatory header"})

    }
    next()
}

module.exports.mid1 = mid1