function solution(sides) {
    let result = [];
    let sor = sides.sort((a,b) => b-a)
    for(let i = sor[0]; sor[1] + i > sor[0]; i--){
      result.push(i)   
    }
    for(let j = sor[0]+1; j < sor[0] + sor[1]; j ++){
     result.push(j)   
    }
    return result.length;
}