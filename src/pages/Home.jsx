import markets from "../data/markets.json"
import MarketList from "../components/MarketList"

function Home() {
  return (
    <>
      <MarketList markets={markets} />
    </>
  )
}

export default Home