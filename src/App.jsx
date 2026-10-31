// import { useState } from "react";
// import markets from "./data/markety-react.json";

// function App() {
//   const [search, setSearch] = useState("");

//   const filteredMarkets = markets.filter((market) => {
//   const query = search.toLowerCase();

//   return (
//     (market.name ?? "").toLowerCase().includes(query) ||
//     (market.address ?? "").toLowerCase().includes(query) ||
//     (market.managerPhone ?? "").includes(search) ||
//     (market.deputyPhone ?? "").includes(search) ||
//     (market.phones ?? []).some((phone) =>
//       phone.toLowerCase().includes(query)
//     )
//   );
// });

//   return (
//     <div className="container">
//       <h1 className="title">
//           🦖 Markety Dino
//       </h1>

//       <input
//         className="search-input"
//         type="text"
//         placeholder="Szukaj marketu..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <p className="stats">
//         Wyników: {filteredMarkets.length}
//       </p>

//       <div className="market-list">
//         {filteredMarkets.map((market) => (
//           <div
//             key={market.id}
//             className="market-card"
//           >
//             <div className="market-name">
//               {market.name}
//             </div>

//             <div className="market-address">
//               {market.address}
//             </div>

//             <div className="phone">
//               Kierownik:
//               {" "}
//               <a href={`tel:${market.managerPhone}`}>
//                   {market.managerPhone}
//               </a>
//           </div>

//           <div className="phone">
//               Zastępca:
//               {" "}
//               <a href={`tel:${market.deputyPhone}`}>
//                   {market.deputyPhone}
//               </a>
//           </div>
//           <div className="coordinates">
//             <span>Współrzędne:</span>
//             <span>
//               {market.latitude}, {market.longitude}
//             </span>
//           </div>
//           <a
//             className="maps-link"
//             href={`https://www.google.com/maps?q=${market.latitude},${market.longitude}`}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             📍 Otwórz w Google Maps
//           </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;



import { useState } from "react";
import markets from "./data/markety-react.json";
import MarketCard from "./components/MarketCard";

function App() {
  const [search, setSearch] = useState("");

  const filteredMarkets = markets.filter((market) => {
    const query = search.toLowerCase();

    return (
      (market.name ?? "").toLowerCase().includes(query) ||
      (market.address ?? "").toLowerCase().includes(query) ||
      (market.managerPhone ?? "").includes(search) ||
      (market.deputyPhone ?? "").includes(search) ||
      (market.phones ?? []).some((phone) =>
        phone.toLowerCase().includes(query)
      )
    );
  });

  return (
    <div className="container">
      <h1 className="title">🦖 Markety Dino</h1>

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
          <MarketCard key={market.id} market={market} />
        ))}
      </div>
    </div>
  );
}

export default App;
