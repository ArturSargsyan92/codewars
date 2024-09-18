export function quadrant(x: number, y: number): 1 | 2 | 3 | 4 {
    if (x > 0) {
        if (y > 0) {
            return 1;
        }

        return 4;
    }
    if (y > 0) {
        return 2;
    }

    return 3;
}
