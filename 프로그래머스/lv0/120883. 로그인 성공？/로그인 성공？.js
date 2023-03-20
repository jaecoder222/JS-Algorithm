function solution(id_pw, db) {
    let answer = ""
  db.map(i => {
      if(i[0] === id_pw[0] && i[1] === id_pw[1]){
           answer = "login";
      }else if(i[0] === id_pw[0] && i[1] !== id_pw[1]){
           answer = "wrong pw";
      }else if(i[0] !== id_pw[0] && i[1] !== id_pw[1]) {
          answer = "fail";
      }
  })
    return answer;
}