//Boolean
let contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliação : number = 6.5;

// String
const nome: string = "Renato Tanaka"

// Array
const idades: number[] = [23, 28, 56];
const idades2: Array<number> = [45, 34, 76];

// Tupla
let jogadores: [string, number, boolean];
jogadores = ['sada', 23, true];

// Enum
enum StatusAprovacao {
    Aprovado = '001', 
    Pendente = '002',
    Rejeitado = '003'
};

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoDaAPI: any[] = [123, 'sdfsd' , false];
const retornoDaAPI2: any = {
    // .......
};

// Void
function printarNaTela(msg: string): void{
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto : object) {
    // ..
} 

// Never
function loopInfinito(): never{
    while(true){ };
}

function erro(mensagem: string): never{
    throw new Error(mensagem);
}

// Union Types
const nota: string | number = 5;

function exibirNota(nota: number | string) {
    console.log(`A nota eh ${nota}`);
}

exibirNota('10');
exibirNota(10);

// Alias
type Funcionario = {
    nome: string, 
    sobrenome: string,
    dataNascimento: Date;
}

//type Funcionários = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
    nome: 'Vitor', 
    sobrenome: 'ADF',
    dataNascimento: new Date()
},{
    nome: 'Joao', 
    sobrenome: 'DMG',
    dataNascimento: new Date()
}]

function tratarFuncionarios(funcionarios: Funcionario[]){
    for(let funcionario of funcionarios){
        console.log(`Nome do Funcionario: ${funcionario.nome}`);
    }
}

type Contato = {
    nome: string;
    telefone1: string;
    // Colocar Interrogacao apos o nome do atributo o torna opcional
    telefone2?: string;
}

const contato: Contato = {
    nome: 'Jorge',
    telefone1: '123123'
}   

// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();

//const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);