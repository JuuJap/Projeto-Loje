const botao = document.getElementById("toggleTema");

// Verifica se já existe tema salvo
if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
}

// Clique no botão
botao.addEventListener("click", () => {
    document.body.classList.toggle("dark");

  // Salva a escolha
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }
});