const solution = (phone_book) => {
    answer = true;
    
    phoneDict = {} // hash
    
    for (phoneNum of phone_book) {
        phoneDict[phoneNum] = true;
    }
    
    for (phoneNum of phone_book) {
        for (let i = 1; i < phoneNum.length; i++) {
            const prefix = phoneNum.slice(0,i);
            if (phoneDict[prefix]) 
                answer = false;
        }
    }
    return answer;
} 