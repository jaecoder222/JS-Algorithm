function solution(num_list, n) {
    let answer = [];
    for(let i = 0; i < num_list.length;){
        let sliceN = [];
        for(let j = 0; j < n; j++){
            sliceN.push(num_list[i])
            i++
        }
        answer.push(sliceN)
    }
    return answer;
}