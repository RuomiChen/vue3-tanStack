import type { UseQueryOptions } from '@tanstack/vue-query'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  timeout: 10000,
})

// 请求拦截器
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// 响应拦截器
api.interceptors.response.use(
  res => res,
  err => {
    console.error('API Error:', err)
    return Promise.reject(err)
  }
)

export function useApiQuery<T = any>(
  key: string | unknown[],
  url: string,
  options?: UseQueryOptions<T, any, T>
) {
  return useQuery<T, any>({
    queryKey: Array.isArray(key) ? key : [key],
    queryFn: async () => {
      const res = await api.get<T>(url)
      return res.data
    },
    ...options,
  })
}

export default api
