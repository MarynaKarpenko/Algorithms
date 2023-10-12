function findKthElement(sortedArray1, sortedArray2, k) {
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < sortedArray1.length && pointer2 < sortedArray2.length) {
        if (sortedArray1[pointer1] < sortedArray2[pointer2]) {
            if (pointer1 + pointer2 === k) {
                return sortedArray1[pointer1];
            }
            pointer1++;
        } else {
            if (pointer1 + pointer2 === k) {
                return sortedArray2[pointer2];
            }
            pointer2++;
        }
    }

    
    if (pointer1 === sortedArray1.length) {
        return sortedArray2[pointer2 + k - (pointer1 + pointer2)];
    } else {
        return sortedArray1[pointer1 + k - (pointer1 + pointer2)];
    }
}

const array1 = [100, 112, 256, 349, 770];
const array2 = [72, 86, 113, 119, 265, 445, 892];
const k = 6;

const result = findKthElement(array1, array2, k);
console.log(result); 