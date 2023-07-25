function solution(a, b) {
    let add = a.toString() + b.toString()
    let mul = 2 * a * b
   return +add >= mul ? +add : mul
}