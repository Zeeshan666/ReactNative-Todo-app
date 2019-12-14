import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState('zeeshan');
  const [person, setPerson] = useState({
    name: 'ali',
    age: 45,
  });

  return (
    <View style={styles.container}>
      <Text>Name : {person.name}</Text>
      <TextInput
        multiline
        style={styles.InputContainer}
        placeholder="name"
        onChangeText={val => setPerson({name: val})}
      />
      <Text>Age:{person.age}</Text>
      <TextInput
        keyboardType="name-phone-pad"
        style={styles.InputContainer}
        placeholder="Age"
        onChangeText={val => setPerson({age: val})}
      />
      <Text>
        hello i'm {person.name} and my age is {person.age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingTop: 20,
  },
  InputContainer: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
