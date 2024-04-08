import React, { useState } from 'react';
import axios from 'axios';
import openAI from 'openai';

const DALLEReactApp = () => {
  const [imageURL, setImageURL] = useState('');
  const [textInput, setTextInput] = useState('');
  const [selectedRaca, setSelectedRaca] = useState('humano');
  const [selectedClasse, setSelectedClasse] = useState('bardo');

  const handleSelectChangeRaca = (event) => {
    setSelectedRaca(event.target.value);
  };
  const handleSelectChangeClasse = (event) => {
    setSelectedClasse(event.target.value);
  };


  const handleGenerateImage = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const openai = new openAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true});

    const descricaoChar = `Um ${selectedRaca} ${selectedClasse} que ${textInput}`;
    
    openai.images
    .generate({
      prompt: descricaoChar,
    })
    .then(response => {
      // URL da imagem gerada

      const imageUrl = response.data[0].url;
      console.log("Imagem gerada:", imageUrl);
      setImageURL(imageUrl);
    })
    .catch(error => {
      console.error("Erro ao gerar imagem:", error);
    });
  };

  return (
    <section className='sectionForms'>


      <div className='infoInputs'>
        <h1 className='textoAssistentes'>Gerador de Imagens de RPG com Dall-e</h1>

      <label for="racas">Raça do Personagem:</label>
      <select id="racas" name="racas" onChange={handleSelectChangeRaca} >
          <option value="humano">Humano</option>
          <option value="elfo">Elfo</option>
          <option value="meio-elfo">Meio-elfo</option>
          <option value="anão">Anão</option>
          <option value="halfling">Halfling</option>
          <option value="tiefling">Tiefling</option>
      </select>

      <label for="classe" style={{marginTop:'20px'}} >Classe do Personagem:</label>
      <select id="classe" name="classe" onChange={handleSelectChangeClasse}>
        <option value="bardo">Bardo</option>
        <option value="monge">Monge</option>
        <option value="bruxo">Bruxo</option>
        <option value="mago">Mago</option>
        <option value="bárbaro">Bárbaro</option>
        <option value="druida">Druida</option>
      </select>

      <label for="descricao" style={{marginTop:'20px'}}>Descreva o/a personagem</label>
      <input
          id="descricao"
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Descreva a imagem que deseja gerar..."
          style={{ marginBottom: '10px', borderRadius: '5px', padding: '5px', width: '100%', height: '20px'}}
        />

        <button onClick={handleGenerateImage}>Gerar Imagem</button>
      </div>
      <div className='infoInputs'>  
        <img src={imageURL} alt="Imagem gerada" style={{ marginTop: '10px', maxWidth: '80%' }} />
      </div>
    </section>
  );
};

export default DALLEReactApp;