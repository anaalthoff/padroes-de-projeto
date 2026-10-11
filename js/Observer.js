// Interface Observer: quem quer ser avisado das mudanças
// JavaScript não tem interfaces, então é usada uma classe base cujo método precisa ser implementado pelas subclasses
class Observer {
  atualizar(pedido) {
    throw new Error("Método atualizar() não implementado");
  }
}
