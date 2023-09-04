# Nounmeral

Seamlessly combines numbers and nouns in singular or plural forms for cohesive text output.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Background

Nounmeral is a very simple script that allows you to go from this:

```JavaScript
console.log(`I have ${num} cat${num != 1 ? 's' : ''}.`);
```

to this:

```JavaScript
console.log(`I have ${nounmeral(num, 'cat')}.`);
```

which is more comprehensive and easier to write.

> The name Nounmeral is a combination of the words "noun" and "numeral".

## Install

Simply run this command in your terminal:

```bash
npm i nounmeral
```

## Usage

Once you've installed the package, you can import it into your JavaScript or TypeScript files as follows:

```JavaScript
const yourPackage = require('nounmeral');
// OR
import yourPackage from 'nounmeral';
```

Now you can use `nounmeral` with your strings:

```JavaScript
for (let num = 1; num <= 3; num++) {
  console.log(`I saw ${nounmeral(num, 'cat')}.`);
}
// Output:
// I saw 1 cat.
// I saw 2 cats.
// I saw 3 cats.
```

If the noun (or language) doesn't simply append an "s" to form the plural from the singular, specify the plural word:

```JavaScript
for (let num = 1; num <= 3; num++) {
  console.log(`I saw ${nounmeral(num, 'mouse', 'mice')}.`);
}
// Output:
// I saw 1 mouse.
// I saw 2 mice.
// I saw 3 mice.
```

Some words append something different than an "s" to the singular form of the noun to get the plural form. For those you can add a "/" and the text to be appended, to get the plural form:

```JavaScript
for (let num = 1; num <= 3; num++) {
  console.log(`I saw ${nounmeral(num, 'fox/es')}.`);
}
// Output:
// I saw 1 fox.
// I saw 2 foxes.
// I saw 3 foxes.
```

### Function Signature

The nounmeral function takes the following parameters:

- `numeral` (required): A number representing the quantity.
- `singularNoun` (required): The singular form of the noun. If it contains a "/", the text up to the slash will be used for the singular form, and the entire string (without the slash), will be used for the plural form.
- `pluralNoun` (optional): The plural form of the noun. If not provided, the function will automatically append "s" to the singular form to create the plural form.

## License

MIT © Nicolas Britos
