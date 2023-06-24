
const headers = { 'Content-Type': 'application/json' }

export const ax = {

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

  async update(url: string, data: any): Promise<any> {

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
    setTimeout(() => controller.abort(), 5 * 1000)
 
    try {
      const response = await fetch(url, { ...options, signal })
      return response.json()

    } catch (error) {
      console.log(error)
    }
  }
}
