import React, { useState, useEffect } from "react";
import "./cadastro.css";
import { TabelaDenuncias } from "./TabelaDenuncias";

function Denuncias() {
  const [denuncia, setDenuncia] = useState([]);
  useEffect(() => {
    const getDenuncias = async () => {
      try {
        const response = await fetch(
          "https://cozinha-virtual-f33cb48916d7.herokuapp.com/denuncias",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        setDenuncia(result)
        console.log(result)
      } catch (error) {
        console.error("Ocorreu um erro:", error);
        // Trate o erro conforme necessário
      }
    };
    getDenuncias();
  }, []);


  return (
    <section className="denuncias">
      <div className="tabelaD">
        <TabelaDenuncias dados={denuncia} />
      </div>
    </section>
  );
}

export default Denuncias;
