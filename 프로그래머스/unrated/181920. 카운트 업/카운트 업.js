const solution = (start_num, end_num) => {
    let arr = new Array(end_num+1);
    arr = arr.fill(1).map((v,i) => i)
    return arr.slice(start_num)
}