// TODO rename when found
export function sumOfRange(a: number, b: number): number {
    const [min, max] = a > b ? [b, a] : [a, b];

    return (max * (max + 1) - min * (min - 1)) / 2;
}
