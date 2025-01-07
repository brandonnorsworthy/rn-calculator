import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';

export default function Index() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleOperation = (operation: "+" | "-" | "*" | "/") => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let calcResult;
    switch (operation) {
      case '+':
        calcResult = num1 + num2;
        break;
      case '-':
        calcResult = num1 - num2;
        break;
      case '*':
        calcResult = num1 * num2;
        break;
      case '/':
        calcResult = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        calcResult = '';
    }

    setResult(calcResult.toString());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>React Native Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        keyboardType="numeric"
        value={number1}
        onChangeText={setNumber1}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        keyboardType="numeric"
        value={number2}
        onChangeText={setNumber2}
      />

      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => handleOperation('+')} />
        <Button title="-" onPress={() => handleOperation('-')} />
        <Button title="*" onPress={() => handleOperation('*')} />
        <Button title="/" onPress={() => handleOperation('/')} />
      </View>

      <Text style={styles.resultText}>Result: {result}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 20,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
