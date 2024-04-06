import React from "react";
import "../style/dashboard.css";
import Chat from "../Chat";


const Dashboard = ({data, metricas}) => {

    return (

    <div className="dashboard">
    <Chat />
    </div>
    );
}

export default Dashboard;