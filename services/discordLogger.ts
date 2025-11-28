const WEBHOOK_URL = 'https://ptb.discord.com/api/webhooks/1443790807965503611/9Q5mptFIFFRzoIF4Gap0YEQgm014sa9PSgbn3GyhTwd2VfohuIM1E7ZtFYj6JBESGhna';

// Function to safely get IP and geo info
async function getIpAndGeoInfo() {
    try {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const ip = ipData.ip;

        if (ip) {
            const geoResponse = await fetch(`https://ip-api.com/json/${ip}`);
            const geoData = await geoResponse.json();
            return {
                ip: ip,
                city: geoData.city || 'Desconhecida',
                region: geoData.regionName || 'Desconhecida',
                country: geoData.country || 'Desconhecido',
                isp: geoData.isp || 'Desconhecido',
            };
        }
    } catch (error) {
        console.warn('Erro ao obter IP ou informações de geolocalização:', error);
    }
    return { ip: 'Oculto/Bloqueado', city: 'Desconhecida', region: 'Desconhecida', country: 'Desconhecido', isp: 'Desconhecido' };
}

// Function to send a log for redirection event
export async function logRedirectVisitor(redirectUrl: string) {
    let visitorInfo = { ip: 'Oculto/Bloqueado', city: 'Desconhecida', region: 'Desconhecida', country: 'Desconhecido', isp: 'Desconhecido' };
    try {
        visitorInfo = await getIpAndGeoInfo();
        const userAgent = navigator.userAgent;
        const timestamp = new Date().toLocaleString('pt-BR');

        const embed = {
            title: `🔗 Redirecionamento de Visitante Registrado!`,
            description: `Um usuário acessou o link e foi redirecionado.`,
            color: 65280, // Green color
            fields: [
                { name: '🌐 IP', value: visitorInfo.ip, inline: true },
                { name: '📍 Localização', value: `${visitorInfo.city}, ${visitorInfo.region}, ${visitorInfo.country}`, inline: true },
                { name: '📡 Provedor (ISP)', value: visitorInfo.isp, inline: false },
                { name: '🖥️ User Agent', value: userAgent, inline: false },
                { name: '➡️ Redirecionado Para', value: `[${redirectUrl}](${redirectUrl})`, inline: false },
                { name: '⏰ Horário', value: timestamp, inline: false },
            ],
            footer: { text: 'Log Gerado pelo Sistema de Redirecionamento' },
            timestamp: new Date().toISOString(),
        };

        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ embeds: [embed] }),
        });
    } catch (error) {
        console.error('Falha ao enviar log de redirecionamento para o Discord:', error);
    }
}
