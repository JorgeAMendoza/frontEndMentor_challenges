import borderSVGDesktop from '../../assets/images/pattern-divider-desktop.svg'
import borderSVGMobile from '../../assets/images/pattern-divider-mobile.svg'
import diceIcon from '../../assets/images/icon-dice.svg'
import { device } from '../../utils/device'

const AdviceCard = () => {
  return (
    <div>
      <h2>Advice #117</h2>
      <h1>
        “It is easy to sit up and take notice, whats difficult is getting up and
        taking action.”
      </h1>

      <picture>
        <source srcSet={borderSVGDesktop} media={device.tablet} />
        <img src={borderSVGMobile} alt="SVG Border" />
      </picture>

      <button>
        <span>
          <img src={diceIcon} alt="Dice Icon" />
        </span>
      </button>
    </div>
  )
}

export default AdviceCard
