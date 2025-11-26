import { GoogleGenAI, Content } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize Gemini Client
// CRITICAL: API Key must be from process.env.API_KEY.
// Added fallback check to prevent runtime crash if environment is not set up correctly.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey: apiKey });

const MODEL_NAME = 'gemini-2.5-flash';

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string,
  systemInstruction: string
): Promise<string> => {
  if (!apiKey) {
      console.error("API Key is missing. Please check your .env file or Vercel Environment Variables.");
      return "⚠️ Erro de Configuração: Chave de API não encontrada. Por favor, avise o administrador do sistema.";
  }

  try {
    // Convert application history format to Gemini Content format
    const contents: Content[] = history.map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.text }],
    }));

    // Add the new user message
    contents.push({
      role: 'user',
      parts: [{ text: newMessage }],
    });

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7, // Balance between creativity and consistency for roleplay
      },
    });

    return response.text || "Desculpe, não consegui processar sua resposta. Tente novamente.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Falha ao conectar com o Treinador Virtual via Gemini.");
  }
};