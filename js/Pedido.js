// ConcreteSubject: o pedido avisa seus observers sempre que o status muda
// O # torna os campos privados, ninguém de fora consegue alterá-los diretamente
class Pedido extends Subject {
  #id;
  #status;
  #observers = [];

  constructor(id) {
    super();
    this.#id = id;
    this.#status = StatusPedido.RECEBIDO;
  }

  getId() {
    return this.#id;
  }

  getStatus() {
    return this.#status;
  }

  // Passa para o próximo status e avisa todos os observers
  avancarStatus() {
    const posicao = ORDEM_STATUS.indexOf(this.#status);
    if (posicao === ORDEM_STATUS.length - 1) {
      return; // já foi entregue, não há próximo status
    }
    this.#status = ORDEM_STATUS[posicao + 1];
    this.notificarObservers();
  }

  // Inscreve um observer, sem repetir o mesmo observer na lista
  adicionarObserver(observer) {
    if (!this.#observers.includes(observer)) {
      this.#observers.push(observer);
    }
  }

  // Cancela a inscrição de um observer
  removerObserver(observer) {
    this.#observers = this.#observers.filter((o) => o !== observer);
  }

  // Chama atualizar() em cada observer, enviando o próprio pedido
  notificarObservers() {
    for (const observer of this.#observers) {
      observer.atualizar(this);
    }
  }
}
