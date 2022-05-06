import AdviceCard from './components/AdviceCard/AdviceCard'

function App() {
  return (
    <div>
      {/* this one is the entire card, or the container for ir, it should not have any styles on it, it should really just be used to flip the card over */}
      <AdviceCard />
      <AdviceCard />
    </div>
  )
}

export default App
