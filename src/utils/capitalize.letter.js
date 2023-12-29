export function CapitalizeLetter(str) {
    return str.split(" ").map(letter => letter[0].toUpperCase() + letter.slice(1)).join(' ');
}