const solution = numbers => {
    // 0-9에서의 총합
    const sumZeroToNine = 45;
    // 주어진 배열의 총합 구하기 reduce
    let sum = numbers.reduce((acc, cur)=> acc + cur);
    
    return sumZeroToNine - sum;
}