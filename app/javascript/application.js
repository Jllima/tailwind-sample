// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

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
