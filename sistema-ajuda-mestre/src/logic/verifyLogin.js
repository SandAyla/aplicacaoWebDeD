import axios from "axios";
import React from "react";
import { redirect, useNavigate, Navigate } from "react-router-dom";


export default function isLoggedIn(){
    var token = localStorage.getItem("token");
    jwt.verify(token, 'CMS-2023cozinhaV', function (err) {
      if (err) {
        res
          .status(500)
          .send('É necessario estar autenticado para realizar a operacão!');
      } else {
        next();
      }
    }); 
}