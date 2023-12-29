function solution(absolute, signs) {
  let answer = [];
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === !false) {
      answer.push(absolute[i]);
    } else {
      answer.push(absolute[i] * -1);
    }
  }
  return answer.reduce((a, b) => a + b, 0)
}
solution([4, 7, 12], [true, false, true]);