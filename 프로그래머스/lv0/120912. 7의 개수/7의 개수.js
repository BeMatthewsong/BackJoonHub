const solution = array => {
    let count = 0;
    
   array.forEach(item=>{
       let itemArray = String(item).split('');
       
       itemArray.forEach(item => item==="7"? count ++ : null);
   })
    return count;
}