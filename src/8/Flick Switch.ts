export function flickSwitch(arr: string[]) {
    let current = true;

    return arr.map((v) => {
        current = v === "flick" ? !current : current;

        return current;
    });
}
