// function solution(s, n) {
//   let arr = []
//   let split = s.split('')
//     for(let i = 0; i < split.length; i++){
//        arr.push(s.charCodeAt(i))
//     }
//    let add = []
//    for(let i =0; i < arr.length; i++){
//        if(arr[i] === 32) {
//            add.push(arr[i])
//        }else if (arr[i] === 90 || arr[i] === 122) {
//            add.push(arr[i] + n - 26)
//        }else{
//            add.push(arr[i] + n)
//        }
//    }
//    return String.fromCharCode(...add)
// }

function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}
