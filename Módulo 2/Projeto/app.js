const livros = require('./database')

//pegar o input
const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um livro? S/N ')

if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas sao as categorias disponiveis:')
    console.log('Produtividade', '/História brasileira','/Américas','/Estilo de vida','/Tecnologia')

    const entradaCategoria = readline.question('Qual categoria voce escolhe: ')
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
    if (retorno.length === 0){
        console.log('Nao ha nenhum livro nesta categoria!')
    } else{
        console.table(retorno)
    }

} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Estes sao todos os livros disponíveis: ')
    console.table(livrosOrdenados)
}

