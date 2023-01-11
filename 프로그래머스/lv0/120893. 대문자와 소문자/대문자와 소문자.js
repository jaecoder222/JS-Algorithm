function solution(my_string) {
    const a = [...my_string].map(item => item.charCodeAt() >= 65 && item.charCodeAt() < 97 ? item.toLowerCase() : item.toUpperCase()).join("")
    return a;
}