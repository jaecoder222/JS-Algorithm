morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}

function solution(letter) {
    
    let currentMose = '';
    let answer = '';
    for(let i = 0; i < letter.length; i++){
        const item = letter[i]
        if(item === ' '){
            answer += morse[currentMose];
            currentMose = '';
        }else {
          currentMose += item;  
        }
    }
    answer += morse[currentMose]
    return answer;
}