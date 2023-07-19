const solution = (my_string) => {
    return [...my_string]
        .map(v => Number(v))
        .filter(v => Number.isInteger(v))
        .sort((a,b)=> a-b);
}