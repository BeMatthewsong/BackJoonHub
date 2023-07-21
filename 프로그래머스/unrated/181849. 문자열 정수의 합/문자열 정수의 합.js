const solution = num_str => {
   return [...num_str].map(v=> Number(v)).reduce((a,c)=> a+c);
}