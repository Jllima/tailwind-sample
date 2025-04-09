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
  const submenuLinks = document.querySelectorAll(".submenu a");
  const submenuToggles = document.querySelectorAll(".submenu-toggle");

  // Remove a classe 'active' de todos os links principais
  links.forEach(link => {
    link.parentNode.classList.remove("active");

    // Se o link corresponder à URL atual, ativa o item principal
    if (link.href === window.location.href) {
      link.parentNode.classList.add("active");
    }
  });

  // Verifica se algum link do submenu está ativo
  submenuLinks.forEach(submenuLink => {
    if (submenuLink.href === window.location.href) {
      // Obtém o elemento pai que contém o submenu
      const parentSubmenu = submenuLink.closest(".submenu");
      const submenuToggle = parentSubmenu ? parentSubmenu.previousElementSibling : null;

      // Adiciona 'active' à opção principal do submenu
      if (submenuToggle && submenuToggle.classList.contains("submenu-toggle")) {
        submenuToggle.classList.add("active");
      }
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
  const submenuToggles = document.querySelectorAll(".submenu-toggle");
  const submenuLinks = document.querySelectorAll(".submenu a");

  submenuToggles.forEach(toggle => {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation(); // Evita propagação do clique
      const submenu = toggle.nextElementSibling;
      
      if (submenu && submenu.classList.contains("submenu")) {
        submenu.classList.toggle("hidden");
        submenu.classList.toggle("visible");
      }
    });
  });

  // Fecha o submenu ao clicar fora dele
  document.addEventListener("click", (event) => {
    submenuToggles.forEach(toggle => {
      const submenu = toggle.nextElementSibling;
      if (submenu && submenu.classList.contains("submenu") && !toggle.contains(event.target) && !submenu.contains(event.target)) {
        submenu.classList.add("hidden");
        submenu.classList.remove("visible");
      }
    });
  });

  // Impede que os links do submenu interfiram no comportamento do menu
  submenuLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
});