/*
function fizzBuzz(input){
    if(typeof(input) !== "number"){
        return "Nao eh um numero"
    }

    if((input % 3 === 0) && (input % 5 === 0)){
        return "FizzBuzz"
    }

    if(input % 3 === 0){
        return "Fizz"
    }

    if(input % 5 === 0){
        return "Buzz"
    }

    else{
        return input.toString();
    }
}
console.log(fizzBuzz(15))
*/

const listContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

let lists = [];

newListForm.addEventListener('submit', function(e){
    e.preventDefault();
    const listName = newListInput.value;
    if (listName === null || listName === '') return;
    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    render();
})

function createList(name){
    return  {id: Date.now().toString(), name: name}
}

function render(){
    clearElement(listContainer);
    lists.forEach(function(list){
        const item = document.createElement('li');
        item.classList.add('item');
        item.innerText = list.name;
        listContainer.appendChild(item);
    })
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

render()