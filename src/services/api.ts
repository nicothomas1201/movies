import axios from 'axios'
import { config } from '@/config'

export const api = axios.create({
  params: {},
  baseURL: config.apiUrl,
  headers: {
    Authorization: `Bearer ${config.apiToken}`,
    Accept: 'application/json',
  },
})
