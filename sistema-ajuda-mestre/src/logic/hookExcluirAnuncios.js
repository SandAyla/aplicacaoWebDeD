import React from "react";
import axios from "axios";

export default function hookExcluirAnuncio(id_anuncio){
    console.log(id_anuncio);
    axios.delete('https://cozinha-virtual-f33cb48916d7.herokuapp.com/anuncio/delete', {
        data: {
            id_anuncio: id_anuncio
          }
        })
    .then(function (response) {
        window.location.href = '/dashboard';
        return response.data;
    
    })
    .catch(function (error) {
        console.log(error);
        return error;
    });
}