import { formatFilmsResponse } from "./utils.js";

const BASE_URL = "https://www.omdbapi.com/?s=marvel&apikey=9b67fc54"

export async function getFilms(){
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json()
    return formatFilmsResponse(data.Search)
  } catch (error) {
    console.log('Error while get films from server...', error)
  }
}