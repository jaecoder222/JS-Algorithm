function solution(n, k) {
    var money = 0;
    var drink = 0;
    if(n < 10){
        return (n * 12000) + (k * 2000)
    }else {
        return (n * 12000) + ((k - parseInt(n/10)) * 2000)
    } 
}