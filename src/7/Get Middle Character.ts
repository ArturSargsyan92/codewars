export function getMiddle(s: string): string {
    const start = Math.floor((s.length - 1) / 2);

    return s.slice(start, s.length - start);
}
