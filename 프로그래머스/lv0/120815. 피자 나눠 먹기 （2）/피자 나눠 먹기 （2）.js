const solution = (n) => {
    let pizzaNum = 1;
    while((pizzaNum * 6) % n !=0){
        pizzaNum ++;
    }
    return pizzaNum;
}