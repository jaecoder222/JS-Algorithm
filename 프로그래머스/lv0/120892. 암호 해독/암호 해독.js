function solution(cipher, code) {
    var answer = [];
    var a = cipher.split('')
    for(let i = 0; i < a.length; i++) {
     if((i+1) % code === 0) {
       answer.push(cipher[i])  
     }
    }
    return answer.join('');
}