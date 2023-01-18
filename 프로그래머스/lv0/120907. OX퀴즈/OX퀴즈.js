function solution(quiz) {
    var answer = [];
    for(let i = 0; i < quiz.length; i++){
        let inx = quiz[i].split(" ")
        console.log(inx)
        if(inx[1] === "-"){
            if(Number(inx[0]) - Number(inx[2]) === Number(inx[4])){
                answer.push("O")
            }else{
                answer.push("X")
            }
        }else{
            if(Number(inx[0]) + Number(inx[2]) === Number(inx[4])){
                answer.push("O")
            }else{
                answer.push("X")
            }
        }
    }
    return answer;
}