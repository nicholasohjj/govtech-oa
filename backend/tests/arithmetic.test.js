const { test, after } = require("node:test");
const assert = require("node:assert");
const app = require("../app");
const supertest = require("supertest");

const api = supertest(app);

test("add operation for valid operands returns result", async () => {
  const res = await api
    .post("/arithmetic/add")
    .send({
      number1: 1,
      number2: 2,
    })
    .expect(200)
    .expect("Content-Type", /application\/json/);

  assert.strictEqual(res.body, 3);
});

test("add operation for invalid operands returns 400 error", async () => {
  const res = await api
    .post("/arithmetic/add")
    .send({
      number1: "",
      number2: 2,
    })
    .expect(400)
    .expect("Content-Type", /application\/json/);
});

test("subtract operation for valid operands returns result", async () => {
  const res = await api
    .post("/arithmetic/subtract")
    .send({
      number1: 3,
      number2: 2,
    })
    .expect(200)
    .expect("Content-Type", /application\/json/);

  assert.strictEqual(res.body, 1);
});

test("subtract operation for invalid operands returns 400 error", async () => {
  const res = await api
    .post("/arithmetic/subtract")
    .send({
      number1: "",
      number2: 2,
    })
    .expect(400)
    .expect("Content-Type", /application\/json/);
});
