function solution(s) {
    const half = s.length / 2
    if(s.length%2 !== 0) {
        return s.substr(Math.floor(half),1)
    }else{
        return s.substr(half-1,2)
    }
}