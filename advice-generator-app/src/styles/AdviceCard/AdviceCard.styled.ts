import styled from 'styled-components'
import colorStyles from '../utils/colors'
const AdviceCardStyled = styled.div`
  background-color: ${colorStyles.cardBackground};
  width: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 4em 2em;
  text-align: center;
  position: relative;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  position: absolute;

  &:nth-child(2) {
    transform: rotateY(180deg);
  }

  h2 {
    color: ${colorStyles.adviceIDText};
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  h1 {
    font-size: 2.4rem;
  }

  button {
    background-color: ${colorStyles.nextAdviceButtonBackground};
    width: 54px;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
  }
`

export default AdviceCardStyled
