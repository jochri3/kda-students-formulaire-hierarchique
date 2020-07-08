import React, { useState } from "react";
import ListeDesClients from "./ListeDesClients";

import "./styles.css";

export default function App() {
  const [nomsClient, definirNomsClient] = useState("");
  const [ageClient, definirAgeClient] = useState(0);
  const [typeSucre, setTypeSucre] = useState("");
  const [quantiteSucre, setQuantiteSucre] = useState(0);
  const [marchandises, setMarchandise] = useState([]);
  const [listeDesClients, ajoutDeClient] = useState([]);

  const setAge = e => {
    definirAgeClient(e.target.value);
  };

  const ajoutClient = e => {
    e.preventDefault();
    const infosClient = {
      nomsClient,
      ageClient,
      marchandises
    };
    definirNomsClient("");
    definirAgeClient(0);
    // alert(`Noms du client : ${nomsClient}\nAge du client : ${ageClient}`);
    ajoutDeClient(function(ancienneVersion) {
      console.log("Ancienne valeur : ", ancienneVersion);
      return [...ancienneVersion, infosClient];
    });
  };

  const ajouterMarchandise = e => {
    e.preventDefault();
    const marchandise = {
      typeSucre,
      quantiteSucre
    };
    setQuantiteSucre(0);
    setTypeSucre("");
    setMarchandise(ancienneValeur => {
      return [...ancienneValeur, marchandise];
    });
  };

  return (
    <div className="App">
      <div style={{ border: "1px solid black" }}>
        <h1>Ajouter client</h1>
        <form>
          <input
            onChange={e => definirNomsClient(e.target.value)}
            value={nomsClient}
            type="text"
            placeholder="Noms du client"
          />
          <br />
          <input
            onChange={setAge}
            value={ageClient}
            type="number"
            placeholder="Age du client"
          />
          <br />
          <div style={{ border: "1px solid red" }}>
            <h2>Marchandises</h2>
            <form>
              <p>
                Type de sucre :
                <select onClick={e => setTypeSucre(e.target.value)}>
                  <option value={typeSucre}>-- Choisir --</option>
                  <option value="vcom">VCOM</option>
                  <option value="10x5">10x5</option>
                  <option value="sicre">SICRE</option>
                  <option value="sukali">SUKALI</option>
                </select>
              </p>
              <p>
                Quantite:
                <input
                  value={quantiteSucre}
                  onChange={e => setQuantiteSucre(e.target.value)}
                  type="number"
                  placeholder="Quantité"
                />
              </p>
              <input
                onClick={ajouterMarchandise}
                type="submit"
                value="Ajouter marchandise"
              />
            </form>
          </div>
          <input onClick={ajoutClient} type="submit" value="+" />
        </form>
      </div>
      <ListeDesClients clients={listeDesClients} />
    </div>
  );
}

const client = {
  nomsClient: "Ruth Ndovia",
  ageClient: 25,
  marchandise: [{ typeSucre: "VCOM", qte: 78 }, { typeSucre: "10x5", qte: 90 }]
};
