import AdviceCard from './components/AdviceCard/AdviceCard'
import getAdvice from './api/get-advice'
import { useEffect, useState } from 'react'
import adviceCardData from './types/advice-card-data'
import GlobalStyles from './styles/Global.styled'
import Container from './styles/utils/Container.styled'
import CardHolder from './styles/CardHolder/CardHolder.styled'

function App() {
  const [frontCard, setFrontCard] = useState<adviceCardData | null>()
  const [backCard, setBackCard] = useState<adviceCardData | null>()
  const [flipToBack, setFlipToBack] = useState(false)

  // useEffect(() => {
  //   setInitialAdvice()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const getAdviceData = async () => {
    const adviceData = await getAdvice()
    return adviceData
  }

  const setInitialAdvice = async () => {
    const cardData = await getAdviceData()
    setFrontCard(cardData)
  }

  const setCardData = async () => {
    const cardData = await getAdviceData()
    if (!frontCard) {
      setFrontCard(cardData)
      setFlipToBack(false)
    } else {
      setBackCard(cardData)
      setFlipToBack(true)
    }
  }

  const removePastData = () => {
    // this function is called after the end of the transition event.
    if (flipToBack) setFrontCard(null)
    else setBackCard(null)
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <CardHolder onTransitionEnd={removePastData}>
          <AdviceCard
            adviceNumber={frontCard ? frontCard.id : -1}
            adviceText={frontCard ? frontCard.advice : ''}
            adviceCardType="front"
            changeAdvice={() => setCardData()}
          />
          <AdviceCard
            adviceNumber={backCard ? backCard.id : -1}
            adviceText={backCard ? backCard.advice : ''}
            adviceCardType="back"
            changeAdvice={() => setCardData()}
          />
        </CardHolder>
      </Container>
    </>
  )
}

export default App
