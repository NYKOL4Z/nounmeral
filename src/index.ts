// Nounmeral is a combination of the words "noun" and "numeral".

/**
 * Generates a string representation of a numeral and a noun.
 *
 * @param {number} numeral - A number representing the quantity.
 * @param {string} singularNoun - The singular form of the noun.
 * @param {string} [pluralNoun] - The plural form of the noun. If not provided, the function will automatically append "s" to the singular form to create the plural form.
 * @return {string} The string representation of the numeral and noun.
 */
export function nounmeral(
  numeral: number,
  singularNoun: string,
  pluralNoun?: string,
): string {
  let noun = singularNoun;
  if (numeral !== 1)
    noun = pluralNoun !== undefined ? pluralNoun : `${singularNoun}s`;
  return `${numeral} ${noun}`;
}

export default nounmeral;
module.exports = nounmeral;
