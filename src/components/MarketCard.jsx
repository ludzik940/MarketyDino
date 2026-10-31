
function MarketCard({ market }) {
  const phones = market.phones?.filter(Boolean) ?? [];

  const hasCoordinates =
    market.latitude != null &&
    market.longitude != null;

  return (
    <div className="market-card">
      <div className="market-name">
        {market.name}
      </div>

      {market.address && (
        <div className="market-address">
          {market.address}
        </div>
      )}

      {phones.length > 0 ? (
        phones.map((phone, index) => (
          <div className="phone" key={`${phone}-${index}`}>
            <a href={`tel:${phone.replace(/[\s-]/g, "")}`}>
              {phone}
            </a>
          </div>
        ))
      ) : (
        <>
          {market.managerPhone && (
            <div className="phone">
              Kierownik:{" "}
              <a href={`tel:${market.managerPhone}`}>
                {market.managerPhone}
              </a>
            </div>
          )}

          {market.deputyPhone && (
            <div className="phone">
              Zastępca:{" "}
              <a href={`tel:${market.deputyPhone}`}>
                {market.deputyPhone}
              </a>
            </div>
          )}
        </>
      )}

      {hasCoordinates && (
        <>
          <div className="coordinates">
            <span>Współrzędne:</span>
            <span>
              {market.latitude}, {market.longitude}
            </span>
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
