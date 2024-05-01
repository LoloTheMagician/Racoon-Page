/**
 *
 * ?: Podríamos convertirlo a un prototipo de string.
 * 
 * @param {string} text
 * @return {*}  {string}
 */
const toCapitalize = (text: string): string =>
    text.at(0).toUpperCase() + text.slice(1, text.length);

export {
    toCapitalize
}