function sendMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();

  if (message === "") return;

  const chatBox = document.getElementById("chatMessages");

  // Create message bubble
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message");
  msgDiv.innerText = "You: " + message;

  chatBox.appendChild(msgDiv);

  input.value = "";

  // Auto scroll
  chatBox.scrollTop = chatBox.scrollHeight;
}