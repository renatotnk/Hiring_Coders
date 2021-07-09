interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(){
    return {
        nome: "Joao",
        email: "alou@mail.com"
    }
}

function setUser(usuario: Usuario){
    //....
}