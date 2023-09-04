const nounmeral = require('nounmeral');

// Most plural nouns simply add an "s" to its singular form, so that's nounmeral default behavior.
for (let num = 1; num <= 3; num++) {
  console.log(`I saw ${nounmeral(num, 'cat')}.`);
}
// I saw 1 cat.
// I saw 2 cats.
// I saw 3 cats.

// However, if the plural is not formed by simply adding an "s" to the singular form, you can specify it.
for (let num = 1; num <= 3; num++) {
  console.log(`I saw ${nounmeral(num, 'mouse', 'mice')}.`);
}
// I saw 1 mouse.
// I saw 2 mice.
// I saw 3 mice.

// Some words append something different than an "s" to the singular form of the noun to get the plural form. For those you can add a "/" and the text to be appended, to get the plural form:
for (let num = 1; num <= 3; num++) {
  console.log(`I saw ${nounmeral(num, 'fox/es')}.`);
}
// I saw 1 fox.
// I saw 2 foxes.
// I saw 3 foxes.
