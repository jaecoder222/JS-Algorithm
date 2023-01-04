function solution(numbers) {
  const result = numbers.sort((a,b) => b - a)[0] * numbers.sort((a,b) => b - a)[1]
  return result;
}