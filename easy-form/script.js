const passwordIcons = document.querySelectorAll(".password-icon");

passwordIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const input = this.previousElementSibling; // Pega o input antes do ícone

    if (input.type === "password") {
      input.type = "text"; // Mostra a senha
      this.classList.remove("fa-eye-slash");
      this.classList.add("fa-eye");
    } 
    else {
      input.type = "password"; // Oculta a senha
      this.classList.remove("fa-eye");
      this.classList.add("fa-eye-slash");
    }
  });
});
