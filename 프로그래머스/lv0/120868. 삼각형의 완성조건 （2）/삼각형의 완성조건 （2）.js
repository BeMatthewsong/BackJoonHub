const solution = sides => {
    let oneSide = sides.sort((a,b) => b-a)[0]; // 가장 긴 변 후보
    let anotherSide = sides.sort((a,b) => b-a)[1]; // 니머지 변
    
    // 가장 긴 변이 배열 안에 있는 경우
    let array1 = new Array(oneSide).fill(1).map((v,i)=> v=i+1);
    array1 = array1.filter(v => (v + anotherSide) > oneSide );
    
    // 가장 긴 변이 배열 안에 없는 경우
    let array2 = new Array(oneSide + anotherSide).fill(1).map((v,i)=> v=i+1);
    array2 = array2.filter(v => v >= oneSide && v < oneSide + anotherSide);
    
    // 배열 합치고 중복값 없애기
    let answer = array1.concat(array2);
    return [...new Set(answer)].length;
}