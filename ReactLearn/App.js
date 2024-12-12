import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Button, TextInput, Checkbox, Card, Title, Paragraph } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const modalizeRef = React.createRef();

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now().toString(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos.filter((todo) => !todo.completed));
    setCompletedTodos([...completedTodos, ...updatedTodos.filter((todo) => todo.completed)]);
  };

  const deleteTodo = (id) => {
    Alert.alert(
      'Подтверждение',
      'Точно удалить?',
      [
        { text: 'Нет', style: 'cancel' },
        {
          text: 'Да',
          onPress: () => {
            setTodos(todos.filter((todo) => todo.id !== id));
          },
        },
      ],
      { cancelable: true }
    );
  };

  const openCompletedModal = () => {
    modalizeRef.current?.open();
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Title style={styles.title}>Todo List</Title>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Новая задача"
          value={newTodo}
          onChangeText={setNewTodo}
        />
        <Button mode="contained" onPress={addTodo} style={styles.addButton}>
          Добавить
        </Button>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.todoItem}>
            <Card.Content>
              <View style={styles.todoContent}>
                <Checkbox.Item
                  label={item.text}
                  status={item.completed ? 'checked' : 'unchecked'}
                  onPress={() => toggleComplete(item.id)}
                  style={styles.checkbox}
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

      <Button mode="contained" onPress={openCompletedModal} style={styles.completedButton}>
        Посмотреть завершенные задачи
      </Button>

      <Modalize ref={modalizeRef} adjustToContentHeight>
        <View style={styles.modalContent}>
          <Title style={styles.modalTitle}>Завершенные задачи</Title>
          {completedTodos.length === 0 ? (
            <Paragraph>Нет завершенных задач</Paragraph>
          ) : (
            <FlatList
              data={completedTodos}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Card style={styles.completedTodoItem}>
                  <Card.Content>
                    <Paragraph>{item.text}</Paragraph>
                  </Card.Content>
                </Card>
              )}
            />
          )}
        </View>
      </Modalize>
    </GestureHandlerRootView>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
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
    backgroundColor: '#fff',
  },
  addButton: {
    alignSelf: 'center',
  },
  todoItem: {
    marginBottom: 10,
    backgroundColor: '#fff',
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
  completedButton: {
    marginTop: 20,
  },
  modalContent: {
    padding: 16,
  },
  modalTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  completedTodoItem: {
    marginBottom: 10,
    backgroundColor: '#e0f7fa',
  },
});

export default App;