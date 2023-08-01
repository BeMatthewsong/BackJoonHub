const solution = (bin1, bin2) => {
    let dec1 = parseInt(Number(bin1),2); // 2진수를 의미하는 문자열을 숫자로 바꾸고 10진수로 변경한다. 
    let dec2 = parseInt(Number(bin2),2); // 10진수로 바꾸는 이유는 연산을 하기 위해서
    
    let answer = dec1 + dec2; 
    return answer.toString(2) // 10진수를 2진수로 바꾼다.
}