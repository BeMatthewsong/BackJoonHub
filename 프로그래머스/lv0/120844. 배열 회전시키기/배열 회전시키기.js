const solution = (numbers, direction) => {
    let answer = []; 
    if(direction == "right"){
        for(let i=0; i<numbers.length; i++){
           (i == numbers.length - 1)? answer.splice(0, 0, numbers[i]) : answer.splice(i+1, 0, numbers[i]);
        }
    }
    if(direction == "left"){
        for(let i=0; i<numbers.length; i++){
           (i == numbers.length - 1)? answer.splice(numbers.length - 1, 0, numbers[0]) : answer.splice(i, 0, numbers[i+1]);
        }
    }
    return answer;
}