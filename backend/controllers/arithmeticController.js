const { arithmeticSchema } = require("../schemas/arithmetic");

const test = async (req, res) => {
  console.log(req.body);
  res.json("Hi");
};

const addOperation = async (req, res) => {
  const { value, error } = arithmeticSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: "Invalid/Missing operand" });
  }
  res.json(value.number1 + value.number2);
};

const subtractOperation = async (req, res) => {
    const { value, error } = arithmeticSchema.validate(req.body);
  
    if (error) {
      return res.status(400).json({ error: "Invalid/Missing operand" });
    }
    res.json(value.number1 - value.number2);
  };
  

module.exports = {
  test,
  addOperation,
  subtractOperation
};
