function solution(num, k) {
    var arr =(num + '').split('')
    var x = k + ''
    if(arr.includes(x)){
        return arr.indexOf(x) + 1
    }else{
        return -1
    }
}