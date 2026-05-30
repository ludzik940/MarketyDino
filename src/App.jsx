import { useState } from "react";
import markets from "./data/markety-react.json";

function App() {
  const [search, setSearch] = useState("");

  const filteredMarkets = markets.filter((market) =>
    market.name.toLowerCase().includes(search.toLowerCase()) ||
    market.address.toLowerCase().includes(search.toLowerCase()) ||
    market.managerPhone.includes(search) ||
    market.deputyPhone.includes(search)
  );

  return (
    <div className="container">
      <h1 className="title">
          🦖 Markety Dino
      </h1>

      <input
        className="search-input"
        type="text"
        placeholder="Szukaj marketu..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p className="stats">
        Wyników: {filteredMarkets.length}
      </p>

      <div className="market-list">
        {filteredMarkets.map((market) => (
          <div
            key={market.id}
            className="market-card"
          >
            <div className="market-name">
              {market.name}
            </div>

            <div className="market-address">
              {market.address}
            </div>

            <div className="phone">
              Kierownik:
              {" "}
              <a href={`tel:${market.managerPhone}`}>
                  {market.managerPhone}
              </a>
          </div>

          <div className="phone">
              Zastępca:
              {" "}
              <a href={`tel:${market.deputyPhone}`}>
                  {market.deputyPhone}
              </a>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;