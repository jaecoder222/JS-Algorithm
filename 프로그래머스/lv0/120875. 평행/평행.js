function solution(dots) {
    const plane = []
    for(let i = 0 ; i < dots.length ; i ++) {
        for(let j = i+1 ; j < dots.length ; j ++) {
            const incli = (dots[i][1]-dots[j][1]) / (dots[i][0]-dots[j][0])
            if(plane.includes(incli)) return 1
                plane.push(incli)
        }
    }
    return 0
}