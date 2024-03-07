const test = async (req, res) => {
    console.log(req.body)
    res.json("Hi")
}

const addOperation = async (req, res) => {
    res.json()
}

module.exports = {
    test,
    addOperation
}