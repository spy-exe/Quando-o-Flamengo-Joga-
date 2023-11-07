// Obtém o elemento do relógio digital
const clockElement = document.querySelector(".clock");

// Data e hora do próximo jogo do Flamengo (quarta-feira às 21:30 no horário de Brasília)
const dataHoraJogo = new Date("2023-11-08T21:30:00");

// Inicia o cronômetro
let timer = setInterval(() => {
  // Obtém a hora atual
  const agora = new Date();

  // Calcula o tempo restante em milissegundos
  const tempoRestante = dataHoraJogo - agora;

  if (tempoRestante > 0) {
    // Calcula os segundos, minutos, horas e dias restantes
    const segundosRestantes = Math.floor((tempoRestante / 1000) % 60);
    const minutosRestantes = Math.floor((tempoRestante / 60000) % 60);
    const horasRestantes = Math.floor((tempoRestante / 3600000) % 24);
    const diasRestantes = Math.floor(tempoRestante / 86400000);

    // Formata a hora no formato brasileiro
    const horaFormatada = horasRestantes.toString().padStart(2, '0');
    const minutosFormatados = minutosRestantes.toString().padStart(2, '0');
    const segundosFormatados = segundosRestantes.toString().padStart(2, '0');

    // Atualiza o elemento do relógio com o tempo restante
    clockElement.textContent = `${diasRestantes}d:${horasRestantes}h:${minutosRestantes}m:${segundosRestantes}s:`;
  } else {
    // O jogo já começou, então apaga o cronômetro
    clearInterval(timer);

    // Adiciona um texto informando que o jogo já começou
    clockElement.textContent = "Jogo do Flamengo começou!";
  }
}, 1000);

    const transitionOverlay = document.querySelector(".transition-overlay");
    const content = document.querySelector(".background");

    // Após um determinado tempo (por exemplo, 2 segundos), oculte a transição e mostre o conteúdo
    setTimeout(function () {
        transitionOverlay.style.display = "none";
        content.style.display = "block";
    }, 2000); // Tempo em milissegundos
    // Selecione o elemento `p` pelo ID
const linkedinLink = document.getElementById("linkedin-link");

// Adicione um ouvinte de evento de clique ao elemento
linkedinLink.addEventListener("click", function () {
    // Abra o perfil do LinkedIn em uma nova guia
    window.open("https://www.linkedin.com/in/bruno-neves-a849bb177/", "_blank");
});
