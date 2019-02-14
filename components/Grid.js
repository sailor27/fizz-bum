import React from 'react';
import Number from '../components/Number'
import {fizzBuzz, fizzleBuzz, fizzleBuzzle} from '../util/fizzBuzz';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;


const Grid = props => {
  return (
    <StyledGrid>
      {/*fizzBuzz(100).map((output, i) => (<Number key={i} number={output}/>)*/}
      {fizzleBuzz(15, 5, 10).map((output, i) => (<Number key={i} number={output}/>))}
      {/* {fizzleBuzzle(20, [3, 5, 11], ['M', 'Q', 'O']).map((output, i) => (<Number key={i} number={output}/>))} */}
      {/* {fizzleBuzzle(75, [3, 11], ["Wow", "Cool"]).map((output, i) => 
        (<Number key={i} number={output}/>)
      )} */}
    </StyledGrid>
  )
}
export default Grid;
