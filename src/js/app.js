import Person from './person'
import "babel/polyfill"

class Friend extends Person {
    constructor(name) {
        super(name)
    }
    callName() {
        console.log(this.name)
    }
    foo() {

    }
    yahoo() {
        
    }
    async hoge() {
        await foo()
        yahoo()
    }
}

let friend = new Friend('momo')

friend.callName()