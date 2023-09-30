import { getFilmCard } from './utils.js'
import { MAIN, LIKED } from './constants.js';


export function getHeader(isLiked) {
  
  const mainActiveClass = !isLiked ? ' active' : ''
  const likeFilmsClass = isLiked ? ' active' : ''

  return `
    <header class="header">
      <h1 class="header__title">See All Films</h1>
      <nav class="nav">
        <a class="nav-link ${mainActiveClass}" href="${MAIN}">See All Films</a>
        <a class="nav-link ${likeFilmsClass}" href="${LIKED}">See Favorite Films</a>
      </nav>
    </header>  
  `;
}

export function getMainLayout(films = [], isLiked = false) {
  return `
  <main class="main">
    ${getHeader(isLiked)}
    <div class="film-cards-container">
      ${films.map((film) => {
        return getFilmCard(film)
      }).join('') || '<div class="empty-message">Фильмов нет</div>'}
    </div>
  </main>  
  `;
}

export function getFilmDetailLayout(film, filmId){
  if(film){
    return `
      <div class="film-detail">
        ${getFilmCard(film)}
        <div class="home-link-wrp">
          <a href="${MAIN}">Смотреть все фильмы</a>
        </div>
      </div>
    `
  }else{
    return `
    <div class="notFound">
      <p class="empty-message">
        Фильм с id: ${filmId} не найден
        <div class="home-link-wrp">
          <a href="${MAIN}">Смотреть все фильмы</a>
        </div>
        </p>
    </div>
    `
  }
}
