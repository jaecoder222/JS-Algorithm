// function solution(array, commands) {
//     let result = []
//     for(let i = 0; i < commands.length; i++){
//         result.push(array.slice(commands[i][0]-1, commands[i][1]))
//     }
//     let answer = []
//     let nth = []
//      let sort = result.map(x=>x.sort())
//     for(let i = 0; i < commands.length; i++){
//         nth.push(commands[i][2])
//     }
//     for(let i = 0; i < nth.length; i++){
//         answer.push(sort[i][nth[i]-1])
//     }
//    return answer
// }


function solution(array, commands) {
    // idx는 0부터 시작하므로 i번째부터면 i-1 ~ j-1까지 배열을 slice 후 정렬한 후 
    // 마찬가지로 k번째는 0부터는 k-1에 접근 
    const answer = commands.map(([i,j,k])=>array.slice(i-1,j).sort((a,b)=>a-b)[k-1])
    return answer
}