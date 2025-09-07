function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let result = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        if(i % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

function secondPower(arr) {
    // Return an array containing all elements at indices that are powers of 2
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0 && (i & (i - 1)) === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

function nthPower(arr, n) {
    let result = [];
    let power = 1;

    while (power < arr.length) {
        result.push(arr[power]);
        power *= n;
    }

    return result;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
