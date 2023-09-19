const solution = s => {
    // 대문자든 소문자든 하나로 통일하기
    let answer = s.toLowerCase();
    
    //'p'의 개수와 'y'의 개수를 비교해 같으면 True 아니면 False
    let pCount, yCount = 0;
    
    pCount = [...answer].filter(v => v == 'p').length;
    yCount = [...answer].filter(v => v == 'y').length;
    
    return pCount == yCount;
}