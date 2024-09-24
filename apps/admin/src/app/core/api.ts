import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://localhost:4000/v1',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Accept': 'application/json',
  },
  withCredentials: true,
})

export class Api {
  static async get(url: string, params?: unknown) {
    try {
      const getResponse = await Axios.get(url, { params })
      return getResponse.data
    }
    catch (e) {
      console.error(e)
    }
  }

  static async post(url: string, body: unknown) {
    try {
      if (!body) throw new Error('Body is required')
      const postResponse = await Axios.post(url, body)
      return postResponse.data
    }
    catch (e) {
      console.error(e)
    }
  }

  static async delete(url: string) {
    try {
      const deleteResponse = await Axios.delete(url)
      return deleteResponse.data
    }
    catch (e) {
      console.error(e)
    }
  }

  static async put(url: string, body: unknown) {
    try {
      if (!body) throw new Error('Body is required')
      const putResponse = await Axios.put(url, body)
      return putResponse.data
    }
    catch (e) {
      console.error(e)
    }
  }
}
