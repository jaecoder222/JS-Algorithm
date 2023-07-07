function solution(n, control) {
  return [...control].reduce((acc, curr) => {
    switch (curr) {
        case'w' :
            return acc +1
        case's' :
            return acc -1
        case'd' :
            return acc + 10
        case'a' :
            return acc -10
    }
  }, n) 
}
   
