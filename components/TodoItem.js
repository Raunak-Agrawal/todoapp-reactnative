import React, { Component } from 'react';
import {  Card, CardItem, Body, Text,Icon } from 'native-base';

const TodoItem=({todo,onDeleteTodo})=> 
		<Card>
            <CardItem>
              <Body style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text>
                   {todo.title}
                </Text>
                <Icon name="trash" onPress={()=>onDeleteTodo(todo)}/>
              </Body>
            </CardItem>
          </Card>

export default TodoItem;