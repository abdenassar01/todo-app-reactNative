import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import {useState}  from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Todos from './Componant/Todos'
import uuid from 'react-native-uuid';


export default function App() {

  const [textInput, setTextInput] = useState("")
  const [todos, setTodos] = useState([]);

  const onDelete = (id) => {
    setTodos( (prevState) => {
      return prevState.filter( todo => todo.id !== id);
    })
  }

  const addTodo = () =>{
    if(!textInput){
      alert('You should Provide The Text');
      return
    }
    setTodos( prevState => [
      ...prevState,
      {
      text: textInput,
      id: uuid.v4()
      }
    ]);
    setTextInput('');
  }

  const handleTextChange = (text) =>{
    setTextInput(text);
  }

  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
      <Text style={styles.text}>Todos App</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleTextChange}
        value={textInput}
        placeholder="Write The Content Of the Todo ? "
      />
      <Button title='Add Todo' style={styles.addBtn} onPress={addTodo}/>
      <Todos todos={todos} style={styles.todos} onDelete={onDelete}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'deepskyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 5,
    marginTop: 20,
    fontSize: 25,
    height: 40,
    textAlign: "center",
    color: "#eeeddd",
    fontWeight: "bold"
  },
  addBtn: {
    borderRadius: 50,
  },
  todos:{
    flex:1,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
  },
});
