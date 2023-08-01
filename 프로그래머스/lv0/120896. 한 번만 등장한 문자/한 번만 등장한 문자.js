const solution = (s) => {
    let answer = [];
    for (let el of s) { 
        if (s.indexOf(el) === s.lastIndexOf(el)){ // 유일성 보장
            answer.push(el);
        }
    }
    return answer.sort().join('');
}
