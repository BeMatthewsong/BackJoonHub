const solution = (age) => {
    const alienAge = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let array = age.toString().split('').map(x=>Number(x));
    
    return array.map(x=>alienAge[x]).join('');
}