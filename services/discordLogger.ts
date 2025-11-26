
import { Page } from "../types";

const WEBHOOK_URL = "https://ptb.discord.com/api/webhooks/1443055857305784320/_ovzUTvtMV7aAXv9LVFRFi8l4ZD5zTOqRWbxpkknhKFoMLmQuiammxwi_4EMHWAYvc_b";

export const logVisitor = async () => {
  let ipData: any = {};
  
  // 1. Try to get IP Data (Fail gracefully if blocked by adblockers)
  try {
    const ipResponse = await fetch('https://ipapi.co/json/');
    if (ipResponse.ok) {
        ipData = await ipResponse.json();
    }
  } catch (error) {
    // Silent fail for IP fetch - likely adblocker or rate limit
  }

  try {
    // 2. Prepare Discord Message
    const embed = {
      title: "🚨 Novo Acesso ao NeoVendas",
      color: 65280, // Green
      fields: [
        { name: "IP", value: ipData.ip || "Oculto/Bloqueado", inline: true },
        { name: "Cidade", value: ipData.city ? `${ipData.city}, ${ipData.region}` : "N/A", inline: true },
        { name: "Provedor", value: ipData.org || "N/A", inline: true },
        { name: "User Agent", value: navigator.userAgent, inline: false },
        { name: "Horário", value: new Date().toLocaleString('pt-BR'), inline: false }
      ],
      footer: {
        text: "NeoVendas Security Log"
      }
    };

    // 3. Send to Discord
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] })
    });

  } catch (error) {
    // Fail silently
  }
};

export const logAction = async (action: string, details: string) => {
    try {
        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: `**Ação:** ${action}\n**Detalhes:** ${details}`
            })
        });
    } catch (e) { 
        // Fail silently
    }
};

export const logMessage = async (userText: string, aiResponse: string, scenario: string) => {
    try {
        const embed = {
            title: `💬 Nova Mensagem (${scenario})`,
            color: 3447003, // Blue
            fields: [
                { name: "Usuário", value: userText.substring(0, 1024) },
                { name: "IA", value: aiResponse.substring(0, 1024) }
            ]
        };

        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ embeds: [embed] })
        });
    } catch (e) {
        // Fail silently
    }
};

export const logLead = async (name: string, email: string) => {
    try {
        const embed = {
            title: "🎯 NOVO LEAD CAPTURADO",
            color: 16776960, // Yellow
            fields: [
                { name: "Nome", value: name, inline: true },
                { name: "Email", value: email, inline: true },
                { name: "Origem", value: "Teste Grátis IA", inline: false }
            ]
        };

        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ embeds: [embed] })
        });
    } catch (e) {
        // Fail silently
    }
};
