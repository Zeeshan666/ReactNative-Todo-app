import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  const [name, setName] = useState('zeeshan');
  const [person, setPerson] = useState({
    name: 'ali',
    age: 45,
  });
  const changeHandler = () => {
    setName('zaid'), setPerson({name: 'mussab', age: 30});
  };
  return (
    <View style={styles.container}>
      <Text>hy wtsapp {name}</Text>
      <Text>
        hello i'm {person.name} and my age is {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="change state" onPress={changeHandler} />
      </View>
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
});
