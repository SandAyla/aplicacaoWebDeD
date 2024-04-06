import React from "react";
import axios from "axios";
import { OpenAI } from 'openai';


const carregaInfo = async () =>{
    const openai = new OpenAI({ apiKey: "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", dangerouslyAllowBrowser: true, engine: "gpt-3.5-turbo"});
    try{
        const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
        });
        console.log(completion.choices[0]);
    }catch(error){
        console.log(error);
    }
}

export default carregaInfo;