import React from "react";
import axios from "axios";

const  hookPostAnuncio = async(titulo, descricao, link, plano, img, setLoading) =>{
  var id_anuncio = 0;
  const sendImageToServer = async (uri, id_anuncio) => {
    var fileInput = document.getElementById('imageUpload');
    console.log(fileInput.files[0])
    console.log(id_anuncio)
    try {
      const formData = new FormData();
      formData.append('file', fileInput.files[0], `${id_anuncio}.jpg`);

      const response = await axios.post(
        'https://cozinha-virtual-f33cb48916d7.herokuapp.com/anuncio/img',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error sending image to server:', error);
    }
  };
  
    setLoading(true);
    var preco = 0.00;
    var views = 0;

    if(plano === "Plano 1"){
        preco = 80;
        views = 500;
    }else if(plano === "Plano 2"){
        preco = 100;
        views = 1000;
    }else if(plano === "Plano 3"){
        preco = 190;
        views = 2000;
    }

    const id_usuario = JSON.parse(localStorage.getItem("user")).id_usuario;
    const nome_usuario = JSON.parse(localStorage.getItem("user")).nome_usuario;
    const url_img = JSON.parse(localStorage.getItem("user")).url_img;
    
    axios.post('https://cozinha-virtual-f33cb48916d7.herokuapp.com/anuncio/create', {
        id_usuario: id_usuario,
        nome: titulo,
        descricao: descricao,
        url_site: link,
        preco: preco,
        views: views,
        link_img: `https://m.media-amazon.com/images/I/51f0D8a4nSL._AC_SL1200_.jpg`,
        flgAtivo: true,
        link_img_anunciante: url_img,
        nome_anunciante: nome_usuario,
    })
      .then(function (response) {
        setLoading(false);
        id_anuncio = response.data.id_anuncio;
        console.log(response.data);
        sendImageToServer(img, response.data.id_anuncio);
        window.location.href = '/dashboard';
        return response.data;
        
      })
      .catch(function (error) {
        return error;
      }).finally(async () => {
        const fetchOp = await fetch('https://cozinha-virtual-f33cb48916d7.herokuapp.com/anuncio/update', {
          method: 'PUT',
          body: JSON.stringify({ id_anuncio: id_anuncio, link_img: `https://cozinha-v-imgs.s3.us-east-2.amazonaws.com/anuncios/${id_anuncio}.jpg` }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
      })


}
export default hookPostAnuncio;