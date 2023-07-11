const solution = (array) => {
    array.sort((a,b)=>a-b); //오름차순 정렬
    let centerOrder = parseInt(array.length / 2); //중앙 위치
    return array[centerOrder];
}