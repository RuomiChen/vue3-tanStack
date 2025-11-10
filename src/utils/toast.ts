// src/utils/toast.ts
import { message } from 'ant-design-vue'

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'loading'

interface ToastOptions {
  duration?: number // 秒，默认 3
  onClose?: () => void
}

export const toast = {
  success(content: string, options?: ToastOptions) {
    message.success(content, options?.duration ?? 3, options?.onClose)
  },
  error(content: string, options?: ToastOptions) {
    message.error(content, options?.duration ?? 3, options?.onClose)
  },
  info(content: string, options?: ToastOptions) {
    message.info(content, options?.duration ?? 3, options?.onClose)
  },
  warning(content: string, options?: ToastOptions) {
    message.warning(content, options?.duration ?? 3, options?.onClose)
  },
  loading(content: string, options?: ToastOptions) {
    message.loading(content, options?.duration ?? 3, options?.onClose)
  },
}
