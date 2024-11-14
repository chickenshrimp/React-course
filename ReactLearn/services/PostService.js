import ApiRepository from '../api/ApiRepository';

class PostService {
  async fetchPosts() {
    return await ApiRepository.getPosts();
  }
}

export default new PostService();