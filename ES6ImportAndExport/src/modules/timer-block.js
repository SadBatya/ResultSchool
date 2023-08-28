import { getPreciseDateDifference, getTodayDateFormat } from "../core/utils/date"

export class TimerBlock{
  #date
  #timerContainer
  #timerTextHTML
  constructor(date){
    this.#date = date
    this.#timerContainer = document.createElement('div')
    this.#timerTextHTML = document.createElement('h2')
  }

  #getTimerContent(){
    return getPreciseDateDifference(new Date(), this.#date)
  }
  #enableDateUpdate(){
    setInterval(() => {
      this.#timerTextHTML.textContent = this.#getTimerContent()
    }, 1000)
  }
  render(){
    this.#timerContainer.id = 'timer'
    this.#timerTextHTML.className = 'timer-text'
    this.#timerTextHTML.textContent = this.#getTimerContent()


    const todayDateHTML = document.createElement('div')
    todayDateHTML.className = 'today-date'
    const todayDateFormat = getTodayDateFormat(new Date())
    todayDateHTML.textContent = `(Сегодня: ${todayDateFormat})`

    this.#timerContainer.append(this.#timerTextHTML, todayDateHTML)
    this.#enableDateUpdate()
    return this.#timerContainer
  }
}