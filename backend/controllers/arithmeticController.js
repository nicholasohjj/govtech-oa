const test = async (req, res) => {
    console.log(req.body)
}

const addOperation = async (req, res) => {
    res.json()
}

module.exports = {
    test,
    addOperation
}