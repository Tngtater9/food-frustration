import { Food } from '../types/food';
import axios from 'axios';

class FoodService {
  private URI: any;
  constructor() {
    this.URI =
      'https://v0bbcd6rq0.execute-api.us-west-2.amazonaws.com/default/food';
  }

  getFood(): Promise<Food[]> {
    return axios.get(this.URI).then((res) => res.data);
  }
}

export default new FoodService();
