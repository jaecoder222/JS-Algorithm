function solution(num_list) {
   let add = num_list.filter(add => add % 2 !== 0)
   let even = num_list.filter(even => even % 2 === 0)
   return Number(add.join("")) + Number(even.join(""))
}