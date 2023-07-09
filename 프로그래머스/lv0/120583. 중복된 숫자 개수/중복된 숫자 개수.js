const solution = (array, n)=> {
    let count = array.filter((el)=> el === n ).length;
    return count;
}