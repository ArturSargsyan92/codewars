export function findOdd(src: number[]) {
    const counts: Record<string, number> = {};

    src.forEach((s) => {
        counts[s] = (counts[s] || 0) + 1;
    });

    const keys = Object.keys(counts);

    return keys.find((k) => (counts[k] || 0) % 2);
}

export function findOddAlternative(src: number[]): number {
    // eslint-disable-next-line no-bitwise
    return src.reduce((a, c) => a ^ c);
}
