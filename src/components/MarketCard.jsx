
function MarketCard({ market }) {
  const phones = market.phones?.filter(Boolean) ?? [];

  const hasCoordinates =
    market.latitude != null &&
    market.longitude != null;

  return (
    <div className="market-card">
      <h3 className="market-name">{market.name}</h3>

      {market.address && (
        <p className="market-address">{market.address}</p>
      )}

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
              Kierownik:{" "}
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

      {hasCoordinates && (
        <>
          <div className="coordinates">
            <strong>Współrzędne:</strong>
            <p>
              {market.latitude}, {market.longitude}
            </p>
          </div>

          <a
            className="maps-link"
            href={`https://www.google.com/maps?q=${market.latitude},${market.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Otwórz w Google Maps
          </a>
        </>
      )}
    </div>
  );
}

export default MarketCard;
