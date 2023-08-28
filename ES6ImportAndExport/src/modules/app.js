import { JsBlock } from "./js-block" 
import { TimerBlock } from "./timer-block"
import { JS_CREATION_DATE } from "../core/constants/settings"
export default class App{
  #jsBlock
  #timerBlock
  constructor(){
    this.#jsBlock = new JsBlock()
    this.#timerBlock = new TimerBlock(new Date(JS_CREATION_DATE))
  }
  run(){
    const jsBlockHTML = this.#jsBlock.render()
    const timerBlockHTML = this.#timerBlock.render()
    document.body.append(jsBlockHTML, timerBlockHTML)
  }
}

