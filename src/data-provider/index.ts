import axios from 'axios';

export const APP_ID = 123;
const BASE_URL = 'https://rest.bandsintown.com/artists/';

export const instance = axios.create({
  baseURL: BASE_URL,
});
