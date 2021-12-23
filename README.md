# To start this project run on terminal

-- npm i (inside de root of repository)
-- npm run dev

### Use 

### Used Technologies

- Express
- Axios
- Nodemon
- qs

## End-Points

#### Get music sugestions based on how is the weather on your city

### Endpoint - https://localhost:8000/tracks/:city

### GET
#### Dados Enviados

Name of the city (params)

```JSON
   No Body
```

#### Dados Recebidos 

List of sugested tracks

``` JSON
[
  "Classical Piano Music for Baby Sleep",
  "Sonata No. 14 Moonlight in C-Sharp Minor Op. 27 No. 2: I. Adagio sostenuto",
  "Classical Gas",
  "Erbarm dich mein o Herre Gott, BWV 721",
  "Classical",
  "Classical Baby",
  "Toccata and Fugue in D Minor, BWV 538",
  "Classical",
  "Classical Piano for Sleeping Music",
  "Toccata and Fugue in D Minor BWV 565"
]
```
---

# #VemProiFood! - Backend Challenge

Create a micro-service able to accept RESTful requests receiving as parameter
either city name or lat long coordinates and returns a playlist (only track
names is fine) suggestion according to the current temperature.

## Business rules

* If temperature (celcius) is above 30 degrees, suggest tracks for party
* In case temperature is between 15 and 30 degrees, suggest pop music tracks
* If it's a bit chilly (between 10 and 14 degrees), suggest rock music tracks
* Otherwise, if it's freezing outside, suggests classical music tracks 

## Hints

You can make usage of OpenWeatherMaps API (https://openweathermap.org) to fetch
temperature data and Spotify (https://developer.spotify.com) to suggest the
tracks as part of the playlist.

- [Spotify API](https://developer.spotify.com/documentation/web-api/quick-start/) (You can use this Client Id: 08c1a6be652e4fdca07f1815bfd167e4)
- [OpenWeatherMaps API](https://home.openweathermap.org/users/sign_up) (You can use this API Key: b77e07f479efe92156376a8b07640ced)

### Sample cities
http://api.openweathermap.org/data/2.5/weather?q=campinas&appid=b77e07f479efe92156376a8b07640ced
http://api.openweathermap.org/data/2.5/weather?q=salvador&appid=b77e07f479efe92156376a8b07640ced
http://api.openweathermap.org/data/2.5/weather?q=brasilia&appid=b77e07f479efe92156376a8b07640ced
http://api.openweathermap.org/data/2.5/weather?q=fortaleza&appid=b77e07f479efe92156376a8b07640ced
http://api.openweathermap.org/data/2.5/weather?q=manaus&appid=b77e07f479efe92156376a8b07640ced

## Non functional requirements

As this service will be a worldwide success, it must be prepared to be fault
tolerant, responsive and resilient.

Use whatever language, tools and frameworks you feel comfortable to, and
briefly elaborate on your solution, architecture details, choice of patterns
and frameworks.

Also, make it easy to deploy/run your service(s) locally (consider using some
container/vm solution for this). Once done, share your code with us.
