import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { OpenAI } from 'openai';
import carregaInfo from '../logic/hookGptexto';

const Chat = () => {
    const [chat, setChat] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        carregaInfo();
    }, []);
    
  return (
    <div>
        <h1>Chat</h1>
    </div>
  );
};

export default Chat;