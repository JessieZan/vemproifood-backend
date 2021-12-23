const express = require('express')
const tracks = require('./controlers/postCityGetTracks')

const router = express()

router.get('/tracks/:city', tracks.postCityGetTracks)

module.exports = router
