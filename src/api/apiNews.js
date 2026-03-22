import axios from "axios"

const BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

const newsAPI = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY
  }
})

export const getNews = async (endpoint, params = {}) => {
  try {
    const response = await newsAPI.get(endpoint, {params})

    return response.data.articles?.map((article) => ({
      ...article,
      id: crypto.randomUUID(),
    })) || []

  } catch (error) {
    console.error(`Ошибка при запросе к ${endpoint}:`, error.response?.data?.message || error.message);
    return []
  }
}