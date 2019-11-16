import React from 'react';
import { View, Text ,StyleSheet,Button} from 'react-native';
import { Item, Input, Label } from 'native-base';
import { connect } from 'react-redux';
import {addTodo} from './actions'
class AddTodo extends React.Component {
	state={
		title:""
	}
	static navigationOptions = {
    title: 'Add Todo',
  };
  render() {
  	let {title}=this.state;
  	let {addTodo,todos}=this.props;
    return (
      <View style={{ flex: 1,marginHorizontal:20,marginTop:20 }}>
            <Item floatingLabel>
              <Label>Todo title</Label>
              <Input value={title} onChangeText={text => this.setState({title:text})}/>
            </Item>
            <View style={{marginTop:20}}>
               <Button  
               color="#000"
	          title="ADD TODO"
	          onPress={() => {
	          	if(title===""){
	          		alert("Please add a todo title");
	          		return;
	          	}
	          	else{
	          		 	addTodo({title, id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)});
	          			this.props.navigation.navigate("ListTodos")
	          	}
	         
          }}
        />
        </View>
      </View>
    );
  }
}
const styles=StyleSheet.create({
	buttonStyle:{
		justifyContent:"center",
		alignItems:"center",
		marginTop:20
	}
})


const mapStateToProps = (state) => ({
 todos:state.todos
});
const mapDispatchToProps = (dispatch) => ({
  addTodo: (title) => dispatch(addTodo(title)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodo);