function solution(numbers) {
    return numbers.reduce((sum, cur) => sum+cur) / numbers.length
}