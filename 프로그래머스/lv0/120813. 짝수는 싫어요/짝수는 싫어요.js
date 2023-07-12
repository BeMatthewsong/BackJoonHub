const solution =(n) => {
    let array = [];
    for (let i=0; i<=n; i++){
        if(i%2==1){
            array.push(i);
        }
    }
    array.sort((a,b)=> a-b);
    return array;
}