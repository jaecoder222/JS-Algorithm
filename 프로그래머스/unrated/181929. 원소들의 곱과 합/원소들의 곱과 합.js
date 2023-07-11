function solution(num_list) {
   const multi = num_list.reduce((acc, curr) => acc * curr, 1)
   const add  = num_list.reduce((acc, curr) => acc + curr, 0)
   return multi < add**2 ? 1 : 0
}