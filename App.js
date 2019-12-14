import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

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

  return (
    <View style={styles.container}>
      <ScrollView pagingEnabled={true} horizontal={true}>
        {people.map(item => {
          return (
            <View key={item.key}>
              <Text style={styles.items}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
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
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 40,
  },
});
