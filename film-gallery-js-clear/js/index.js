import { getMainLayout, getFilmDetailLayout } from './layouts.js';
import { getFilms } from './api.js';
import {
  sortFilms,
  checkIsLiked,
  filterFilmsByLike,
  checkFilmDetail,
} from './utils.js';

let FILMS = [];
async function render() {
  const root = document.getElementById('root');
  const isLiked = checkIsLiked();
  const isDetail = checkFilmDetail();

  if (FILMS.length === 0) {
    FILMS = await getFilms();
  }

  if (isDetail) {
    const filmId = window.location.hash.split('/')[1]
    const foundFilm = FILMS.find((film) => film.id === filmId)
    root.innerHTML = getFilmDetailLayout(foundFilm, filmId)

  } else {
    const sortedFilms = sortFilms(FILMS);
    const filmsToRender = isLiked
      ? filterFilmsByLike(sortedFilms)
      : sortedFilms;
    root.innerHTML = getMainLayout(filmsToRender, isLiked);

    window.scrollTo(0, 0);
  }
}

function setInitials() {
  let oldPushState = history.pushState;

  history.pushState = function pushState() {
    let ret = oldPushState.apply(this, arguments);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
  };

  let oldReplaceState = history.replaceState;
  history.replaceState = function replaceState() {
    let ret = oldReplaceState.apply(this, arguments);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
  };

  window.addEventListener('popstate', () => {
    window.dispatchEvent(new Event('locationchange'));
  });

  window.addEventListener('locationchange', handleLocationChange);
  document.addEventListener('click', handleLike);
}

function handleLocationChange() {
  render();
}

function handleLike({ target }) {
  const buttonNode = target.closest('.film-card__button');

  if (buttonNode) {
    const likeId = buttonNode.dataset.likeId;
    if (likeId) {
      FILMS = FILMS.map((film) => ({
        ...film,
        checked: film.id === likeId ? !film.checked : film.checked,
      }));
      render();
    }
  }
}

render();
setInitials();
