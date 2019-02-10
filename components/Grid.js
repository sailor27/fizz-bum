import React from 'react';
import Number from '../components/Number'
import { fizzleBuzz } from '../util/fizzBuzz';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;


const Grid = props => {
  return (
    <StyledGrid>
      {fizzleBuzz(50).map((output, i) => (<Number key={i} number={output}/>))}
    </StyledGrid>
  )
}
export default Grid;
