// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// Dark Mode
document.addEventListener("DOMContentLoaded", () => {
  // Recupera a preferência salva no Local Storage
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }

  // Botão para alternar o tema
  const toggleButton = document.getElementById("darkModeToggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      const isDarkMode = document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });
  }
});

// fuction active links
document.addEventListener("turbo:load", () => {
  const links = document.querySelectorAll("nav ul li a");
  const submenuLinks = document.querySelectorAll("#submenu a");
  const cadastroToggle = document.getElementById("submenu-toggle");

  links.forEach(link => {
    // Remove a classe 'active' de todos os links
    link.parentNode.classList.remove("active");

    // Verifica se o href do link corresponde à URL atual
    if (link.href === window.location.href) {
      link.parentNode.classList.add("active");
    }
  });

  // Verifica se algum link do submenu está ativo
  submenuLinks.forEach(submenuLink => {
    if (submenuLink.href === window.location.href) {
      // Adiciona a classe 'active' ao item principal "Cadastro"
      cadastroToggle.classList.add("active");
    }
  });
});
/*
O evento turbo:load é disparado sempre que o Turbo Drive atualiza o DOM, 
seja ao carregar uma nova página ou ao atualizar uma parte do conteúdo. 
Isso garante que seu script seja executado corretamente, 
mesmo sem recarregamento completo da página.
*/
// submenu navbar
document.addEventListener("turbo:load", () => {
  const submenuToggle = document.getElementById("submenu-toggle");
  const submenu = document.getElementById("submenu");
  const links = document.querySelectorAll("nav ul li a");

  if (submenuToggle && submenu) {
    submenuToggle.addEventListener("click", (event) => {
      // Impede a propagação para outros elementos
      event.stopPropagation();
      submenu.classList.toggle("hidden");
    });

    // Fecha o submenu se clicar fora dele
    document.addEventListener("click", () => {
      submenu.classList.add("hidden");
    });
  }

  links.forEach(link => {
    link.addEventListener("click", (event) => {
      // Impede que o clique nos links interfira no submenu
      event.stopPropagation();
    });
  });
});