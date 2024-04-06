import React, { useState } from "react";
import "./cadastro.css";
import { Comentario } from "./Comentario";

export const TabelaDenuncias = ({ dados }) => {
  return (
    <section className="tabelaContainer">
      <table className="tabelaDenuncias">
        <thead>
          <tr>
            <th>Denunciante</th>
            <th>ID da denúncia</th>
            <th>Objeto da denúncia</th>
            <th>Nome do objeto</th>
            <th>Denúncia</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, i) => (
            <Comentario key={i} item={item} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
