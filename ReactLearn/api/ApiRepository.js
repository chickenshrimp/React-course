import AxiosClient from '../api/AxiosClient'

const axiosClient = new AxiosClient({});

class ApiRepository {
  async getPosts() {
    try {
      const response = await axiosClient.get({ url: '/posts' });
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  }
}

export default new ApiRepository();