'use strict'
class CounterWithGenerator {
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
    console.log('next')
    gen.next()
    console.log('next')
    gen.next()
    console.log('next')
    gen.next()
    console.log('last!')
  }
}
export default CounterWithGenerator
