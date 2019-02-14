import styled from 'styled-components';


const StyledNumber = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  text-align: center;
  width: 5rem;
  height: 5rem;
  font-size: 1rem;
  color:  ${props => props.theme.blue};
  background: ${props => props.theme.offWhite};
`;

const Number = (props) => (
  <StyledNumber>
    {props.number}
  </StyledNumber>
);

export default Number;