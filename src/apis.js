const axios = require('axios')
const url = 'https://icanhazdadjoke.com/'

// https://icanhazdadjoke.com/api for documentation
// They specify that you need to adjust the headers, you probably won't need to for your project

export const getDataFromAPI = async (query) => {
    const { data } = await axios.get(url, { 
            headers: { Accept: 'application/json' }
        }
    )
  return data;
}