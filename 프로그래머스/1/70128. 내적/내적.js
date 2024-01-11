function solution(a, b) {
    let add = []
   for(let i =0; i < a.length; i++){
       add.push(a[i] * b[i])
   }
   return add.reduce((a,b) => a+b,0)
}