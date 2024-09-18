/* eslint-disable no-bitwise */
// export function toBinary(n: number): number {
//     return parseInt(n.toString(2), 10);
// }

export function toBinary(n: number): number {
    let result = "";

    while (n) {
        result = ((n % 2) ? "1" : "0") + result;
        n >>= 1;
    }

    return Number(result);
}

console.log(toBinary(8));
