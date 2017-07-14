import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import { Drawer } from './Drawer';


export default class App extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Drawer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Expo.Constants.statusBarHeight
  },
});
