import styled from 'styled-components'

interface CardHolderStyleProps {
  flipCard: boolean
}

const CardHolder = styled.main<CardHolderStyleProps>`
  background-color: transparent;
  perspective: 1000px;
  min-height: 35rem;
  > div {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    transform: ${({ flipCard }) => (flipCard ? 'rotateY(180deg)' : '')};
  }
`

export default CardHolder
