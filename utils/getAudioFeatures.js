const axios = require('axios')

const { getSpotifyToken } = require('./getSpotifyToken')

const getAudioFeatures_Category = async (category) => {
    const access_token = await getSpotifyToken()
  
    const api_url = `https://api.spotify.com/v1/search?q=${category}&type=track&limit=10`
    //console.log(api_url);
    try {
      const response = await axios.get(api_url, {
        headers: {
          Authorization: access_token,
          'Content-Type': 'application/json',
        },
      })
  
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  module.exports = {
    getAudioFeatures_Category,
  }