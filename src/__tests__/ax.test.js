import ax from '../../lib'

describe('ax.get', () => {
  beforeEach(() => {
    // Mock the fetch function
    global.fetch = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should make a GET request with the correct URL and headers', async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    const expectedOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }

    // Call the method
    await ax.get(url)

    // Verify fetch function is called with the correct arguments
    expect(global.fetch).toHaveBeenCalledWith(url, expect.objectContaining(expectedOptions))
  })

  it('should return the parsed JSON response', async () => {
    const mockResponse = { data: 'example' }
    const mockJsonPromise = Promise.resolve(mockResponse)
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    })

    // Mock the fetch function to return a response
    global.fetch.mockImplementationOnce(() => mockFetchPromise)

    // Call the method
    const result = await ax.get('https://example.com/api')

    // Verify the result is the parsed JSON response
    expect(result).toEqual(mockResponse)
  })

  it('should handle errors and log them', async () => {
    const mockError = new Error('Test error')
    const mockFetchPromise = Promise.reject(mockError)

    // Mock the fetch function to throw an error
    global.fetch.mockImplementationOnce(() => mockFetchPromise)

    // Spy on the console.log function
    const consoleSpy = jest.spyOn(console, 'log')

    // Call the method
    await ax.get('https://example.com/api')

    // Verify the error is logged
    expect(consoleSpy).toHaveBeenCalledWith(mockError)
  })
})
