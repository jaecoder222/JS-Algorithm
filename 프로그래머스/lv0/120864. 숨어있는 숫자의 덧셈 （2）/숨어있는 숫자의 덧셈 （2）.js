function solution(my_string) {
    return my_string
    .split(/[^0-9]/g)
    .filter(a => a !== '')
    .map(Number)
    .reduce((acc,curr)=> acc + curr,0)
    
}