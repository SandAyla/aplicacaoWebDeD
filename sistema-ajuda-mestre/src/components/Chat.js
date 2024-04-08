import { useState, useEffect }  from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import './chat.css';
import logo from "../assets/2.jpg";

const API_KEY = process.env.REACT_APP_API_KEY

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendRequest = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user",
    };

    messages.push({
      message: "Responda o chat como se fosse um mestre de RPG!",
      direction: 'outgoing',
      sender: "user",
    })
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);

    try {
      const response = await processMessageToChatGPT([...messages, newMessage]);
      const content = response.choices[0].message.content;
      if (content) {
        const chatGPTResponse = {
          message: content,
          sender: "ChatGPT",
        };
        setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
      }
    } catch (error) {
      console.error("Error processing message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        ...apiMessages,
      ],
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });
    return response.json();

  }

  return (
    <div className="App">
      <div className="header-assistente">
        <img src={logo} alt="OpenAI Logo" className='foto' />
        <h1 className='textoAssistente'>Olá, aventureiro(a), qual a aventura do dia?</h1>
      </div>
      <div style={{ position:"relative", height: "600px", width: "900px", marginTop: "40px" }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              
              {messages.map((message, i) => {
                console.log(message)
                console.log(i)
                return  <Message
                key={i}
                model={{
                  message: message.message,
                  sentTime: new Date(),
                  sender: message.sender === 'user' ? 'user' : 'chatGPT',
                }}
                // Add custom styles or components based on sender
                className={message.sender === 'user' ? 'sent-message' : 'received-message'}
              />
              })}
              
            </MessageList>
            <MessageInput placeholder="Send a Message" onSend={handleSendRequest} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default Chat;