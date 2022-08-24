import axios from 'axios';

const baseUrl = 'https://www.breakingbadapi.com';

export async function fetchRandomQuote() {
  const endpoint = '/api/quote/random'
  const url = baseUrl + endpoint;
  const response: any = await axios.get(url);
  return response.data[0]
}