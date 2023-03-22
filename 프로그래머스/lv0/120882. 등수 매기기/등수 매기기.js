function solution(score) {
    let arr = score.map(i => i[0] + i[1])
    let n = arr.length;
    let answer = Array.from({ length: n }, () => 1)
      for(let i = 0; i < n; i++){
        for(let j = 0; j <n; j++){
            if(arr[j] > arr[i]){
                answer[i]++;
            }
        }
      } 
    return answer;
}