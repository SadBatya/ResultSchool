import { LIKED, FILM } from "./constants.js";

export function getFilmCard({ id, year, poster, title, checked}){
  const likeUrl = checked ? './images/like.png' : './images/unlike.png'
  return `
  <div class="film-card">
    <img
      class="film-card__poster"
      src="${poster}"
    />
    <a class="film-card__title" href="${FILM}/${id}"> ${title}</a>
    <span class="film-card__year">${year}</span>
    <button class="film-card__button" data-like-id="${id}">
      <img src="${likeUrl}" class="film-card__button-img" />
    </button>
  </div>
  `;
}


export function formatFilmsResponse(films = []){
  return films.map((film) => ({
    id: film.imdbID,
    poster: film.Poster,
    year:film.Year,
    title:film.Title,
    checked: false,
  }))
}

export function sortFilms(films = []){
  return [...films].sort((filmA, filmB) => {
    return filmB.checked - filmA.checked
  })
}

export function filterFilmsByLike(films = []){
  return films.filter((film) => film.checked)
}

export function checkIsLiked(){
  return window.location.hash === LIKED;
}

export function checkFilmDetail(){
  return window.location.hash.includes(FILM)
}