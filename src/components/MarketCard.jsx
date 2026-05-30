function MarketCard({ market }) {
  return (
    <div className="card">
      <h3>{market.name}</h3>

      <p>{market.address}</p>

      <p>{market.phone}</p>
    </div>
  )
}

export default MarketCard