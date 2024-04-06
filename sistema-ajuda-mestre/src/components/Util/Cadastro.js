import "./cadastro.css";
import { useState } from "react";
import hookPostAnuncio from "../../logic/hookPostAnuncio";

function Cadastro() {
  const [titulo, setTitulo] = useState("Título");
  const [descricao, setDescricao] = useState("Descrição do produto");
  const [link, setLink] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [plano, setPlano] = useState("Plano 1");
  const [imagem, setImagem] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className={`sectionForm ${loading ? "blur" : ""}`}>
      <div className="infoInput">
        <div className="formTitle">
          <h2>Informações do seu anúncio</h2>
        </div>
        <div className="divInput">
          <h3>Título</h3>
          <input
            className="input"
            type="text"
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Insira o nome do seu produto"
          />
        </div>
        <div className="divInput">
          <h3>Descrição do produto/serviço</h3>
          <textarea
            id="myTextArea"
            onChange={(e) => setDescricao(e.target.value)}
            className="divInput"
            rows={3}
            maxLength={200}

          ></textarea>
        </div>
        <div className="divInput">
          <h3>Link do produto/serviço</h3>
          <input
            onChange={(e) => setLink(e.target.value)}
            className="input"
            type="text"
            placeholder="Insira o link de acesso do seu produto"
          />
        </div>
        <div className="divInput">
          <h3>Plano de visualizações</h3>
          <select id="myDropdown" onChange={(e) => setPlano(e.target.value)}>
            <option className="dropOption" value="Plano 1" selected>
              Plano 1: 500 visualizações - R$ 80
            </option>
            <option className="dropOption" value="Plano 2">Plano 2: 1000 visualizações - R$ 100</option>
            <option className="dropOption" value="Plano 3">Plano 3: 2000 visualizações - R$ 190</option>
          </select>
        </div>
        <div className="divInput">
          <h3>Imagem do produto</h3>
          <br/>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleImageChange}
        />
        {selectedImage && (
          <div>
            <img src={selectedImage} alt="Imagem selecionada" style={{ maxWidth: 128 }} />
          </div>
        )}
        </div>
      </div>

      <div className="reciboInput">
        <h2>Resumo do seu Anúncio</h2>
        <div className="resumoInfos">
          <div className="cardSection">
            <div className="adInfo">
              <h3 className="adText">{titulo}</h3>
              <p className="adText">Link para acesso: {link}</p>
              <p className="adText">Preço: {plano}</p>
            </div>
          </div>
        </div>

        <button
          className="inputButton"
          onClick={() => {
            hookPostAnuncio(titulo, descricao, link, plano, selectedImage, setLoading);
          }}
        >
          Cadastrar Anúncio
        </button>
      </div>
    </section>
  );
}

export default Cadastro;
