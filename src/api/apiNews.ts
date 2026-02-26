import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const getNews = async (page = 1, pageSize = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}everything`, {
      params: {
        apiKey: API_KEY,
        q: 'news',
        language: 'en',
        page,
        pageSize,
      },
    })

    return response.data.articles.map(article => ({
      ...article,
      id: crypto.randomUUID()
    }))
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Ошибка API:', error.response?.data?.message || error.message);
    } else {
      console.error('Непредвиденная ошибка:', error);
    }
    return []
  }
}