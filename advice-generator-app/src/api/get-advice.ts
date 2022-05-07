import axios from 'axios'

let lastAdviceID = -1

const getAdvice = async () => {
  let adviceText = ''
  let repeatedAdviceID = true

  while (repeatedAdviceID) {
    const adviceData = await axios.get('https://api.adviceslip.com/advice')
    if (adviceData.data.slip.id === lastAdviceID) continue
    else {
      adviceText = adviceData.data.slip.advice
      lastAdviceID = adviceData.data.slip.id
      repeatedAdviceID = false
    }
  }
  return adviceText
}

export default getAdvice
