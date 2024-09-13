export function spinWords(str: string): string {
    return str.split(" ").map((w) => (w.length >= 5 ? w.split("").reverse().join("") : w)).join(" ");
}
