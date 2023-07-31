const solution = (my_string) => {
    //0~9이 아닌(^) 것들을 문자열에서 모두 한 개 또는 여러 개(+) 
    let nums = my_string.match(/[0-9]+/g);
    
    return nums? 
             nums.map(num => Number(num)).reduce( (a, c) => a + c, 0) 
             : 0; // 문자열에 자연수가 없는 경우 0을 return
               
}
