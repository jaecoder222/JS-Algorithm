function solution(order) {
    var a = (order + '')
    .split('')
    .filter(item=>item % 3 === 0)
    .filter(item => item !== '0')
    
    return a.length;
    }