function solution(my_string, m, c) {
    let result = []
 const toArr = my_string.split('')
 for(let i =0; i < toArr.length; i+=m) {
   result.push(toArr.slice(i, i+m));
 }
    return result.map(a=>a[c-1]).join('')
}