'use strict'

// import Promise from 'bluebird'

// let serveFullCourse = () => {
//   return Promise.coroutine(function* () {

//   })
// }
class Counter {
  static count() {
    console.log('count!!!がよばれました！')
    function *gene() {
      console.log('1!')
      yield
      console.log('2!')
      yield
      console.log('3!')
      yield
      console.log('4!')
      yield
    }
    // 実行する
    let gen = gene()
    console.log('start')
    gen.next()
  }
}
export default Counter
