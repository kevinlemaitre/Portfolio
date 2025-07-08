// Créer les éléments de la page
const style = document.createElement("style");
style.textContent = `
  body, html {
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100vh;
    background: black;
  }
  .reveal-line {
    position: fixed;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100vh;
    background: white;
    transform: translateX(-50%);
    z-index: 10;
    animation: lineExpand 1s ease-in-out forwards,
               lineCollapse 1s ease-in-out 1s forwards;
  }
  @keyframes lineExpand {
    0% { width: 2px; }
    100% { width: 100vw; }
  }
  @keyframes lineCollapse {
    0% { width: 100vw; }
    100% { width: 0; }
  }
  .content {
    opacity: 0;
    transition: opacity 1s ease-in-out;
    height: 100vh;
    background: radial-gradient(circle, #1a1a1a, #000000);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2rem;
  }
  .content.visible {
    opacity: 1;
  }
`;
document.head.appendChild(style);

// Créer la ligne centrale animée
const line = document.createElement("div");
line.className = "reveal-line";
document.body.appendChild(line);

// Créer le contenu principal
const content = document.createElement("div");
content.className = "content";
content.textContent = "Bienvenue dans l'univers JavaScript 🌌";
document.body.appendChild(content);

// Révéler le contenu après l'animation
setTimeout(() => {
  line.remove();
  content.classList.add("visible");
  document.body.style.overflow = "auto";
}, 2100);
