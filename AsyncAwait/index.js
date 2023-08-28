function getRandomArrayElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

async function getCat() {
  // Получаем список тегов
  const tagsResponse = await fetch("https://cataas.com/api/tags");
  const tags = await tagsResponse.json();

  // Выбираем случайный тег
  const randomTag = getRandomArrayElement(tags);

  // Получаем котиков по тегу
  const catsResponse = await fetch(
    `https://cataas.com/api/cats?tags=${randomTag}`
  );
  const cats = await catsResponse.json();

  // Выбираем случайного котика
  const randomCat = getRandomArrayElement(cats);

  // Формируем результат
  return {
    tag: randomTag,
    url: `https://cataas.com/cat/${randomCat.id}`
  };
}

getCat()
  .then((result) => {
    // Выводим заголовок
    const header = document.getElementById("header");
    header.textContent = result.tag;

    // Выводим картинку
    const image = document.getElementById("image");
    image.src = result.url;
  })
  .catch(console.error)
  .finally(() => {
    // Скрываем статус загрузки
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  });
