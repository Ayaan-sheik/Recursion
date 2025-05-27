function mergeSort(array) {
    if (array.length <= 1) return array;
    
    if (array.length == 2) {
        if (array[0] > array[1]) {
            return [array[1], array[0]];
        }
        return array;
    }

    const low = 0;
    const high = array.length;
    const mid = Math.floor((low + high) / 2);
    
    const left = mergeSort(array.slice(low, mid));
    const right = mergeSort(array.slice(mid, high));
    return merge(left, right);
}

function merge(array1, array2) {
    let result = [];
    let i = 0, j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            result.push(array1[i]);
            i++;
        } else {
            result.push(array2[j]);
            j++;
        }
    }
    // Add remaining elements
    while (i < array1.length) {
        result.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        result.push(array2[j]);
        j++;
    }
    return result;
}

console.log(mergeSort([2,1,6,4,3,5]));     // [1,2,3,4,5,6]
console.log(mergeSort([1]));                // [1]
console.log(mergeSort([2,2,1,1]));          // [1,1,2,2]
console.log(mergeSort([]));                 // []