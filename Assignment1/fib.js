function fibs(num){
    array = [0,1]
    if (num === 0) return [];
    else if(num ===1) return [0];
    else if(num ===2) return [0,1];
    else{
        for(let i=2;i<num;i++){
            var sum = array[i-1] + array[i-2]
            array.push(sum);
        }
        return array;
    }
    
}

console.log(fibs(7))