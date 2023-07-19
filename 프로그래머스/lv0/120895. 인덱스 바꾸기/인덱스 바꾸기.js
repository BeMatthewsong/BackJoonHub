const solution= (my_string, num1, num2) => {
    let answer = [];
    let string1, string2;
    answer = my_string.split('');
    // 문자 서로 바꾸기
    answer.splice(num1, 1, my_string[num2]);
    answer.splice(num2, 1, my_string[num1]);
    // 문자열로 바꾸기
    return answer.join('');
}

