

const headers = { 'Content-Type': 'application/json' }

export default {

  async get(url: string): Promise<any> {

    const method = 'GET'
    const options = { method, headers }

    return await this.fetchData(url, options)
  },

  async post(url: string, data: any): Promise<any> {

    const method = 'POST'
    const body = JSON.stringify(data)
    const options = { method, headers, body }

    return await this.fetchData(url, options)
  },

  async put(url: string, data: any): Promise<any> {

    const method = 'PUT'
    const body = JSON.stringify(data)
    const options = { method, headers, body }
      
    return await this.fetchData(url, options)
  },

  async delete(url: string): Promise<any> {

    const method = 'DELETE'
    const options = { method, headers }

    return await this.fetchData(url, options)
  },

  async fetchData(url: string, options: object): Promise<any> {

    const controller = new AbortController()
    const { signal } = controller
    setTimeout(() => controller.abort(), 5000)
 
    try {
      const res = await fetch(url, { ...options, signal })
      return res.json()

    } catch (error) {
      console.log(error)
    }
  }
}