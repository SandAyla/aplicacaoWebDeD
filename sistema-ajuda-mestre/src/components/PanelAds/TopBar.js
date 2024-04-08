import React, {useState, useEffect} from "react";

const Topbar = ({pagina}) => {

  var [image,setImage] = useState("");
  var [dadosUser,setDadosUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem("user");
    const userObj = JSON.parse(user);
    setImage(userObj.url_img);
    setDadosUser(userObj);
  }, []);
    return (
      <div className="topbar">
          <div className="topbar-title">
              <h2>{pagina}</h2>    
          </div>
          <div className="topbar-user">
          </div>
      </div>
    );
  };
  
  export default Topbar;