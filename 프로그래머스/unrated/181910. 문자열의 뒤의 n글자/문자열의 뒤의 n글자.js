const solution = (my_string, n) => {
    let arr = [...my_string];
    let len = arr.length;
    
    return arr.splice(len-n).join('');
}