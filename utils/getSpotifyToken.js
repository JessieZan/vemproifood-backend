const axios = require('axios')
const qs = require('qs')
const CLIENT_ID = '9d18c669d92746d8a91f3528757a1e0d'
const CLIENT_SECRET = '0e1928e9f9164c24b0521d2cf0516e6f'

const authToken = Buffer.from(
  CLIENT_ID + ':' + CLIENT_SECRET,
  'utf-8',
).toString('base64')

const token_url = 'https://accounts.spotify.com/api/token'
const data = qs.stringify({ grant_type: 'client_credentials' })

async function getSpotifyToken() {
  try {
    const response = await axios.post(token_url, data, {
      headers: {
        Authorization: `Basic ${authToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    const { access_token, token_type } = response.data

    return `${token_type} ${access_token}`
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = {
  getSpotifyToken,
}
