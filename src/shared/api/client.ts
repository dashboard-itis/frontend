import { Api } from './api'

export const api = new Api({
  baseUrl: process.env.REACT_APP_API_URL || '',
})
