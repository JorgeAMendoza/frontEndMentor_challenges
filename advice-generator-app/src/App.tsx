import AdviceCard from './components/AdviceCard/AdviceCard'
import getAdvice from './api/get-advice'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    getAdviceText()
  }, [])

  const getAdviceText = async () => {
    const adviceText = await getAdvice()
    return adviceText
  }

  return (
    <div>
      {/* this one is the entire card, or the container for ir, it should not have any styles on it, it should really just be used to flip the card over */}
      <AdviceCard
        adviceNumber={1}
        adviceText="Defeating a sandwhich, only makes it taster"
        adviceCardType="front"
      />
      <AdviceCard
        adviceNumber={90}
        adviceText="Would you rather xD or would you rather squee"
        adviceCardType="back"
      />
    </div>
  )
}

export default App
