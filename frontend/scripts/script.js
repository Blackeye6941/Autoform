import { initTheme } from "./theme.js";
import { checkLoginStatus } from "./auth.js";
import { initChat } from "./chat.js";

document.addEventListener("DOMContentLoaded", async () => {
  const root = document.documentElement;
  const themeToggleButton = document.getElementById("theme-toggle");
  const loginOverlay = document.getElementById("login-overlay");
  const textarea = document.getElementById("prompt-input");
  const sendButton = document.querySelector(".send-btn");
  const chatMessages = document.querySelector(".chat-messages");

  initTheme(root, themeToggleButton);
  const isLoggedIn = await checkLoginStatus(loginOverlay);

  if (isLoggedIn) {
    initChat(textarea, sendButton, chatMessages);
  } else {
    textarea.disabled = true;
    sendButton.disabled = true;
  }
});
