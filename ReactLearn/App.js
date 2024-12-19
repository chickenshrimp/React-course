import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TodoList from './components/TodoList';
import CompletedTodosModal from './components/CompletedTodosModal';
import ThemeSwitcher from './components/ThemeSwitcher';
import CustomComponents from './components/CustomComponents';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [theme, setTheme] = useState('light');

  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now().toString(), text, completed: false }]);
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
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <TodoList
        todos={todos}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodo={addTodo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        theme={theme}
      />

      <CompletedTodosModal completedTodos={completedTodos} theme={theme} />

      <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />

      <CustomComponents theme={theme} />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;