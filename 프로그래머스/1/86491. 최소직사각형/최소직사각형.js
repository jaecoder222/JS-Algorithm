function solution(sizes) {
    const max = []
    const min = []
   for(let i =0; i < sizes.length; i++){
       max.push(Math.max(...sizes[i]))
       min.push(Math.min(...sizes[i]))
   }
    return Math.max(...max) * Math.max(...min)
}