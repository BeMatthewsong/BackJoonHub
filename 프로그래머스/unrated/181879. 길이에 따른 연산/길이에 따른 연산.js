const solution = num_list => {
 let len = num_list.length;
 return len >= 11 ? num_list.reduce((acc, cur) => acc + cur, 0) : num_list.reduce((acc, cur) => acc * cur, 1);
}