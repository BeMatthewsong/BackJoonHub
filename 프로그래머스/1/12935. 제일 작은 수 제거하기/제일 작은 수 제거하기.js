// 배열에서 가장 작은 수를 제거한 배열을 리턴하는 함수
const solution = arr => {
    
    // 최솟값 찾기
    const minimumValue = Math.min(...arr);
    
    // 배열에서 최솟값 제거하기
    const deletedArr = arr.filter(v=> v !== minimumValue);
    
    return deletedArr.length ?  deletedArr : [-1];
}