function solution(t, p) {
    let result = []
   for(let i =0; i < t.length; i++) {
       result.push(t.substr(i,p.length))
   }
   return result.filter(x=>x.length === p.length).filter(x=> x <= p).length
}