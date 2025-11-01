const USER_AVATAR_SVG = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12ZM12 14C8.68629 14 6 16.6863 6 20H18C18 16.6863 15.3137 14 12 14Z" fill="var(--icon-color)"/>
  </svg>`;

const AI_AVATAR_SVG = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="logo-path" d="M12 2L14.5 9H21.5L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L1.5 9H8.5L12 2Z" fill="var(--accent-primary)"/>
  </svg>`;

export function initChat(textarea, sendButton, chatMessages) {
  textarea.disabled = false;
  sendButton.disabled = false;

  textarea.addEventListener("input", () => resizeTextarea(textarea));
  textarea.addEventListener("keydown", (e) =>
    handleKeydown(e, textarea, chatMessages)
  );
  sendButton.addEventListener("click", () =>
    handleSendMessage(textarea, chatMessages)
  );
}

function handleKeydown(e, textarea, chatMessages) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleSendMessage(textarea, chatMessages);
  }
}

function handleSendMessage(textarea, chatMessages) {
  const text = textarea.value.trim();
  if (text === "") return;

  appendMessage("user", text, chatMessages);
  textarea.value = "";
  textarea.style.removeProperty("height");

  //send text to the backend
}

function appendMessage(sender, text, chatMessages) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;

  const avatar = sender === "user" ? USER_AVATAR_SVG : AI_AVATAR_SVG;

  const textDiv = document.createElement("div");
  textDiv.className = "text";
  textDiv.textContent = text;

  messageDiv.innerHTML = `<div class="avatar">${avatar}</div>`;
  messageDiv.appendChild(textDiv);

  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function resizeTextarea(textarea) {
  textarea.style.height = "auto"; // Reset height
  textarea.style.height = textarea.scrollHeight + "px";
}
