function getFactorial(n) {
    var result = 1;
    for(let i =1; i <= n; i++){
        result *= i;
    }  
    return result;
}

function solution (n) {
    for(let i =1; ; i++){
        const answer = getFactorial(i);
        if(n < answer) {
            return i - 1;
        }
    }
}