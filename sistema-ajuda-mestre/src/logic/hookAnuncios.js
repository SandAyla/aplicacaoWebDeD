import React from "react";
import axios from "axios";

export default function hookAnuncio(){
    axios.post('https://cozinha-virtual-f33cb48916d7.herokuapp.com/anuncios', {
        email: "Aaaa",
        senha: "12345678"
    })
      .then(function (response) {
        return response.data;
    
      })
      .catch(function (error) {
        return error;
      });
}