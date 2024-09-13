export function countBits(num: number): number {
    let count = 0;
    let v = num;

    while (v) {
        if (v % 2) {
            count += 1;
        }
        // eslint-disable-next-line no-bitwise
        v = Math.floor(v / 2);
    }

    return count;
}

export function countBitsAlternate(n: number): number {
    return n.toString(2).split("").reduce<number>((a, c) => (c === "1" ? a + 1 : a), 0);
}
