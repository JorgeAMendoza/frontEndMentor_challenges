import borderSVGDesktop from '../../assets/images/pattern-divider-desktop.svg'
import borderSVGMobile from '../../assets/images/pattern-divider-mobile.svg'
import diceIcon from '../../assets/images/icon-dice.svg'
import { device } from '../../utils/device'

interface AdviceCardProps {
  adviceNumber: number
  adviceText: string
  adviceCardType: 'front' | 'back'
}

const AdviceCard = ({
  adviceNumber,
  adviceText,
  adviceCardType,
}: AdviceCardProps) => {
  return (
    <div data-testid={adviceCardType}>
      <h2>Advice #{adviceNumber}</h2>
      <h1>{`"${adviceText}"`}</h1>

      <picture>
        <source srcSet={borderSVGDesktop} media={device.tablet} />
        <img src={borderSVGMobile} alt="SVG Border" />
      </picture>

      <button data-testid="newAdviceButton">
        <span>
          <img src={diceIcon} alt="Dice Icon" />
        </span>
      </button>
    </div>
  )
}

export default AdviceCard
