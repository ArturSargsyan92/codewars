const isUpperCase = (str: string) => str.toUpperCase() === str;
const isLowerCase = (str: string) => str.toLowerCase() === str;
const isLetter = (str: string) => /^[a-zA-Z]+$/.test(str);

export function sameCase(a: string, b: string) {
    const c = a + b;

    if (isLetter(c)) {
        return -1;
    }

    return isUpperCase(c) || isLowerCase(c) ? 1 : 0;
}
