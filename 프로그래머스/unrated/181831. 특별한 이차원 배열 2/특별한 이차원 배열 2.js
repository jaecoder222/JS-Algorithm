function solution(arr) {
    let answer = true;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] !== arr[j][i]) {
                answer = false
            }
        }
    }
    return answer === true ? 1 : 0
}