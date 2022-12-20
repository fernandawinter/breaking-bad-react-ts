import axios from 'axios';

const baseUrl = 'https://api.breakingbadquotes.xyz';

export async function fetchRandomQuote() {
  const endpoint = '/v1/quotes'
  const url = baseUrl + endpoint;
  const response: any = await axios.get(url);
  return response.data[0]
}