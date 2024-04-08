// Content.js
import React, {useState, useEffect} from 'react';
import Dashboard from '../Util/Dashboard';
import Cadastro from '../Util/Cadastro';
import Denuncias from '../Util/Denuncias';
import DALLEReactApp from '../DALLEReactApp';
import PdfChatApp from '../PdfChatApp';

const DashboardContent = ({pagina}) => {

  const dadosExemplo = [
    { id: 1, nome: 'João', email: 'joao@example.com' },
    { id: 2, nome: 'Maria', email: 'maria@example.com' },
    // Adicione mais dados conforme necessário
  ];
  const [isLoaded, setIsLoaded] = useState(false);
  const [anuncios,setAnuncios] = useState([]);
  const [metricas, setMetricas] = useState({ totalAnuncios: 0, totalGasto: 0, totalViews: 0 });

  useEffect(() => {
    const postAnuncios = async () => {
      
      const id_anunciante = JSON.parse(localStorage.getItem("user")).id_usuario;
      
      try {
        const response = await fetch('https://cozinha-virtual-f33cb48916d7.herokuapp.com/anuncio/anunciante', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // You may need to include additional headers if required by your API
          },
          body: JSON.stringify({ id_anunciante: id_anunciante }),
        });
        const result = await response.json();
        const ativos = result.filter((anuncio) => anuncio.flgAtivo === true);
        const totalGasto = ativos.reduce((acc, anuncio) => acc + anuncio.preco, 0);
        const totalViews = ativos.reduce((acc, anuncio) => acc + anuncio.views_restantes, 0);
        const metricas = {
          totalAnuncios: result.length,
          totalGasto: totalGasto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
          totalViews: totalViews
        };
        setMetricas(metricas);
        setAnuncios(result);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };

    postAnuncios();
  }, []);


  if(isLoaded === false){

  return(<div>Carregando...</div>)

  }else{
    switch (pagina) {
      case 'Dashboard Anuncios':
        return <Dashboard data={anuncios} metricas = {metricas} />;
      case 'Crie NPCs':
        return <DALLEReactApp/>
      case 'Consulte história':
        return <PdfChatApp/>
      case 'relatorio':
        return <div>Relatório</div>;
      default:
        return <Dashboard data={anuncios} metricas = {metricas} />;
  }
  
  }

};

export default DashboardContent;