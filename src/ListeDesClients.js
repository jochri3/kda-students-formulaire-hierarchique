import React from "react";

const ListeDesClients = props => {
  console.log(props.clients);
  const liste = props.clients.map(client => (
    <li>
      {client.nomsClient} - {client.ageClient} ans
      <ul>
        {client.marchandises.map(marchandise => (
          <li>
            Type : {marchandise.typeSucre} - Quantité :{" "}
            {marchandise.quantiteSucre}
          </li>
        ))}
      </ul>
    </li>
  ));
  return (
    <>
      <h1>Liste des clients</h1>
      <ul>{liste}</ul>
    </>
  );
};

export default ListeDesClients;
