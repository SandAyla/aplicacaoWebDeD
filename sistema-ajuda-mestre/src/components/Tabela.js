import React, { useEffect } from "react";
import "./style/tabela.css";
import { useState } from "react";
import hookExcluirAnuncio from "../logic/hookExcluirAnuncios";
import { Box, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Tabela = ({ dados }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <table>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Titulo</th>
          <th>Descrição</th>
          <th>Visualizações contratadas/restantes</th>
          <th>Preço</th>
          <th>URL Destino</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item) => (
          <tr key={item.id_anuncio}>
            <td>
              <img src={item.link_img} alt="imagem" className="imagem" />
            </td>
            <td>{item.titulo}</td>
            <td>{item.descricao}</td>
            <td>
              {item.views_contratadas}/{item.views_restantes}
            </td>
            <td>
              {item.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </td>
            <td>{item.url_produto}</td>
            <td>
              {" "}
              <button className="botaoExcluir" onClick={handleOpen}>
                Excluir
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Excluir anúncio
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Deseja excluir o anúncio? Essa ação não é reversível.
                  </Typography>
                  <button
                    className="botaoExcluir"
                    onClick={() => {
                      hookExcluirAnuncio(item.id_anuncio);
                    }}
                  >
                    Excluir
                  </button>
                  <button className="botaoExcluirM" onClick={handleClose}>
                    Cancelar
                  </button>
                </Box>
              </Modal>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;
