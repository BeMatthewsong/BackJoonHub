const solution = n => {
    let answer =[];
    //소수 함수
    function isPrime(N) {
      if (N === 1) return false;
      for (let i = 2; i <= Math.sqrt(N); i++) {

        if (N % i === 0) return false;
      }
      return true;
    }
    // 소수만 거르기
    for(let i=1; i<=n; i++){
        if (isPrime(i)){
            answer.push(i);
        }
    }
    // 약수만 골라서 반환하기
    return answer.filter(v=> n%v ==0);
}