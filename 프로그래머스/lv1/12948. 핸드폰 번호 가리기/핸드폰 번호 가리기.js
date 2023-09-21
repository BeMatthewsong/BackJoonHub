const solution = phone_number => {
    // 범위 한정
    let stringArr = [...phone_number];
    // 특정 문자로 바꾸기 
    for (let i = 0; i< stringArr.length-4; i++){
        stringArr[i]='*';
    }
    // 한 문자열로 모으기
    return stringArr.join('');
}