import React, { useState } from 'react';
import axios from 'axios';
import { PDFDocument } from 'pdf-lib'; // Biblioteca para processamento de PDF
import Chat from './Chat'; // Componente de chat (você precisará implementar isso separadamente)

const PdfChatApp = () => {
  const [pdfText, setPdfText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsLoading(true);

    try {
      const pdfBytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const pages = pdfDoc.getPages();
      let text = '';

      for (const page of pages) {
        const content = await page.getTextContent();
        text += content.items.map(item => item.str).join(' ');
      }

      setPdfText(text);
    } catch (error) {
      console.error('Erro ao processar o arquivo PDF:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>PDF Chat</h1>
      <input type="file" accept=".pdf" onChange={handleFileUpload} />
      {isLoading ? <p>Carregando PDF...</p> : null}
      {pdfText ? <Chat initialMessages={[{ text: pdfText, user: 'bot' }]} /> : null}
    </div>
  );
};

export default PdfChatApp;