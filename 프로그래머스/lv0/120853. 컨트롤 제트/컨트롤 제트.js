const solution = s => {
    // 문자열에서 배열로
    let answer = s.split(' ');
    let indexArrOfZ = [];
    let indexOfZ = answer.indexOf('Z');
    
    // Z 인덱스 다 찾기
    while( indexOfZ != -1 ) {
        indexArrOfZ.push(indexOfZ);
        indexOfZ = answer.indexOf('Z', indexOfZ + 1);
    }
    
    // Z랑 Z 앞에 있는 수 없애기
    indexArrOfZ.sort((a,b)=> b-a);
    indexArrOfZ.map(v=>answer.splice(v-1,2));
    
    
    return answer.map(v=>Number(v)).reduce((acc,cur)=>acc+cur,0);
}