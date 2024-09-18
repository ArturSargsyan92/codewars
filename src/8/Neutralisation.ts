export function neutralise(s1: string, s2: string) {
    return s1.split("").map((v, i) => (v === s2[i] ? v : "0")).join("");
}

console.log(neutralise("+-++--++-", "++--+-+--"));
