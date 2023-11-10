const solution = (myString, pat) => {
    let answer = 0;
    let s = myString.toLowerCase();
    let p = pat.toLowerCase();
    let sLen = s.length;
    let pLen = p.length;
    
    for (let i=0; i<sLen; i++){
        if (s.slice(i, i+pLen) == p) answer = 1;
    } 
    return answer;
    
}