export function sumArray(arr: number[] | null): number {
    if (!arr || arr.length < 3) {
        return 0;
    }

    const info = arr.reduce<{
        min: number;
        max: number;
        sum: number;
    }>((a, c) => {
        a.sum += c;
        if (c > a.max) {
            a.max = c;
        }
        if (c < a.min) {
            a.min = c;
        }

        return a;
    }, { min: Infinity, max: -Infinity, sum: 0 });

    return info.sum - info.max - info.min;
}

export function sumArray2(arr: number[] | null): number {
    return (arr || []).sort((a, b) => a - b).slice(1, -1).reduce((a, c) => a + c, 0);
}
