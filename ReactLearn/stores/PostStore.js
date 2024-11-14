import { makeAutoObservable } from 'mobx';
import PostService from '../services/PostService';

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
      this.posts = await PostService.fetchPosts();
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  }
}

export default new PostStore();