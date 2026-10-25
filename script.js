const botoes = document.querySelectorAll(".botoes-de-navegacao")
const telas = document.querySelectorAll(".tela")

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {

        telas.forEach(function(tela) {
            tela.style.display = "none";
        });

        const tela = document.getElementById(botao.dataset.tela);
        tela.style.display = "block";
        tela.getAnimations = "none";
        tela.offsetHeight;
        tela.style.animation = "aparecer-cartao 1.8s ease"
        });
    });