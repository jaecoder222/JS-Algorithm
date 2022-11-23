function solution(age) {
    var answer = '';
    var stringAge = String(age);
    var alphabet = ['a','b','c','d','e','f','g','h','i','j']
    for(var i =0; i < stringAge.length; i++){
        answer = answer + alphabet[stringAge[i]]
    }
    return answer;
}