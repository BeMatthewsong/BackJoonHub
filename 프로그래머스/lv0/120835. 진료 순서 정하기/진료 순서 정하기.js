function solution(emergency) {
    let sortedArray = emergency.slice().sort((a,b)=>b-a); // slice() : 매개변수 안에 빈값이면 복사
    return emergency.map(v=>sortedArray.indexOf(v)+1);
}