export function countPositivesSumNegatives(input: number[]) {
    if (input?.length) {
        const result = input.reduce<[number, number]>((a, c) => {
            if (c > 0) {
                a[0] += 1;
            } else if (c < 0) {
                a[1] += c;
            }

            return a;
        }, [0, 0]);

        return result;
    }

    return [];
}
