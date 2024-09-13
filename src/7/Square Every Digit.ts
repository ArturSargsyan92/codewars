export function squareDigits(num: number) {
    return Number(String(num).split("").map((v) => Number(v) * Number(v)).join(""));
}
