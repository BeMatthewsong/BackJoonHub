const solution = (n) => {
    let arr = n.toString().split('').map(x=>Number(x));
    return arr.reduce((acc, cur) => acc + cur, 0);
}