import React  from 'react';
import {StyleSheet, TouchableOpacity, Text, StatusBar} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Todo = (props) => {

  return (
    <TouchableOpacity style={styles.todo}>
     <Text>{props.item.text}</Text>
     <Icon
     name="remove"
     size={30}
     color="red"
     backgroundColor="transparent"
     onPress={() => props.onDelete(props.item.id)}
    />
    </TouchableOpacity>
  );
}

export default Todo;

const styles = StyleSheet.create({
  todo:{
    flex: 1,
    width: 340,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "aliceblue",
    borderRadius: 10,
    marginTop: 10
  },
  icon: {
    width:5,

  }
});
