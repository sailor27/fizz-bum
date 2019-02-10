import styled from 'styled-components';


const StyledNumber = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin: 1rem;
  text-align: center;
  width: 3rem;
  color:  ${props => props.theme.blue};
  background: ${props => props.theme.offWhite};
`;

const Number = (props) => (
  <StyledNumber>
    {props.number}
  </StyledNumber>
);

export default Number;