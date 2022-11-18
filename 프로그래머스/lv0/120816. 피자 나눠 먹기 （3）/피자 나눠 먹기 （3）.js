function solution(slice, n) {
  if(n % slice === 0) {
      return n / slice;
  }else {
      return parseInt(n / slice) + 1;
  }
}