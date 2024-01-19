function solution(s) {
 return s.split(' ').map(el => el.split('').map((el,index) => index % 2=== 0 ? el.toUpperCase() : el.toLowerCase()).join('')).join(' ')
//     let result = ''
//     for(let i =0; i < s.length; i++){
//        i % 2 === 0 ? result += s[i].toUpperCase() : result += s[i]
//     }
//    return result
}