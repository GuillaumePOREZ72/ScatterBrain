/**
 * Node modules
 */
import axios from 'axios';

export const scatterbrainApi = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
})