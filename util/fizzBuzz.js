export const fizzBuzzClassic = (limit) => {
  const fizzBuzzedNumbers = [];

  for (let i = 0; i < limit; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      fizzBuzzedNumbers.push("FB");
    } else if (i % 3 === 0) {
      fizzBuzzedNumbers.push("F");
    } else if (i % 5 === 0) {
      fizzBuzzedNumbers.push("B");
    } else {
      fizzBuzzedNumbers.push(i);
    }

  }
  return fizzBuzzedNumbers;
};


const getOutput = (n) => {
  let output = '';
  if (n % 3 === 0) output += 'F';
  if (n % 5 === 0) output += 'B';
  if (output === '') output += n;
  return output
}

export const fizzleBuzz = (limit) => {
  const fizzBuzzedNumbers = [];
  
  for (let i = 1; i <= limit; i++)  fizzBuzzedNumbers.push(getOutput(i));
  return fizzBuzzedNumbers;
};






export default {fizzleBuzz};
