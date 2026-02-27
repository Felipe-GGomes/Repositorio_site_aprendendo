document.addEventListener("DOMContentLoaded", () => {
  const foto = document.querySelector(".foto-quemsou");
  const navItems = document.querySelectorAll(".floating-nav .nav-item");
  const sections = document.querySelectorAll("main section, footer.contato");
  const btnTopo = document.getElementById("btn-topo");

  // ======= CHUVA DE EMOJIS =======
  const emojiContainer = document.getElementById("emoji-rain-container");
  const emojis = ["💻", "🧑‍💻", "⌨️", "🖱️", "📚", "⚙️", "📡"];

  function criarEmoji() {
    if (!emojiContainer) return;

    const span = document.createElement("span");
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const left = Math.random() * 100;
    span.style.left = `${left}vw`;

    const duracao = 4 + Math.random() * 5;
    const delay = Math.random() * 2;
    span.style.animationDuration = `${duracao}s`;
    span.style.animationDelay = `${delay}s`;

    emojiContainer.appendChild(span);

    span.addEventListener("animationend", () => {
      span.remove();
    });
  }

  // Para ativar a chuva, descomente:
  // setInterval(criarEmoji, 800);

  if (foto) {
    foto.addEventListener("click", () => {
      foto.classList.toggle("ampliada");
    });
  }

  // Clique nos itens do menu
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = item.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Destacar item da nav conforme o scroll
  window.addEventListener("scroll", () => {
    let currentId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        currentId = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("ativo");
      if (item.getAttribute("data-target") === currentId) {
        item.classList.add("ativo");
      }
    });

    if (btnTopo) {
      if (window.scrollY > 250) {
        btnTopo.classList.add("visivel");
      } else {
        btnTopo.classList.remove("visivel");
      }
    }
  });

  if (btnTopo) {
    btnTopo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
