export function reverseWords(str: string) {
    return str.split(" ").map((w) => w.split("").reverse().join("")).join(" ");
}
