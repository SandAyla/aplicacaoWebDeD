import axios from "axios";
import React from "react";
import { redirect, useNavigate, Navigate } from "react-router-dom";


export default function LoginAnunciante(login,senha){
    axios.post('https://cozinha-virtual-f33cb48916d7.herokuapp.com/usuario/login/portal', {
        email: login,
        senha: senha
    })
      .then(function (response) {
        localStorage.setItem("user",JSON.stringify(response.data))
        localStorage.setItem("isLoggedIn",true)
        localStorage.setItem("token",response.data.token)
        window.location.href = '/dashboard';
        

      })
      .catch(function (error) {
        return error;
      });
}