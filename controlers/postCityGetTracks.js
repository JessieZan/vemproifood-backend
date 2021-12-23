const axios = require('axios')
const { getAudioFeatures_Category } = require('../utils/getAudioFeatures')

const apiKey = 'b77e07f479efe92156376a8b07640ced'


const postCityGetTracks = async (req, res) => {
  const { city } = req.params

  try {
    const data = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    )
    const temp = data.data.main.temp

    let category = ''

    if (temp >= 30) {
      category = 'party'
    } else if (temp >= 15 && temp <= 30) {
      category = 'pop'
    } else if (temp >= 10 && temp < 15) {
      category = 'rock'
    } else {
      category = 'classical'
    }

    const response = await getAudioFeatures_Category(category)

    const lista = response.tracks.items.map((item) => item.name)


    return res.json(lista)
  } catch (error) {
    return res.status(400).json({
      erro: 'Please, enter a valid city name.',
    })
  }
}

module.exports = {
  postCityGetTracks,
}
