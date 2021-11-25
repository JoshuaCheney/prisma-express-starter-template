const prisma = require("../../utils/dbClient")

const user = prisma.user

function signUp(req, res) {
    console.log("sign up working")
    user.create({
        data: {
            ...req.body
        }
    })
        .then((result) => {
            console.log(result)
            res.json({ data: result })
        })
        .catch(error => {
            console.error(error)
            res.status(500).json(error)
        })
}

module.exports = { signUp }