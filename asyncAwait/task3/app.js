const ol = document.querySelector('ol')
const URL = 'https://jsonplaceholder.typicode.com/albums'

const createLiBlock = (text) => {
  const li = document.createElement('li')
  li.innerText = text
  ol.append(li)
}

const getInfoAlbums = async (URL) => {
  try {
    const responses = await fetch(URL)
    const data = await responses.json()
    const albumsName = data.map(album => {
      createLiBlock(album.title)
    })
  } catch (error) {
    console.error(error)
  }
}

getInfoAlbums(URL)