
export const fizzBuzz = (length) => {
  if (!length) length = 100;
  const fizzBuzzedNumbers = [];

  for (let i = 0; i < limit; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      fizzBuzzedNumbers.push("FizzBuzz");
    } else if (i % 3 === 0) {
      fizzBuzzedNumbers.push("Fizz");
    } else if (i % 5 === 0) {
      fizzBuzzedNumbers.push("Buzz");
    } else {
      fizzBuzzedNumbers.push(i);
    }

  }
  return fizzBuzzedNumbers;
};


const getFizzBuzzOutput = (n, f, b) => {
  //(n,f,b) are all numbers
  let output = '';
  if (n % f === 0) output += 'Fizz';
  if (n % b === 0) output += 'Buzz';
  if (output === '') output += n;
  return output
}

export const fizzleBuzz = (length, fizzNumber, buzzNumber) => {
  if (!length) length = 100;
  if (!fizzNumber) fizzNumber = 3;
  if (!buzzNumber) buzzNumber = 5;
  const fizzBuzzedNumbers = [];
  
  for (let i = 1; i <= length; i++)  fizzBuzzedNumbers.push(getFizzBuzzOutput(i, fizzNumber, buzzNumber));
  return fizzBuzzedNumbers;
};

const getOutput = (index, numbers, words) => {
  //(number, [numbers], [words])
  let output = '';
  for (let i = 0; i <= numbers.length; i++) if (index % numbers[i] === 0) output += words[i];
  if (output === '') output += index;
  return output
}

export const fizzleBuzzle = (length, numbers, words) => {
  if (!length) length = 100;
  if (!numbers) numbers = [3, 5];
  if (!words) words = ['Fizz', 'Buzz'];
  const fizzBuzzedNumbers = [];
  for (let i = 1; i <= length; i++) fizzBuzzedNumbers.push(getOutput(i, numbers, words));
  return fizzBuzzedNumbers;
}

export default {fizzBuzz, fizzleBuzz, fizzleBuzzle};
