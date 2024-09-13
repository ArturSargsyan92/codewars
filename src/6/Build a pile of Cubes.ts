// 1^3 + 2^3 + 3^3 + ... + N^3 = (N*(N + 1) / 2)^2

export function findNb(m: number) {
    const x = Math.sqrt(m) * 2; // N * (N + 1) = 2*SQRT(M);

    const n = Math.floor(Math.sqrt(x));

    return n * (n + 1) === x ? n : -1;
}
