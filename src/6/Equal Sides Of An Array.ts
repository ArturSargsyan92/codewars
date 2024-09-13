export function findEvenIndex(arr: number[]): number {
    let left = 0;
    let right = arr.reduce((a, c) => a + c);

    return arr.findIndex((v, index) => {
        right -= v;
        left += arr[index - 1] || 0;

        return left === right;
    });
}
