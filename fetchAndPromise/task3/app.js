const container = document.querySelector('#data-container');
const ids = [60, 12, 55];
const URL = 'https://jsonplaceholder.typicode.com/photos';

function createBlockPhoto(srcImg, title) {
  const h3 = document.createElement('h3');
  h3.innerHTML = title;
  const img = document.createElement('img');
  img.classList.add('photo-item__image');
  img.src = srcImg;
  const li = document.createElement('li');
  li.classList.add('photo-item');
  li.append(img);
  li.append(h3);

  container.append(li);
}

function getFastestLoadedPhoto(ids) {
  const request = ids.map((id) => fetch(`${URL}/${id}`));
  Promise.all(request)
    .then((responses) => {
      const dataResult = responses.map((response) => response.json());
      return Promise.race(dataResult);
    })
    .then((obj) => {
      createBlockPhoto(obj.url, obj.title);
    });
}

getFastestLoadedPhoto(ids);
