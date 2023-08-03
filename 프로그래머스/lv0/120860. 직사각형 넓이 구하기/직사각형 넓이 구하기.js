const solution = dots => {
    let Arr1 = dots.map(item => item[0]);
    let Arr2 = dots.map(item => item[1]);
    
    let width = [...new Set(Arr1)];
    let height = [...new Set(Arr2)];
    
    return  Math.abs(width[1] -width[0]) *  Math.abs(height[1] -height[0]);
}