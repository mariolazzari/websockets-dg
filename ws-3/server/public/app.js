const socket = io("ws://localhost:3500");

const sendMessage = e => {
  e.preventDefault();
  const input = document.querySelector("input");
  if (input.value) {
    socket.send(input.value);
    input.value = "";
  }
  input.focus();
};

document.querySelector("form").addEventListener("submit", sendMessage);

socket.on("message", data => {
  console.log("mes", data);

  const li = document.createElement("li");
  li.textContent = data;
  document.querySelector("ul").appendChild(li);
});
