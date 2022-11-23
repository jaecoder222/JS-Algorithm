function solution(age) {
    var answer = '';
    var stringAge = String(age);
    for(var v =0; v < stringAge.length; v++){
      if(stringAge[v] === '0'){
          answer = answer + 'a'
      }
        if(stringAge[v] === '1'){
          answer = answer + 'b'
      }
        if(stringAge[v] === '2'){
          answer = answer + 'c'
      }
        if(stringAge[v] === '3'){
          answer = answer + 'd'
      }
        if(stringAge[v] === '4'){
          answer = answer + 'e'
      }
        if(stringAge[v] === '5'){
          answer = answer + 'f'
      }
        if(stringAge[v] === '6'){
          answer = answer + 'g'
      }
        if(stringAge[v] === '7'){
          answer = answer + 'h'
      }
        if(stringAge[v] === '8'){
          answer = answer + 'i'
      }
        if(stringAge[v] === '9'){
          answer = answer + 'j'
      }
        
    }
    return answer;
}