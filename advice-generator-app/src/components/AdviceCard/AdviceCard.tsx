import borderSVGDesktop from '../../assets/images/pattern-divider-desktop.svg'
import borderSVGMobile from '../../assets/images/pattern-divider-mobile.svg'
import diceIcon from '../../assets/images/icon-dice.svg'
import { device } from '../../styles/utils/device'
import AdviceCardStyled from '../../styles/AdviceCard/AdviceCard.styled'

interface AdviceCardProps {
  adviceNumber: number
  adviceText: string
  adviceCardType: 'front' | 'back'
  changeAdvice: () => void
}

const AdviceCard = ({
  adviceNumber,
  adviceText,
  adviceCardType,
  changeAdvice,
}: AdviceCardProps) => {
  return (
    <AdviceCardStyled data-testid={adviceCardType}>
      <h2>Advice #{adviceNumber}</h2>
      <h1>{`"${adviceText}"`}</h1>

      <picture>
        <source srcSet={borderSVGDesktop} media={device.tablet} />
        <img src={borderSVGMobile} alt="SVG Border" />
      </picture>

      <button data-testid="newAdviceButton" onClick={changeAdvice}>
        <span>
          <img src={diceIcon} alt="Dice Icon" />
        </span>
      </button>
    </AdviceCardStyled>
  )
}

export default AdviceCard
