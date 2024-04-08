import "./dashboard.css";
import Sidebar from "./SideBar.js";
import Topbar from "./TopBar.js";
import { useState } from "react";
import DashboardContent from "./DashboardContent.js";

function DashboardAnuncios() {

    const [selectedContent, setSelectedContent] = useState('Busque Conhecimento');
  
    const handleSidebarItemClick = (content) => {
      setSelectedContent(content);
    };

    return (
    <nav className="pageA">
       <Sidebar onSidebarItemClick={handleSidebarItemClick} />
       <div className="main-container">
        <Topbar pagina={selectedContent} />
        <DashboardContent pagina={selectedContent} />
      </div>
    </nav>
  );
}

export default DashboardAnuncios;