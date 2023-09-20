const solution = n => {
    //n의 각 자릿수를
    let bigToSmallNum = 
        [...String(n)]
            .sort((a,b)=> b-a) //큰 것부터 작은 순으로 정렬
            .join(''); // 요소들을 한 문자열로
    return Number(bigToSmallNum); //새로운 정수를 리턴
} 


