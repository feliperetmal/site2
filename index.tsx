import { logRedirectVisitor } from './services/discordLogger';

const REDIRECT_URL = 'https://yehuda3-0.vercel.app/';

async function initRedirectAndLog() {
  await logRedirectVisitor(REDIRECT_URL);
  // Perform the redirect after logging
  window.location.href = REDIRECT_URL;
}

initRedirectAndLog();
