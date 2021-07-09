//Boolean
var contaPaga = false;
// Number
var idade = 23;
var avaliação = 6.5;
// String
var nome = "Renato Tanaka";
// Array
var idades = [23, 28, 56];
var idades2 = [45, 34, 76];
// Tupla
var jogadores;
jogadores = ['sada', 23, true];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
;
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any
var retornoDaAPI = [123, 'sdfsd', false];
var retornoDaAPI2 = {
// .......
};
// Void
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objeto) {
    // ..
}
// Never
function loopInfinito() {
    while (true) { }
    ;
}
function erro(mensagem) {
    throw new Error(mensagem);
}
// Union Types
var nota = 5;
function exibirNota(nota) {
    console.log("A nota eh " + nota);
}
exibirNota('10');
exibirNota(10);
//type Funcionários = Array<Funcionario>;
var funcionarios = [{
        nome: 'Vitor',
        sobrenome: 'ADF',
        dataNascimento: new Date()
    }, {
        nome: 'Joao',
        sobrenome: 'DMG',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log("Nome do Funcionario: " + funcionario.nome);
    }
}
