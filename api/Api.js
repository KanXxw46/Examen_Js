const instanceAPI = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Client-ID y6RrimPzXBjf98IvOEo8QghlcYQZVBhpsbYPpHEq5w0',
    },
  })