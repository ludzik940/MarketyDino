// function MarketCard({ market }) {
//   return (
//     <div className="card">
//       <h3>{market.name}</h3>

//       <p>{market.address}</p>

//       <p>{market.phone}</p>
//     </div>
//   )
// }

// export default 
function MarketCard({ market }) {
  const phones = market.phones?.filter(Boolean) ?? [];

  return (
    <div className="card">
      <h3>{market.name}</h3>

      {market.address && <p>{market.address}</p>}

      {phones.length > 0 ? (
        <ul>
          {phones.map((phone) => (
            <li key={phone}>
              <a href={`tel:${phone.replace(/[\s-]/g, "")}`}>
                {phone}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <>
          {market.managerPhone && (
            <p>
              Manager:{" "}
              <a href={`tel:${market.managerPhone.replace(/[\s-]/g, "")}`}>
                {market.managerPhone}
              </a>
            </p>
          )}

          {market.deputyPhone && (
            <p>
              Zastępca:{" "}
              <a href={`tel:${market.deputyPhone.replace(/[\s-]/g, "")}`}>
                {market.deputyPhone}
              </a>
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default MarketCard;



