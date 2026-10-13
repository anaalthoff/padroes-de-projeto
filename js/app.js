// Monta o exemplo: um pedido com dois observers inscritos
const pedido = new Pedido(1);

const emailObserver = new EmailObserver(
  "cliente@exemplo.com",
  document.getElementById("emails")
);
const dashboardObserver = new DashboardObserver(
  document.getElementById("dashboard")
);

// Inscreve os dois observers no pedido
pedido.adicionarObserver(emailObserver);
pedido.adicionarObserver(dashboardObserver);

// Mostra o estado inicial, antes de qualquer mudança
document.getElementById("status").textContent = pedido.getStatus();
document.getElementById("dashboard").textContent =
  `Pedido #${pedido.getId()}: ${pedido.getStatus()}`;

// Botão: avança o status, e o pedido avisa os observers
document.getElementById("avancar").addEventListener("click", () => {
  pedido.avancarStatus();
  document.getElementById("status").textContent = pedido.getStatus();
});

// Caixas de seleção: inscrevem ou cancelam a inscrição de cada observer
function ligarCheckbox(idCheckbox, observer) {
  document.getElementById(idCheckbox).addEventListener("change", (evento) => {
    if (evento.target.checked) {
      pedido.adicionarObserver(observer);
    } else {
      pedido.removerObserver(observer);
    }
  });
}

ligarCheckbox("inscrever-email", emailObserver);
ligarCheckbox("inscrever-dashboard", dashboardObserver);
