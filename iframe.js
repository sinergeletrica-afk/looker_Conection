const dscc = require('@google/dscc');

dscc.subscribeToData(data => {
  document.body.innerHTML = ""; // Limpa antes de renderizar

  const url = data.config.scriptUrl;

  const container = document.createElement("div");
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.display = "flex";

  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "0";

  container.appendChild(iframe);
  document.body.appendChild(container);
});
