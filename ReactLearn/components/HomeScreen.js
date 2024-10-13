import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen() {
    const [answer, setAnswer] = useState('Задай свой вопрос!');
  
    const possibleAnswers = ['Да', 'Нет', 'Возможно', 'Попробуй снова', 'Конечно!', 'Сомневаюсь'];
  
    const getAnswer = () => {
      const randomIndex = Math.floor(Math.random() * possibleAnswers.length);
      setAnswer(possibleAnswers[randomIndex]);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Шар предсказаний</Text>
  
        <View style={styles.ball}>
          <View style={styles.triangle}>
            <Text style={styles.answer}>{answer}</Text>
          </View>
        </View>
  
        <Button title="Задать вопрос" onPress={getAnswer} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      margin: 'auto',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    ball: {
      width: 200,
      height: 200,
      borderRadius: 100,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      position: 'relative',
    },
    triangle: {
      width: 0,
      height: 0,
      borderLeftWidth: 70,
      borderRightWidth: 70,
      borderBottomWidth: 110,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: '#add8e682',
      bottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    answer: {
      position: 'absolute',
      top: 50,
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
      width: 100,
    },
  });

  export default HomeScreen;