const solution = (a, b) => {
    // a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수
    // 배열로 풀기 ? 수학적인 공식 ? 반복문 ? 
    
    // if (a = b) {
    //     return a;
    // } else {
    //     let c = Math.max(a, b);
    //     let d = Math.min(a, b);
    //     return c * (c+1) / 2 - (d-1) * d / 2;
    // } 
    
    // if (a = b) {
    //     return a;
    // } else if (a < b) {
    //     return b * (b + 1) / 2 - (a - 1) * a / 2;
    // } else if (a > b) {
    //     return a * (a + 1) / 2 - (b - 1) * b / 2;
    // }
    let answer = 0;
    
    for(let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    	answer = answer + i;
    }
    
    return answer;
}
