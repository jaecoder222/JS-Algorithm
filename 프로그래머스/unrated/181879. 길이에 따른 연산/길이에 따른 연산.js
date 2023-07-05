function solution(num_list) {
    let answer = 0
      if(num_list.length <= 10) {
        answer = num_list.reduce((acc, curr)=> acc * curr)
      }else{
         for(const item of num_list) {
             answer += item;
         }
      }
    return answer;
}