import kuler from 'kuler';
import randomColor from 'randomcolor';

const color = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

const filler = '#';
const emptySpace = ' ';
let length = 31;
let height = 9;

if (process.argv[4]) {
  length = process.argv[4];
}

if (process.argv[5]) {
  height = process.argv[5];
}

if (process.argv[2] === 'ask') {
  console.log('What color? What luminosity?');
} else {
  for (let i = 0; i < (height - 3) / 2; i++) {
    console.log(kuler(filler.repeat(length), color));
  }
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
  for (let i = 0; i < (height - 3) / 2; i++) {
    console.log(kuler(filler.repeat(length), color));
  }
}
