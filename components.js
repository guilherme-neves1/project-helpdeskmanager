function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");
  elements.forEach(async (element) => {
    const file = element.getAttribute("data-include");
    if (file) {
      try {
        const response = await fetch(file);
        if (!response.ok) throw new Error("Erro ao carregar o arquivo");
        const content = await response.text();
        element.outerHTML = content;
      } catch (error) {
        console.error(`Erro ao incluir ${file}:`, error);
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);
