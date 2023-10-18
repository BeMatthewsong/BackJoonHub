const solution = num_list => {
    // 홀수 번째 인덱스, 짝수 번째 인덱스 
    const oddIndexNums = num_list.filter((v,i) => i % 2 === 0);
    const evenIndexNums = num_list.filter((v,i) => i % 2 !== 0);
    const oddIndexSum = oddIndexNums.reduce((acc, cur) => acc + cur, 0);
    const evenIndexSum = evenIndexNums.reduce((acc, cur) => acc + cur, 0);
    
    return oddIndexSum === evenIndexSum ? oddIndexSum : Math.max(oddIndexSum, evenIndexSum);
} 