function solution(a, b) {
   let toStringA = a.toString()
   let toStringB = b.toString()
   let AtoB = toStringA + toStringB
    let BtoA =  toStringB + toStringA
    return AtoB >= BtoA ? +AtoB : +BtoA
}