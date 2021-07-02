var elements = [];
var top = -1;
const MAX = 10;

function push(num){
    if( top < MAX) {
        top += 1;
        elements[top] = num;
    } else{
        console.log("Stack Full!");
    }
}

function isEmpty(){
    return top == -1;
}

function pop(){
    if(top != -1){
        let num = elements[top];
        top -= 1;
        return num;
    } else {
        console.log("Stack Empty!");
    }
}

