export function findUniq(arr: number[]) {
    const [a, b, c] = arr;

    if (a === b) {
        return arr.find((v) => v !== a);
    }

    return a === c ? b : a;
}

export function findUniqAlternative(arr: number[]) {
    const duplicate = arr[0] === arr[1] ? arr[0] : arr[2];

    return arr.find((a) => a !== duplicate);
}
