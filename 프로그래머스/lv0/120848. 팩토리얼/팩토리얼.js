const solution = (n) => {
    let ans = 1;

    for(let i = 1; i <= n; i++){
        ans *= i;
        
        if(ans === n){
            return i;
        }
        
        // n 이하의 최대 팩토리얼인 (i-1)!을 반환한다.
        if(ans > n){
            return i - 1;
        }
    }
}