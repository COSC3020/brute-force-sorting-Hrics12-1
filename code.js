function permutationSort(arr) {
    let count = 0;
    const permutations = permute(arr);
    for (let i = 0; i < permutations.length; i++) {
        count++;
        if (isSorted(permutations[i])) {
            arr.splice(0, arr.length, ...permutations[i]);
            return count;
        }
    }
    return -1;
}

function permute(arr) {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : [arr];
    return arr.reduce((acc, item, i) =>
        acc.concat(permute([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])), []);
}

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) return false;
    }
    return true;
}
