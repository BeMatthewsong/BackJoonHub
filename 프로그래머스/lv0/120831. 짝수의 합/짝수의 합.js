const solution = n => {
    return Array(n)
        .fill(0)
        .map((v,i) => i+1)
        .filter(v => v % 2 == 0)
        .reduce((acc, cur)=> acc + cur , 0);
}