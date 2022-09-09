import kuler from 'kuler';
import randomColor from 'randomcolor';

const color = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

const filler = '#';
const emptySpace = ' ';
let length = 31;
if (process.argv[4] > 31) length = process.argv[4];

console.log(kuler(filler.repeat(length), color));
console.log(kuler(filler.repeat(length), color));
console.log(kuler(filler.repeat(length), color));
console.log(
  kuler(
    filler.repeat((length - 21) / 2) +
      emptySpace.repeat(21) +
      filler.repeat((length - 21) / 2),
    color,
  ),
);
console.log(
  kuler(
    filler.repeat((length - 21) / 2) +
      emptySpace.repeat(7) +
      color +
      emptySpace.repeat(7) +
      filler.repeat((length - 21) / 2),
    color,
  ),
);
console.log(
  kuler(
    filler.repeat((length - 21) / 2) +
      emptySpace.repeat(21) +
      filler.repeat((length - 21) / 2),
    color,
  ),
);
console.log(kuler(filler.repeat(length), color));
console.log(kuler(filler.repeat(length), color));
console.log(kuler(filler.repeat(length), color));
