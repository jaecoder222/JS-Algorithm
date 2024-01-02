function solution(my_string, indices) {
return [...my_string].map((a,i)=> indices.includes(i) ? "" : a).filter(a => a !== "").join('')
}