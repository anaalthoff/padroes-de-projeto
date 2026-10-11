// Interface Subject: quem é observado e avisa os observers quando muda
// JavaScript não tem interfaces, então é usada uma classe base cujos métodos precisam ser implementados pelas subclasses
class Subject {
  adicionarObserver(observer) {
    throw new Error("Método adicionarObserver() não implementado");
  }

  removerObserver(observer) {
    throw new Error("Método removerObserver() não implementado");
  }

  notificarObservers() {
    throw new Error("Método notificarObservers() não implementado");
  }
}
