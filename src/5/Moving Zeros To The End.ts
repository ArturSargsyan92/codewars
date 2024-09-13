export function moveZeros(arr: number[]): number[] {
    const filtered = arr.filter((v) => v);

    return filtered.concat(new Array(arr.length - filtered.length).fill(0));
}
