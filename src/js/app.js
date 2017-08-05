import Person from './person'
import Gene from './generator'

class Friend extends Person {
  constructor(name) {
    super(name)
  }
  callName() {
    console.log(this.name)
  }
}

let friend = new Friend('Ryo')

friend.callName()
