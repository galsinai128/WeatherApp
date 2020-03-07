import axios from 'axios'
const API_KEY = '2e8a4266b305d131768dc888e6d27218'

export default function getWeather(lat,lng){
  return axios.get(`https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`)
}