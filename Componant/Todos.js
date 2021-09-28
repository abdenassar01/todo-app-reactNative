import React  from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native'
import Todo from './Todo'

const Todos = ({todos, onDelete}) => {

  const renderItem = ({ item }) => (
      <Todo item={item} onDelete={onDelete}/>
    );

  return (
    <FlatList
        style={styles.flatlist}
        data={todos}
        renderItem={renderItem}
        keyExtractor={todo => todo.id}
      />
  );
}

export default Todos;

const styles = StyleSheet.create({
});
