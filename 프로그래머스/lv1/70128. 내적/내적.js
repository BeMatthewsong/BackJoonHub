const solution = (a,b) => {
    // for 문으로 노가다
    let sum = 0;
    for (let i=0; i<a.length; i++){
        sum += a[i] * b[i];
    }
    return sum;
}