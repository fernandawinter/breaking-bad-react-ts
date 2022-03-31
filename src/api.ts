import axios from 'axios';

const baseUrl = 'https://www.breakingbadapi.com';

export async function fetchRandomQuote() {
  console.log('5 - entrou no getRandomQuote')
  const endpoint = '/api/quote/random'
  const url = baseUrl + endpoint;
  const response: any = await axios.get(url);
   console.log('7 - antes do return do getRandomQuote')
  return response.data[0]
}