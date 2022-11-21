function solution(my_string, n) {
    var answer = ""
  for(var i =0; i < my_string.length; i++){
     var repeatEl = my_string[i]
     for(var j = 0; j < n; j++) {
         answer = answer + repeatEl
     }
  }
    return answer;
}