const solution = N => {
    // 각 자릿수로 분해해서 배열에 넣기
    let answerArr = [...String(N)];
    
    // 각 요소 숫자형 변환
    answerArr = answerArr.map(v => Number(v));
    
    // 총합 구하기 reduce
    result = answerArr.reduce((acc, cur) => acc + cur);
    
    return result;
}