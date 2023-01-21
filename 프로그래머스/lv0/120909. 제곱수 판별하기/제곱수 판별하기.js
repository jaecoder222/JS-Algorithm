function solution(n) {
    let root = Math.sqrt(n)
    if(Number.isInteger(root) ){
        return 1;
    }else{
        return 2;
    }
}