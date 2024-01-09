function solution(numbers) {
    let allNumber = []
   for(let i = 0; i <= 9; i++){
       allNumber.push(i)
   }
    return allNumber.filter(x => !numbers.includes(x)).reduce((a,b)=>a+b,0)
}