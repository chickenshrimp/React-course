import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Modal, TextInput } from 'react-native';
import { observer } from 'mobx-react-lite';
import PostStore from '../stores/PostStore';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const PostList = observer(() => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    PostStore.fetchPosts();
  }, []);

  const handleAddPost = () => {
    setModalVisible(true);
  };

  const handleSavePost = () => {
    const newPost = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      body,
    };
    PostStore.savePost(newPost);
    setModalVisible(false);
    setTitle('');
    setBody('');
  };

  const handleDeletePost = (postId) => {
    PostStore.deletePost(postId);
  };

  if (PostStore.loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  if (PostStore.error) {
    return <Text style={styles.error}>Error: {PostStore.error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={handleAddPost} style={styles.addButton}>
        Add Post
      </Button>
      <FlatList
        data={PostStore.posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.body}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => handleDeletePost(item.id)}>Delete</Button>
            </Card.Actions>
          </Card>
        )}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Body"
            value={body}
            onChangeText={setBody}
            multiline
          />
          <Button mode="contained" onPress={handleSavePost} style={styles.saveButton}>
            Save Post
          </Button>
          <Button onPress={() => setModalVisible(false)} style={styles.cancelButton}>
            Cancel
          </Button>
        </View>
      </Modal>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    margin: 10,
    elevation: 3,
  },
  addButton: {
    margin: 10,
    marginTop: 40
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  saveButton: {
    marginTop: 10,
  },
  cancelButton: {
    marginTop: 10,
  },
});

export default PostList;