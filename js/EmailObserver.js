// ConcreteObserver: simula o envio de um e-mail ao cliente quando o pedido muda
// As mensagens são escritas no painel , formando um histórico
class EmailObserver extends Observer {
  #email;
  #painel;

  constructor(email, painel) {
    super();
    this.#email = email;
    this.#painel = painel;
  }

  // Chamado pelo pedido a cada mudança de status
  atualizar(pedido) {
    const item = document.createElement("li");
    item.textContent =
      `Para: ${this.#email} - Seu pedido #${pedido.getId()} ` +
      `mudou para ${pedido.getStatus()}.`;
    this.#painel.appendChild(item);
  }
}
