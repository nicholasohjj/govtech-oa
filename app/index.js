import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

const App = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(null);

  const handleOperation(operation) => {
    //do this
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setNumber1}
        value={number1}
        keyboardType="numeric"
        placeholder="Enter the first number"
      />

      <TextInput
        style={styles.input}
        onChangeText={setNumber2}
        value={number2}
        keyboardType="numeric"
        placeholder="Enter the second number"
      />

      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={() => handleOperation("add")} />
        <Button title="Subtract" onPress={() => handleOperation("subtract")} />
      </View>
      {result !== null && (
        <Text style={styles.resultText}>Result: {result}</Text>
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
