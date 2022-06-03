// let input = document.querySelector(".input")
// let inputText = document.querySelector(".input-text")
// let button = document.querySelector(".button")

function createAlert(){
    let button = document.querySelector(".button")
    let input = document.querySelector(".input")

    button.addEventListener("click", function(){
        alert(input.value)
    })
}

window.addEventListener('DOMContentLoaded', createAlert)

let contentContainer = document.querySelector(".content-container")


// insert input items
for (let i=0 ; i < 2 ; i ++){

    let item =document.createElement("div");
    item.setAttribute("class", "items");
    
    contentContainer.appendChild(item);
    
    let inputItem = document.createElement("input")
    inputItem.setAttribute("type","text");
    inputItem.setAttribute("class","input");
    inputItem.setAttribute("placeholder","Un campo de texto");

    let buttonItem = document.createElement("button")
    buttonItem.innerHTML="Button"
    buttonItem.setAttribute("class","button");

    item.appendChild(inputItem)
    item.appendChild(buttonItem)

    buttonItem.addEventListener("click", function(){
        alert(inputItem.value)
    })
    
}




