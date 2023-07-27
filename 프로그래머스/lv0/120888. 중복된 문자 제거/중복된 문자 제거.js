const solution = (my_string) => 
    [...my_string]
        .filter((v,i)=> my_string.indexOf(v)==i)
        .join('')
