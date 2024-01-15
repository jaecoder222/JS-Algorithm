function solution(s) {
    let result = []
    for(let i = 0; i < s.length; i++){
        result.push(s.charCodeAt(i));
    }
    let char = result.sort((a,b) => b-a)
    return  String.fromCharCode(...char);
}