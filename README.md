### Fizz Buzz

Description: Exploring different implementations of the "FizzBuzz" exercise.


Technologies Used: 
[next.js](https://nextjs.org/docs/)
[React.js](https://reactjs.org/)
[styled-components](https://www.styled-components.com/)

## What is FizzBuzz?
``FizzBuzz`` is a popular coding exercise that usually sounds something like this: 

>>Write a function that counts up to a number, printing "Fizz" for numbers evenly divisible by 3, "Buzz" for numbers evenly divisible by 5, and "Fizz Buzz" and "FizzBuzz" for numbers that are evenly divisible by both 3 and 5. For the other numbers, print the number.>>

## About this UI:

  This version of FizzBuzz displays a responsive grid of numbers, instead of printing them to the console.

  ``<Grid/>`` is a functional component using React, which renders a map of  ``<Number/>`` components, one for each item in the array returned by the ``fizzBuzz()``, ``fizzleBuzz()`` or ``fizzleBuzzle()`` functions.


  ```
  const Grid = props => {
    return (
      <StyledGrid>
        {fizzleBuzzle().map((output, i) => 
          (<Number key={i} number={output}/>)
        )}
      </StyledGrid>
    )
  }
  export default Grid;
  ```

## How to get started with this repo:

If you're so kind as to clone this repo locally, you can get it up and running by doing the following things in the projects's root directory:

* ``$ npm i``
* ``$ npm run dev``


## How to use the FizzBuzz, FizzleBuzz, and FizzleBuzzle Functions

There are 3 different functions provided in this repo that can accomplish the fizzBuzz exercise: fizzBuzz, fizzleBuzz, and fizzleBuzzle.

To implement one of the functions, call it in the ``<Grid/>`` component and map through what it returns, providing its output as a prop to the ``<Number/>`` component.

#### FizzBuzz
This is a very #basic fizzBuzz implementation, which takes a single input, a number to count up to. 

For example if you wanted to count up to 20, it would look like:

```
fizzBuzz(20);
```

or you could call:
```
fizzBuzz();
```

to count up to 100 by default.


#### FizzleBuzz

This implementation can accomodate different numbers to print "Fizz",  "Buzz", and "FizzBuzz" on. For example, 
```
fizzleBuzz(15, 5, 10);
```
will map 15 <Number/> components, printing "Fizz" on every number divisible by 5, "Buzz" for every number divisible by 10 (there aren't any in this scenario), and "FizzBuzz" for any number divisible evenly by both 5 and 10.



#### FizzleBuzzle

This implementation is the most versatile of the 3, because it can accept a number to count up to, an array of numbers to print special words on, and an array of special words to print on those numbers. The only constraint is that those two arrays must have the same number of elements in them.

For example: 
```
fizzleBuzzle(75, [3, 11], ["Wow", "Cool"]);

```

Will map 75 ```<Number/>``` elements, for each number divisible by 3, the number will be replaced with "Wow", for each number divisible by 11 the number will be replaced with "Cool",  and for any number divisible both by 11 and 3 will be replaced with "WowCool".