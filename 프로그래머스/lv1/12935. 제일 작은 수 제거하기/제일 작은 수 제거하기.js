const solution = arr => {
    let minNum = Math.min(...arr);
    
    return arr.filter(v=> v !== minNum).length === 0 ? [-1] : arr.filter(v=> v !== minNum);
}