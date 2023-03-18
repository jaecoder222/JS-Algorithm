function solution(i, j, k) {
    let answer = [];
    let result = 0;
   for(let a = i; a <= j; a++){
       answer.push(a)
   }
    return [...answer+""].filter(a => a === (k+'')).length;
}