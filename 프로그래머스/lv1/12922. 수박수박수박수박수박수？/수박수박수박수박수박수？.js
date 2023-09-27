const solution = n => {
    let array = new Array(n)
                    .fill('수');
    for (let i=0; i<n; i++){
        if(i % 2 == 1) 
            array.splice(i, 1, "박");
    }
    return array.join("");
}