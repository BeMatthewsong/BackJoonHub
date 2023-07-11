const solution = (my_string) => {
    let answer = [];
    let vowel = ["a", "e", "i", "o", "u"];
    answer = [...my_string];
    vowel.forEach((el)=>{
        while(answer.includes(el)){
         let index = answer.indexOf(el);
         answer.splice(index, 1);
        } 
    })
    return answer.join('');
}