import axios from 'axios'
import adviceCardData from '../types/advice-card-data'

let lastAdviceID = -1

const getAdvice = async (): Promise<adviceCardData> => {
  let repeatedAdviceID = true
  const adviceReturnData: adviceCardData = { id: -1, advice: '' }

  while (repeatedAdviceID) {
    const adviceData = await axios.get('https://api.adviceslip.com/advice')
    if (adviceData.data.slip.id === lastAdviceID) continue
    else {
      adviceReturnData.id = adviceData.data.slip.id
      adviceReturnData.advice = adviceData.data.slip.advice
      lastAdviceID = adviceData.data.slip.id
      repeatedAdviceID = false
    }
  }
  return adviceReturnData
}

export default getAdvice
