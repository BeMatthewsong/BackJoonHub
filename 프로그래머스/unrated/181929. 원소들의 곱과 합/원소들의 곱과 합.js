const solution = num_list => {
    numMutiple = num_list.reduce((acc, cur) => acc * cur ,1);
    numSum = num_list.reduce((acc,cur)=> acc+cur, 0);
    numSumSquare = numSum ** 2;
    
    
    return numMutiple < numSumSquare ? 1 : 0;
    
}