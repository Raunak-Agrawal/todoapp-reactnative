import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AddTodo from './AddTodo'
import ListTodos from './ListTodos'


const AppNavigator = createStackNavigator({
  ListTodos: {
    screen: ListTodos,
  },
   AddTodo : {
    screen: AddTodo,
  },
  
});

export default createAppContainer(AppNavigator);