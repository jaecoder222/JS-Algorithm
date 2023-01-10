function solution(array, n) {
  let arr = array
  .sort((a,b)=> a-b)
  .map(item => Math.abs(item - n))
  .sort((a,b)=> a-b)[0]
 
  
  for(let i = 0; i < array.length; i++){
      if(Math.abs(array[i] - n) === arr) {
          return array[i];
      }
  }
}