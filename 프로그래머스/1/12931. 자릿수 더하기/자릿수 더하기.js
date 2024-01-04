function solution(n)
{
    const toString = n+""
    return toString.split("").map(Number).reduce((a,b) => a+b, 0)
}