// import 'reify' //require('reify')
// import 'async-to-gen/register' //require('async-to-gen/register')
// import require('./some-module-with-async-functions')
import Person from './person'
// import 'babel/polyfill'

class Friend extends Person {
  constructor(name) {
    super(name)
  }
  callName() {
    console.log(this.name)
  }
  foo() {
    return 'hoges'
  }
  yahoo() {

  }
  async test() {
    let res = await this.foo()
    console.log(res)
    this.yahoo()
  }
}

let friend = new Friend('momo')

friend.callName()
