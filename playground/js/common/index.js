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
