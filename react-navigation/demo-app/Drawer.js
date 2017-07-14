import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text, View, Button } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Tab } from './Tab';
import { Constants } from 'expo';

const books = [
  { key: '1', title: 'Learning React Native: Building Native Mobile Apps with JavaScript', 
    detail: 'Get a practical introduction to React Native, the JavaScript framework for writing and deploying fully featured mobile apps that look and feel native. With this hands-on guide, you\'ll learn how to build applications that target iOS, Android, and other mobile platforms instead of browsers. You\’ll also discover how to access platform features such as the camera, user location, and local storage.'},
  { key: '2', title: 'React Native By Example', 
    detail: 'Hit the ground running with React, the open-source technology from Facebook for building rich web applications fast. With this practical guide, Facebook web developer Stoyan Stefanov teaches you how to build components--React\'s basic building blocks--and organize them into maintainable, large-scale apps. If you\'re familiar with basic JavaScript syntax, you\'re ready to get started.', price: 123},
  { key: '3', title: 'Mastering React Native', 
    detail: 'This book will provide you with all the React Native building blocks necessary to become an expert. We\'ll give you a brief explanation of the numerous native components and APIs that come bundled with React Native including Images, Views, ListViews, WebViews, and much more. You will learn to utilize form inputs in React Native. You\'ll get an overview of Facebook\'s Flux data architecture and then apply Redux to manage data with a remote API. You will also learn to animate different parts of your application, as well as routing using React Native\'s navigation APIs.' 
    },
];

//My Library screens
const LibraryScreen = (props) => (
  <View style={{flex: 1, backgroundColor: '#FFFFFF', paddingTop: Constants.statusBarHeight,}}>
    <View style={{backgroundColor: '#FFFFFF', marginTop: 10, height: '50%', width: '100%'}}>
      <FlatList
          data={books}
          renderItem={({item}) => <TouchableOpacity
              key={item.key}
              onPress={() => props.navigation.navigate('DetailScreen', item)}
              >
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{flex: 1, textAlign: 'center', height: 40}}>{item.key}</Text>
                <Text style={{flex: 4, height: 40}}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          }
      />
   </View>
  </View>
)

LibraryScreen.navigationOptions = ({navigation}) => ({
  title:'My Library',
  headerLeft:
    <View style={{paddingLeft:16}}>
        <Ionicons
            name="md-menu"
            size={30}
            color='green'
            onPress={() => navigation.navigate('DrawerOpen')} />
    </View>
});

//Detail book information screen
const DetailScreen = ({navigation}) => (
  <View style={[styles.container]}>
    <Text style={[styles.heading, { marginBottom: 24 }]}>{navigation.state.params.title}</Text>
    <Text style={[styles.paragraph]}>{navigation.state.params.detail}</Text>
  </View>
)

DetailScreen.navigationOptions = {
  title:'Detail'
}

// Define our stack navigation
const LibraryStack = StackNavigator({
  LibraryScreen: {
    screen: LibraryScreen
  },
  DetailScreen: {
    screen: DetailScreen,
  },
});

// Define our main drawer navigation
export const Drawer = DrawerNavigator({
  LibraryList: {
    screen: LibraryStack,
    navigationOptions: {
      drawerLabel: 'Library',
      drawerIcon: ({ tintColor }) => <Ionicons name="md-book" size={32} color={tintColor} />,
    },
  },
  BookList: {
    screen: Tab,
    navigationOptions: {
      drawerLabel: 'Book List',
      drawerIcon: ({ tintColor }) => <Ionicons name="md-list-box" size={32} color={tintColor} />,
    },
  }
}, {
    initialRouteName: 'LibraryList'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(14, 13, 13, .38)',
    marginVertical: 12,
  },
  heading: {
    fontSize: 18,
    color: 'rgba(14, 13, 13, .38)',
    paddingTop: 5
  },
  paragraph: {
    fontSize: 12,
    color: 'rgba(14, 13, 13, 1)',
    paddingHorizontal: 25
  }
});