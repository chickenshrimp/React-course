import { makeAutoObservable } from 'mobx';
import PostService from '../services/PostService';
import AsyncStorage from '@react-native-async-storage/async-storage';

class PostStore {
  posts = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchPosts() {
    this.loading = true;
    this.error = null;
    try {
      const storedPosts = await AsyncStorage.getItem('posts');
      if (storedPosts) {
        this.posts = JSON.parse(storedPosts);
      } else {
        this.posts = await PostService.fetchPosts();
        await AsyncStorage.setItem('posts', JSON.stringify(this.posts));
      }
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  }

  async savePost(post) {
    this.posts.push(post);
    await AsyncStorage.setItem('posts', JSON.stringify(this.posts));
  }

  async deletePost(postId) {
    this.posts = this.posts.filter(post => post.id !== postId);
    await AsyncStorage.setItem('posts', JSON.stringify(this.posts));
  }
}

export default new PostStore();