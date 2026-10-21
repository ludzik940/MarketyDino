// function MarketCard({ market }) {
//   return (
//     <div className="card">
//       <h3>{market.name}</h3>

//       <p>{market.address}</p>

//       <p>{market.phone}</p>
//     </div>
//   )
// }

// export default MarketCard


function MarketCard({ market }) {
  return (
    <div className="card">
      <h3>{market.name}</h3>

      <p>{market.address}</p>

      {market.phones?.length > 0 ? (
        <ul>
          {market.phones.map((phone) => (
            <li key={phone}>
              <a href={`tel:${phone}`}>{phone}</a>
            </li>
          ))}
        </ul>
      ) : (
        <>
          {market.managerPhone && (
            <p>
              Manager:{" "}
              <a href={`tel:${market.managerPhone}`}>
                {market.managerPhone}
              </a>
            </p>
          )}

          {market.deputyPhone && (
            <p>
              Zastępca:{" "}
              <a href={`tel:${market.deputyPhone}`}>
                {market.deputyPhone}
              </a>
            </p>
          )}
        </>
      )}
    </div>
  )
}

export default MarketCard
