const solution = s => {
    // 문자열 길이가 홀수
    if (s.length % 2 == 1) {
        let index = ~~(s.length - 1) / 2;
        return s[index];
    } 
    // 문자열 길이가 짝수
    else {  
        let index = ~~(s.length - 1) / 2;
        return s.slice(index, index + 2)
    }
    
}