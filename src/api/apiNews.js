import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY
const NEWS_CACHE_KEY = "latest_news_cache"

export const getNews = async () => {
  const cachedNewsData = localStorage.getItem(NEWS_CACHE_KEY)

  if (cachedNewsData) {
    console.log("Данные загружены из кеша (localStorage)");
    return JSON.parse(cachedNewsData);
  }

  try {
    const response = await axios.get(`${BASE_URL}/latest-news`, {
      params: {
        apiKey: API_KEY,
      },
    })

    const newsCollection = response.data.news

    localStorage.setItem(NEWS_CACHE_KEY, JSON.stringify(newsCollection));

    console.log("Данные получены с сервера и сохранены в кеш")
    return newsCollection

  } catch (error) {
    console.error('Ошибка при получении новостей:', error)
    return []
  }
}