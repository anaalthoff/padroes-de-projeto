// ConcreteObserver: mostra o status atual do pedido no painel da loja
// Diferente do e-mail, substitui o texto em vez de acumular, mostrando só o status mais recente
class DashboardObserver extends Observer {
  #painel;

  constructor(painel) {
    super();
    this.#painel = painel;
  }

  // Chamado pelo pedido a cada mudança de status
  atualizar(pedido) {
    this.#painel.textContent =
      `Pedido #${pedido.getId()}: ${pedido.getStatus()}`;
  }
}
