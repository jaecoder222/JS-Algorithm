function solution(s) {
    let num = 0
  const string = s.toLowerCase(s);
    for(let i = 0; i < string.length; i++){
        if(string[i] === 'p') num++
        if(string[i] === 'y') num--   
    }
  return num === 0 ? true : false
}