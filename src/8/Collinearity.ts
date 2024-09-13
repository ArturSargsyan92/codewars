export function collinearity(x1: number, y1: number, x2: number, y2: number) {
    // the slope of two vectors should be equal
    // slope = x / y
    // x1 / y1 === x2 / y2
    // to avoid zero division change the formula to x1 * y2 === x2 * y1
    return x1 * y2 === x2 * y1;
}
