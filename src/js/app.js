'use strict'

import Person from './person'
import c from './generator'

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
