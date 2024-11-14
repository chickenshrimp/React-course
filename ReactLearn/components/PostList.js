import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import PostStore from '../stores/PostStore';
import { Card, Title, Paragraph } from 'react-native-paper';

const PostList = observer(() => {
  useEffect(() => {
    PostStore.fetchPosts();
  }, []);

  if (PostStore.loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  if (PostStore.error) {
    return <Text style={styles.error}>Error: {PostStore.error}</Text>;
  }

  return (
    <FlatList
      data={PostStore.posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Content>
            <Title>ID: {item.id}</Title>
            <Title>{item.title}</Title>
            <Paragraph>{item.body}</Paragraph>
          </Card.Content>
        </Card>
      )}
    />
  );
});

const styles = StyleSheet.create({
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
});

export default PostList;