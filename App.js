import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import thunk from 'redux-thunk';
import {Provider} from 'react-redux' 
import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './src/reducers'

import Header from "./src/components/header";
import NewsList from "./src/containers/NewsList";

const store = createStore(rootReducer,compose(applyMiddleware(thunk)));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <View style={{flex:1}}>
        <Header />
        <NewsList />
      </View>
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
