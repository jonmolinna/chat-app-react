export function firstLetter(str) {
    const array = str.split(' ');
    if (array.length >= 3) {
        return array.splice(0, 2).map(letter => letter[0].toUpperCase()).join("");
    }
    return array.map(letter => letter[0].toUpperCase()).join("");
}