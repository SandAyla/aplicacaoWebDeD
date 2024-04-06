import { Popover, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Comentario = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [obj, setObj] = useState("");
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  function Objeto() {
    switch (item.objeto_denuncia) {
      case 0:
        setObj("Usuário");
        break;
      case 1:
        setObj("Receita");
        break;
      case 2:
        setObj("Dica");
        break;
      case 3:
        setObj("Avaliação");
        break;
      case 4:
        setObj("Pasta");
        break;
      default:
        setObj("Elemento da busca");
        break;
    }
  }

  useEffect(() => {
    Objeto();
  }, []);

  return (
    <tr>
      <td>{item.id_denunciante}</td>
      <td>{item.id_denuncia}</td>
      <td>{obj}</td>
      <td>
        <button className="expandButton" onClick={handleClick}>
          Ver denúncia
        </button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>{item.comentario}</Typography>
        </Popover>
      </td>
      <td>
        <button className="expandButton">Excluir</button>
      </td>
    </tr>
  );
};
