import MarketCard from "./MarketCard"

function MarketList({ markets }) {
  return (
    <>
      {markets.map((market) => (
        <MarketCard
          key={market.id}
          market={market}
        />
      ))}
    </>
  )
}

export default MarketList