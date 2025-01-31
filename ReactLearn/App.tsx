import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { addTask, getTasks, updateTask, deleteTask } from './services/TaskService'

const App = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const storedTasks = await getTasks();
    setTasks(storedTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    if (!taskTitle.trim()) return;
    await addTask(taskTitle);
    setTaskTitle('');
    fetchTasks();
  };

  const handleToggleTask = async (id, completed) => {
    await updateTask(id, !completed);
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Список задач</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Введите текст задачи"
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
        <Button title="+" onPress={handleAddTask} />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity onPress={() => handleToggleTask(item.id, item.completed)}>
              <Text style={[styles.taskText, item.completed && styles.completedTask]}>
                {item.title}
              </Text>
            </TouchableOpacity>
            <Button title="❌" onPress={() => handleDeleteTask(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  taskText: {
    fontSize: 18,
    marginRight: 5
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default App;