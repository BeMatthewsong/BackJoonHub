const solution = (array, n) => 
    array.filter(a => Math.abs(a-n)=== Math.min(...array.map(a => Math.abs(a-n)))).sort((a,b) => a-b)[0]