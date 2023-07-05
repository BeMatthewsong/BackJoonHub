const solution = (s1, s2)=>{
    let answer = [];
    answer = s1.filter(x=> s2.includes(x));
    return answer.length;
}