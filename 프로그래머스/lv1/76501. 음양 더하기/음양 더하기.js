function solution(absolutes, signs) {
    let answer = absolutes.map((v, i) => signs[i] == false ? absolutes[i] = -v : v);
    return answer.reduce((acc, cur) => acc + cur);
}