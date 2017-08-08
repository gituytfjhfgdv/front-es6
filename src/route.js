'use strict'
import Person from './js/person'
import c from './js/generator'
import './route.scss'

class Friend extends Person {
  constructor(name) {
    super(name)
  }
  callName() {
    console.log(this.name)
    c.count() // count呼び出し
  }
}

let friend = new Friend('Ryo')

friend.callName()
