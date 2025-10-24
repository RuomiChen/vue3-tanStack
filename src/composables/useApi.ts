// composables/useApi.ts
import type { UseMutationOptions, UseQueryOptions } from '@tanstack/vue-query'
import { useMutation, useQuery } from '@tanstack/vue-query'
import axios from 'axios'

// Axios 实例
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

/**
 * GET 请求封装（支持 Vue Query）
 * @param key 查询缓存 key
 * @param url 请求地址
 * @param params 查询参数
 * @param options Vue Query useQuery 配置
 */
export function useApiQuery<T = any>(
  key: string | unknown[],
  url: string,
  params?: Record<string, any>,
  options?: UseQueryOptions<T, any, T>
) {
  return useQuery<T, any>({
    queryKey: Array.isArray(key) ? key : [key],
    queryFn: async () => {
      const res = await api.get<T>(url, { params })
      return res.data
    },
    ...options,
  })
}

/**
 * POST/PUT/PATCH 请求封装
 * @param url 接口地址
 * @param method 请求方法
 * @param options Vue Query useMutation 配置
 */
export function useApiMutation<T = any>(
  url: string,
  method: 'post' | 'put' | 'patch' = 'post',
  options?: UseMutationOptions<T, any, any>
) {
  return useMutation<T, any, any>({
    mutationFn: async (payload: any) => {
      const res = await api[method]<T>(url, payload)
      return res.data
    },
    ...options,
  })
}

/**
 * 上传文件 Mutation 封装
 * @param url 接口路径
 * @param options Vue Query useMutation 配置
 */
export function useApiUpload<T = any>(
  url: string,
  options?: UseMutationOptions<T, any, FormData>
) {
  return useMutation<T, any, FormData>({
    mutationFn: async (formData: FormData) => {
      const res = await api.post<T>(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      return res.data
    },
    ...options,
  })
}

export default api
