import axios from "axios"

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

const newsApi = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY
  }
})

/**
 * Универсальная функция запроса
 * @param {string} endpoint - путь (например, '/everything' или '/top-headlines')
 * @param {Object} params - любые дополнительные параметры (q, category, page и т.д.)
 * */

export const getNews = async (endpoint, params = {}) => {
  try {
    const response = await newsApi.get(endpoint, {params})

    return response.data.articles?.map((article) => ({
      ...article,
      id: crypto.randomUUID(),
    })) || []

  } catch (error) {
    console.error(`Ошибка при запросе к ${endpoint}:`, error.response?.data?.message || error.message);
    return []
  }
}