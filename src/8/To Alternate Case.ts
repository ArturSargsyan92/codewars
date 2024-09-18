export function toAlternateCase(s: string): string {
    return s.split("").map((v) => (v.toUpperCase() === v ? v.toLowerCase() : v.toUpperCase())).join("");
}
