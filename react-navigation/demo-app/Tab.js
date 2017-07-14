import React from 'react';
import { StyleSheet, FlatList, Text, TextInput, Button, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

let books = [
  { key: '1', title: 'Learning React Native: Building Native Mobile Apps with JavaScript', 
    detail: 'Get a practical introduction to React Native, the JavaScript framework for writing and deploying fully featured mobile apps that look and feel native. With this hands-on guide, you\'ll learn how to build applications that target iOS, Android, and other mobile platforms instead of browsers. You\’ll also discover how to access platform features such as the camera, user location, and local storage.'},
  { key: '2', title: 'React Native By Example', 
    detail: 'Hit the ground running with React, the open-source technology from Facebook for building rich web applications fast. With this practical guide, Facebook web developer Stoyan Stefanov teaches you how to build components--React\'s basic building blocks--and organize them into maintainable, large-scale apps. If you\'re familiar with basic JavaScript syntax, you\'re ready to get started.', price: 123},
  { key: '3', title: 'Mastering React Native', 
    detail: 'This book will provide you with all the React Native building blocks necessary to become an expert. We\'ll give you a brief explanation of the numerous native components and APIs that come bundled with React Native including Images, Views, ListViews, WebViews, and much more. You will learn to utilize form inputs in React Native. You\'ll get an overview of Facebook\'s Flux data architecture and then apply Redux to manage data with a remote API. You will also learn to animate different parts of your application, as well as routing using React Native\'s navigation APIs.' 
    },
  { key: '4', title: 'React Native Quickly: Start Learning Native iOS Development with JavaScript', detail: 'N/A'},
  { key: '5', title: 'Getting Started with React Native', detail: 'N/A'},
];

const BookListScreen = (props) => (
  <View style={{flex: 1, backgroundColor: '#FFFFFF', flexDirection: 'column', justifyContent: 'center'}}>
    <View style={{backgroundColor: '#FFFFFF', height: '50%', width: '100%'}}>
      <FlatList
          data={books}
          renderItem={({item}) => 
              <View key={item.key} style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{flex: 1, textAlign: 'center', height: 40}}>{item.key}</Text>
                <Text style={{flex: 4, height: 40}}>{item.title}</Text>
              </View>
          }
      />
    </View>
  </View>
)

BookListScreen.navigationOptions = ({navigation}) => ({
  title:'Book List',
  headerLeft:
    <View style={{paddingLeft:16}}>
        <Ionicons
            name="md-menu"
            size={30}
            color='green'
            onPress={() => navigation.navigate('DrawerOpen')} />
    </View>
});

class AddBookScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      detail: ''
    };
    this.addBook = this.addBook.bind(this);
  }

  addBook(){
    console.log('add book ', {
      key: books.length + 1 + '',
      title: this.state.title,
      detail: this.state.detail
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.inputGroup}>
            <Text style={[styles.label]}>title</Text>
            <TextInput
              blurOnSubmit
              onChangeText={title => this.setState({ title })}
              style={[styles.textInput]}
              value={this.state.title}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={[styles.label]}>detail</Text>
            <TextInput
              blurOnSubmit
              multiline
              onChangeText={detail => this.setState({ detail })}
              style={[styles.multiTextInput]}
              value={this.state.detail}
            />
          </View>
          <Button onPress={this.addBook} title={'Submit'} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export const Tab = TabNavigator({
  BookList: {
    screen: BookListScreen,
    navigationOptions: {
      tabBarLabel: 'Book List',
      tabBarIcon: ({ tintColor }) => <Entypo size={24} name="list" color={tintColor} />,
    }
  },
  AddBook: {
    screen: AddBookScreen,
    navigationOptions: {
      tabBarLabel: 'Add Book',
      tabBarIcon: ({ tintColor }) => <Entypo size={24} name="add-to-list" color={tintColor} />,
    },
  }
}, {
    initialRouteName: 'BookList',
    tabBarPosition: "top",
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    paddingHorizontal: 10
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
  },
  inputGroup: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    minWidth: 60,
  },
  textInput: {
    flex: 4,
    borderColor: 'rgba(14, 13, 13, .38)',
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 40,
  },
  multiTextInput: {
    flex: 4,
    borderColor: 'rgba(14, 13, 13, .38)',
    borderWidth: 1,
    paddingHorizontal: 9,
    height: 80,
  },
});