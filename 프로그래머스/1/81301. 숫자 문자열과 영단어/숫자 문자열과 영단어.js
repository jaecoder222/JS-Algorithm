function solution(s) {
    const str = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    str.forEach((e, i) => {
        s = s.split(e).join(i)        
    })

    return Number(s);
}