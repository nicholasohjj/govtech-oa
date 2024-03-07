import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { addOperation, subtractOperation } from "../services/arithmetic";
const App = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleOperation = async (operation) => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    try {
      setError("");
      let operationResult;
      if (operation === "add") {
        operationResult = await addOperation(num1, num2);
      } else if (operation === "subtract") {
        operationResult = await subtractOperation(num1, num2);
      }
      setResult(operationResult)
    } catch (error) {
      setError(error.message);
      setResult(null)
      alert(error);
    }
    //do this
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setNumber1}
        value={number1}
        keyboardType="numeric"
        placeholder="Enter the first number"
        accessibilityLabel="First Number Input"
      />
      <TextInput
        style={styles.input}
        onChangeText={setNumber2}
        value={number2}
        keyboardType="numeric"
        placeholder="Enter the second number"
        accessibilityLabel="Second Number Input"
      />
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={() => handleOperation("add")} />
        <Button title="Subtract" onPress={() => handleOperation("subtract")} />
      </View>
      {result !== null && (
        <Text style={styles.resultText}>Result: {result}</Text>
      )}
      {error !== '' && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  resultText: {
    marginTop: 20,
  },
});
