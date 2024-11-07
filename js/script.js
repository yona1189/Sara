document.getElementById("menu-toggle").addEventListener("click", function () {
  const nav_01 = document.getElementById("nav_01");
  nav_01.classList.toggle("d-none");
  const menu_1 = document.getElementById("menu_1");
  menu_1.classList.toggle("w-auto");
});

document
  .getElementById("toggle-form-usuarios")
  .addEventListener("click", function () {
    const form_usuarios = document.getElementById("form_usuarios");
    form_usuarios.classList.toggle("d-inline");
  });

document.getElementById("menu-toggle").addEventListener("click", function () {
  const nav_01 = document.getElementById("nav_01");
  nav_01.classList.toggle("d-none-mobile");
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  const nav_01 = document.getElementById("nav_01");

  // Alterna la clase que permite mostrar el div solo en móviles
  nav_01.classList.toggle("d-visible-mobile");
});

// cerrar sesión"
fetch("cerrar-sesion.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("cerrar-sesion").innerHTML = data;
  })
  .catch((error) => console.error("Error cargando el header:", error));

const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
