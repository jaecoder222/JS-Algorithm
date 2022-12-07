function solution(box, n) {
    var answer = 1;
    for(let i = 0; i < box.length; i++){
      answer = answer * parseInt(box[i] / n)
    }
    return answer;
}