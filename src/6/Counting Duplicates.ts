export function duplicateCount(text: string) {
    const counts: Record<string, number> = {};

    text.toLowerCase().split("").forEach((c) => {
        counts[c] = (counts[c] || 0) + 1;
    });

    return Object.keys(counts).filter((k) => counts[k] !== 1).length;
}
