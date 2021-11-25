const prisma = require("../../utils/dbClient")

const user = prisma.user

function logIn(req, res) {
    console.log("log in working")
    const userLogInDetails = {
        ...req.body,
    }

    try {
        const user = User.findUnique({
            where: {
                email: userLogInDetails.email,
            },
        })

        if (userLogInDetails.password === user.password) {
            res.status(201).json({ user })
        } else {
            res.status(401).json({ error })
        }
    } catch (error) { res.status(500).json({ error }) }
}

module.exports = { logIn }