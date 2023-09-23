import axios, { AxiosResponse } from 'axios';

// Define the NewsItem interface
export interface NewsItem {
  title: string;
  abstract: string;
  byline: string;
  url: string;
  uri: string;
  multimedia: {
    url: string;
    format: string;
    height: number;
    width: number;
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
  }[];
  copyright: string;
  published_date: string;
}

// Defining the base URL and API key
const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2/world.json';
const API_KEY = 'WPwM26BddVXymZHhqmokGFIc7cxItNq3';

// Defining the TopStoriesApi function
export const TopStoriesApi = async (): Promise<NewsItem[]> => {
    try {
      // Make a GET request to the API
      const response: AxiosResponse = await axios.get(BASE_URL, {
        params: {
          'api-key': API_KEY, // Correct the parameter name
        },
      });
  
      // Extract the news items from the API response
      const newsItems: NewsItem[] = response.data.results;
  
      return newsItems;
    } catch (error) {
      console.error('Error fetching top stories:', error);
      throw error;
    }
  };
  

  
  
  
