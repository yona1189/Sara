const formularioUsuariosBtn = document.getElementById(
  "formulario_usuarios-btn"
);
const formuUsuarios = document.getElementById("formu_usuarios");

document.addEventListener("DOMContentLoaded", function () {
  // Verifica que los elementos existan antes de añadir el evento
  if (formularioUsuariosBtn && formuUsuarios) {
    formularioUsuariosBtn.addEventListener("click", function () {
      formuUsuarios.classList.toggle("d-inline");
    });
  } else {
    console.error(
      "No se encontraron los elementos con IDs 'formulario-usuarios' o 'formu_usuarios'."
    );
  }
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  const nav_01 = document.getElementById("nav_01");
  nav_01.classList.toggle("d-none");
  const menu_1 = document.getElementById("menu_1");
  menu_1.classList.toggle("w-auto");
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

// Menu principalS"
fetch("menu-principal.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("nav_01").innerHTML = data;
  })
  .catch((error) => console.error("Error cargando el header:", error));

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formUsuarios");
  const modalAcceptBtn = document.getElementById("modal-accept-btn");

  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      const myModal = new bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      myModal.show();
    }
    form.classList.add("was-validated");
  });

  // Agregar el evento al botón "Aceptar" para resetear el formulario
  modalAcceptBtn.addEventListener("click", function () {
    form.reset();
    form.classList.remove("was-validated"); // Quitar la clase de validación para reiniciar el estilo
    const formuUsuarios = document.getElementById("formu_usuarios");
    formuUsuarios.classList.toggle("d-inline");
  });
});
