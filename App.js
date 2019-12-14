import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'shaun', id: '1'},
    {name: 'yoshi', id: '2'},
    {name: 'mario', id: '3'},
    {name: 'luigi', id: '4'},
    {name: 'peach', id: '5'},
    {name: 'toad', id: '6'},
    {name: 'bowser', id: '7'},
  ]);

  const pressHandler = id => {
    console.log(id);
    setPeople(prePeople => {
      return prePeople.filter(people => people.id !== id);
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        numColumns={2}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              pressHandler(item.id);
            }}>
            <Text style={styles.items}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  items: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
