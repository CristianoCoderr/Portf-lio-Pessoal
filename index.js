document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          const offset = 10; // Ajuste conforme necessário

          window.scrollTo({
              top: targetElement.offsetTop - offset,
              behavior: "smooth"
          });
      });
  });
});
