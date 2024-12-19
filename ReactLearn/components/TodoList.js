import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, TextInput, Checkbox, Card, Title } from 'react-native-paper';

const TodoList = ({ todos, newTodo, setNewTodo, addTodo, toggleComplete, deleteTodo, theme }) => {
  const themeStyles = {
    light: {
      container: { backgroundColor: '#f5f5f5' },
      title: { color: '#000' },
      input: { backgroundColor: '#fff', color: '#000' },
      todoItem: { backgroundColor: '#fff' },
      text: { color: '#000' },
    },
    dark: {
      container: { backgroundColor: '#121212' },
      title: { color: '#fff' },
      input: { backgroundColor: '#333', color: '#fff' },
      todoItem: { backgroundColor: '#333' },
      text: { color: '#fff' },
    },
    custom: {
      container: { backgroundColor: '#ffcccc' },
      title: { color: '#000' },
      input: { backgroundColor: '#ffeeee', color: '#000' },
      todoItem: { backgroundColor: '#ffdddd' },
      text: { color: '#000' },
    },
  };

  return (
    <View style={[styles.container, themeStyles[theme].container]}>
      <Title style={[styles.title, themeStyles[theme].title]}>Todo List</Title>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, themeStyles[theme].input]}
          placeholder="Новая задача"
          value={newTodo}
          onChangeText={setNewTodo}
          theme={{
            colors: {
              placeholder: theme === 'dark' ? '#ccc' : '#888',
            },
          }}
        />
        <Button mode="contained" onPress={() => addTodo(newTodo)} style={styles.addButton}>
          Добавить
        </Button>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={[styles.todoItem, themeStyles[theme].todoItem]}>
            <Card.Content>
              <View style={styles.todoContent}>
                <Checkbox.Item
                  label={item.text}
                  status={item.completed ? 'checked' : 'unchecked'}
                  onPress={() => toggleComplete(item.id)}
                  style={styles.checkbox}
                  labelStyle={themeStyles[theme].text}
                />
                <Button
                  mode="outlined"
                  onPress={() => deleteTodo(item.id)}
                  style={styles.deleteButton}
                >
                  Удалить
                </Button>
              </View>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  addButton: {
    alignSelf: 'center',
  },
  todoItem: {
    marginBottom: 10,
  },
  todoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkbox: {
    flex: 1,
  },
  deleteButton: {
    marginLeft: 10,
  },
});

export default TodoList;