export const two = (cb?: Function) => (cb ? cb(2) : 2);
export const three = (cb?: Function) => (cb ? cb(3) : 3);
export const plus = (number: number) => (x: number) => x + number;
