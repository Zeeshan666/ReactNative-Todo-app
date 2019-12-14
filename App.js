import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Header from './Componets/header';
import Todoitems from './Componets/Todoitems';
import AddTodo from './Componets/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);
  const pressHandler = id => {
    setTodos(preState => {
      return preState.filter(items => items.key !== id);
    });
  };
  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(preState => {
        return [
          ...preState,
          {
            text: text,
            key: Math.random().toString(),
          },
        ];
      });
    } else {
      Alert.alert('OOPs', 'todo must be over 3 char long', [
        {
          text: 'okay',
          onPress: () => console.log('closed'),
        },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <Todoitems item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
