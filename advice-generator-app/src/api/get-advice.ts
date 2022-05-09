import axios from 'axios'

interface adviceDataReturnType {
  id: number
  advice: string
}

let lastAdviceID = -1

const getAdvice = async () => {
  let repeatedAdviceID = true
  const adviceReturnData: adviceDataReturnType = { id: -1, advice: '' }

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
