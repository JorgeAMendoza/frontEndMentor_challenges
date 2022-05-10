import { render, screen } from '@testing-library/react'
import AdviceCard from './AdviceCard'

describe('Advice card renders the correct props', () => {
  const testData = {
    adviceNumber: Math.floor(Math.random() * 100 + 1),
    adviceText: 'Defeating a sandwhich, only makes it tastier',
  }

  test('card renders correct advice number and text', () => {
    render(
      <AdviceCard
        adviceNumber={testData.adviceNumber}
        adviceText={testData.adviceText}
        adviceCardType="front"
        changeAdvice={() => console.log('test')}
      />
    )
    screen.getByText(`Advice #${testData.adviceNumber}`)
    screen.getByText(`"${testData.adviceText}"`)
  })

  test('card has test id of its type', () => {
    render(
      <AdviceCard
        adviceNumber={testData.adviceNumber}
        adviceText={testData.adviceText}
        adviceCardType="front"
        changeAdvice={() => console.log('test')}
      />
    )

    screen.getByTestId('front')
  })
})
