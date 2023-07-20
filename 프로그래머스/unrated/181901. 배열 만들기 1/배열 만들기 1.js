const solution = (n, k) => {
    // n 이하
    let answer = new Array(n).fill(0).map((v,i)=> v+i+1);
    // k 배수
    return answer.filter(x => x % k == 0);
}