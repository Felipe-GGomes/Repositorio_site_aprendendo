document.addEventListener("DOMContentLoaded", () => {
  const foto = document.querySelector(".foto-quemsou");
  const navItems = document.querySelectorAll(".bottom-nav .nav-item");
  const sections = document.querySelectorAll("main section");
  const btnTopo = document.getElementById("btn-topo");

  // ======= CHUVA DE EMOJIS =======
  const emojiContainer = document.getElementById("emoji-rain-container");
  const emojis = ["💻", "🧑‍💻", "⌨️", "🖱️", "📚", "⚙️", "📡"];

  function criarEmoji() {
    if (!emojiContainer) return;

    const span = document.createElement("span");
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // posição horizontal aleatória
    const left = Math.random() * 100; // de 0 a 100vw
    span.style.left = `${left}vw`;

    // duração e atraso aleatórios para não cair tudo igual
    const duracao = 4 + Math.random() * 5; // entre 4s e 9s
    const delay = Math.random() * 2;       // até 2s
    span.style.animationDuration = `${duracao}s`;
    span.style.animationDelay = `${delay}s`;

    emojiContainer.appendChild(span);

    // remove o elemento depois que a animação termina
    span.addEventListener("animationend", () => {
      span.remove();
    });
  }

  // cria um emoji novo de tempos em tempos
  setInterval(criarEmoji, 800);

  if (foto) {
    foto.addEventListener("click", () => {
      foto.classList.toggle("ampliada");
    });
  }

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetId = item.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  window.addEventListener("scroll", () => {
    let currentId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentId = section.id;
      }
    });

    navItems.forEach((item) => {
      const targetId = item.getAttribute("data-target");
      item.classList.toggle("ativo", targetId === currentId);
    });

    if (window.scrollY > 250) {
      btnTopo.classList.add("visivel");
    } else {
      btnTopo.classList.remove("visivel");
    }
  });

  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
