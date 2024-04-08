// Sidebar.js
import React from 'react';
import logo from "../../assets/logo.png";
import MenuItem from '../MenuItem';

const Sidebar = ({onSidebarItemClick}) => {
  return (
    <div className="sidebar">
        <div className="icon">
          <img src={logo} alt="logo" className="logo" />
          <h2> E-Scudo do Mestre </h2>
        </div>

        <nav id='itensMenu'>
          <MenuItem title={"Busque conhecimento"} onSidebarItemClick={onSidebarItemClick}/>
          <MenuItem title={"Consulte história"} onSidebarItemClick={onSidebarItemClick}/>
          <MenuItem title={"Crie NPCs"} onSidebarItemClick={onSidebarItemClick}/>
        </nav>
       
    </div>
  );
};

export default Sidebar;