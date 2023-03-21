function solution(chicken) {
    var answer = 0;
   while(chicken >= 10){
       answer += chicken/10 << 0
       chicken = chicken%10 + chicken/10 << 0
   }
    return answer;
}