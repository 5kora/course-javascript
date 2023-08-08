//30 - Selecionar elemento e alterar
document.getElementById("titulo").innerText = "Novo titulo!";

//31 - Alterando CSS
document.querySelectorAll('p').forEach(e => e.style.color = "red");

//32 - Alterando classe
const activeColor = () =>{
    const divContainer = document.querySelector(".div-container");
    divContainer.classList.toggle("ativo");
}

const btn = document.querySelector("#color-button");

btn.addEventListener("click", () => {
    activeColor();
});

//33 - Adicionando elementos pelo DOM
const addLi = () => {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("New item by click!"));
    ul.appendChild(li);
}

const addBtn = document.querySelector("#new-item-btn");

addBtn.addEventListener("click", () => {
    addLi();
});

// 34 - Removendo elementos
const removeElement = (event) => {
    event.target.remove();
}

const selectedItems = document.querySelectorAll(".item");

selectedItems.forEach((item) => {
    item.addEventListener("click",(e) =>{
        removeElement(e)
    } 
    )
})