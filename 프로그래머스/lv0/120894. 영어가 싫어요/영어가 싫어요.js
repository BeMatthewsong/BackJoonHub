const solution = numbers => {
    const strNums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    
    strNums.forEach((v,i)=>{
        numbers = numbers.replaceAll(v,i); // strNums 배열 안에 요소의 값과 인덱스를 이용, 배열 안에 요소 v를 인덱스 i로 바꾼다.
    })
    
    return Number(numbers);
}