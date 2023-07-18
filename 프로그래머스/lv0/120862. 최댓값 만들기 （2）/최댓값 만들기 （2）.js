const solution = (numbers) => {
    let array = numbers.sort((a,b)=>a-b); //오름차순
    let plusNumProduct = array[numbers.length -1] * array[numbers.length -2];
    let minusNumProduct = array[0] * array[1];
    
    return plusNumProduct > minusNumProduct? plusNumProduct : minusNumProduct;
}