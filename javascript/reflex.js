import Debug from './debug'

export default class Reflex {
  constructor (data, controller) {
    this.data = data.valueOf()
    this.controller = controller
    this.element = data.reflexElement
    this.reflexId = data.reflexId
    this.error = null
    this.stage = 'created'
    this.warned = false
  }

  get getPromise () {
    const promise = new Promise((resolve, reject) => {
      this.promise = {
        resolve,
        reject,
        data: this.data
      }
    })
    promise.reflexId = this.reflexId
    if (Debug.enabled) promise.catch(() => {})
    return promise
  }
}