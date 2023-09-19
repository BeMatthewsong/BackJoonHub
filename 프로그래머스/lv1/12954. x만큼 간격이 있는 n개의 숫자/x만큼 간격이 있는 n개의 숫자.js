const solution = (x, n) => {
    let answer = Array(n).fill(x); // n만큼 x의 값을 가진 배열 만들기
    
    return answer.map((v,n)=> v + (x * n));
}