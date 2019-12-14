import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> TodoApp </Text>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {height: 80, paddingTop: 38, backgroundColor: 'coral'},
  title: {textAlign: 'center', color: '#fff', fontSize: 20, fontWeight: 'bold'},
});
