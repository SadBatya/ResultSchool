import JS_IMAGE from '../../assets/js.png'

export class JsBlock{
  #container
  constructor(){
    this.#container = document.createElement('div');
    this.#container.className = 'js-block'
  }
  render() {
    const mainTitle = document.createElement('h1')
    mainTitle.className = 'main-title'
    mainTitle.textContent = 'JavaScript'

    const JsImageHTML = document.createElement('img')
    JsImageHTML.className = 'js-image'
    JsImageHTML.src = JS_IMAGE;

    const foundedText = document.createElement('p')
    foundedText.textContent = 'С момента создания JS прошло'
    foundedText.className = 'founded-text'

    this.#container.append(mainTitle, JsImageHTML, foundedText)

    return this.#container
  }
}