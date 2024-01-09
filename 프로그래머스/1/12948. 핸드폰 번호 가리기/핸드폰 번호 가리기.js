function solution(phone_number) {
    let star = phone_number.substr(0,phone_number.length-4)
    .split('').map(a => "*").join('')
    let substr = phone_number.substr(-4)
    return star + substr 
  }
