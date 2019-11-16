import React from 'react';
import { View, Text ,ScrollView,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {listTodos,deleteTodo} from './actions'
import TodoItem from './components/TodoItem';
import {Icon} from 'native-base';


class ListTodos extends React.Component {
  static navigationOptions = {
    title: 'List Todos',
  };
  // componentDidMount(){
  //   let {listTodos}=this.props;
  //   listTodos();
  // }

  onDeleteTodo=(todoItem)=>{
  this.props.deleteTodo(todoItem.id)
  }
  render() {
    let {todos}=this.props;
    console.log(todos,"todos");

    return (
      <View style={{marginHorizontal:10,marginTop:5,marginBottom:45}}>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("AddTodo")}>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:10}}>
          <Text style={{fontWeight:"bold",fontSize:18}}>Add Todo</Text>
          <Icon name="add-circle"/>
        </View>
      </TouchableOpacity>
        <ScrollView>
          {
            todos && todos.length>0 ? todos.map(todo=> <TodoItem key={todo.id} todo={todo} onDeleteTodo={this.onDeleteTodo} />): <View><Text>Please add a todo...</Text></View>
          }
      </ScrollView>
      </View>
      )
   
  }
}




const mapStateToProps = (state) => ({
 todos:state.todos
});
const mapDispatchToProps = (dispatch) => ({
  listTodos: () => dispatch(listTodos()),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListTodos);