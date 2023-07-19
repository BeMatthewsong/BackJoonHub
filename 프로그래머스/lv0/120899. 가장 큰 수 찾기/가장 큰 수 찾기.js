const solution = (array) => {
    let value = Math.max(...array);
    let index = array.indexOf(value);
    return [value, index];
}