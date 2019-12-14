import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Todoitems = ({item, pressHandler}) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text} </Text>
    </TouchableOpacity>
  );
};

export default Todoitems;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
  },
});
