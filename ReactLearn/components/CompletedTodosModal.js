import React, { useRef } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const CompletedTodosModal = ({ completedTodos, theme }) => {
  const modalizeRef = useRef(null);

  const openModal = () => {
    modalizeRef.current?.open();
  };

  const themeStyles = {
    light: {
      modalContent: { backgroundColor: '#f5f5f5' },
      title: { color: '#000' },
      text: { color: '#000' },
      button: {
    
        color: '#fff',
      },
    },
    dark: {
      modalContent: { backgroundColor: '#121212' },
      title: { color: '#fff' },
      text: { color: '#fff' },
      button: {
        backgroundColor: '#bb86fc',
        color: '#000',
      },
    },
    custom: {
      modalContent: { backgroundColor: '#ffcccc' },
      title: { color: '#000' },
      text: { color: '#000' },
      button: {
        backgroundColor: '#ff0000',
        color: '#fff',
      },
    },
  };

  return (
    <>
      <View style={[styles.modalContent, themeStyles[theme].modalContent]}>
        <Button
          mode="contained"
          onPress={openModal}
          style={[styles.completedButton, { backgroundColor: themeStyles[theme].button.backgroundColor }]}
          textColor={themeStyles[theme].button.color}
        >
          Посмотреть завершенные задачи
        </Button>
      </View>
      

      <Modalize ref={modalizeRef} adjustToContentHeight>
        <View style={[styles.modalContent, themeStyles[theme].modalContent]}>
          <Title style={[styles.modalTitle, themeStyles[theme].title]}>Завершенные задачи</Title>
          {completedTodos.length === 0 ? (
            <Paragraph style={themeStyles[theme].text}>Нет завершенных задач</Paragraph>
          ) : (
            <FlatList
              data={completedTodos}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Card style={styles.completedTodoItem}>
                  <Card.Content>
                    <Paragraph style={themeStyles[theme].text}>{item.text}</Paragraph>
                  </Card.Content>
                </Card>
              )}
            />
          )}
        </View>
      </Modalize>
    </>
  );
};

const styles = StyleSheet.create({
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
  },
});

export default CompletedTodosModal;