function solution(num_list, n) {
   let after = num_list.slice(n)
   let befor = num_list.slice(0,n)
   return after.concat(befor)
}