// Status possíveis de um pedido
// Object.freeze impede que os valores sejam alterados, imitando um enum
const StatusPedido = Object.freeze({
  RECEBIDO: "RECEBIDO",
  PAGO: "PAGO",
  ENVIADO: "ENVIADO",
  ENTREGUE: "ENTREGUE",
});

// Ordem em que os status acontecem
const ORDEM_STATUS = [
  StatusPedido.RECEBIDO,
  StatusPedido.PAGO,
  StatusPedido.ENVIADO,
  StatusPedido.ENTREGUE,
];
