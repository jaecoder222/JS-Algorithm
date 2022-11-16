function solution(array) {
    const sortedArray = array.sort((a, b) => a - b)
    let cnt = 0;
    let max = -1;
    let maxRepeatCnt = 0;
    let repeatCnt = 0;
    let beforeNumber = -1
    let isDupMax = false;
    while(cnt < array.length) {
        if(beforeNumber !== array[cnt]) {
            repeatCnt = 1;
        }else {
            repeatCnt = repeatCnt + 1
        }
        
        if(repeatCnt === maxRepeatCnt){
            if(max !== array[cnt])
            isDupMax = true;
        }
        
        if(repeatCnt > maxRepeatCnt) {
            max = array[cnt];
            maxRepeatCnt = repeatCnt;
            isDupMax = false;
        }
        beforeNumber= array[cnt]
        cnt = cnt + 1
    }
    if(isDupMax) {return -1}
    return max;
}