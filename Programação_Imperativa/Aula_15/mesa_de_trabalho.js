let data = require('./modulo_json')
let dataBank = [];

function contasBancarias(conta, tipoDeConta, saldo, titularDaConta){

  this.conta = conta;
  this.tipoDeConta = tipoDeConta;
  this.saldo = saldo;
  this.titularDaConta = titularDaConta;

}

for (let i = 0; i < data.length; i++) {
  dataBank.push(new contasBancarias(data[i].conta, data[i].tipoDeConta, data[i].saldo, data[i].titularDaConta));
}

// const ordemCerta = dataBank.reverse();
// console.log(ordemCerta)

// console.log(dataBank);


let bank = {
  clientes: dataBank,
  consultarCliente: function(titularDaConta) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularDaConta == titularDaConta) {
        return this.clientes[i];
      }
    }
  },
};


console.log(bank.consultarCliente("Lonnie Verheijden"))

















