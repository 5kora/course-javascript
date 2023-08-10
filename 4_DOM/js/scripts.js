//30 - Selecionar elemento e alterar
document.getElementById("titulo").innerText = "Novo titulo!";

//31 - Alterando CSS
document.querySelectorAll('p').forEach(e => e.style.color = "red");

//32 - Alterando classe
const activeColor = () => {
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
    item.addEventListener("click", (e) => {
        removeElement(e)
    }
    )
})

//35 - Filtrar itens
const filterElement = () => {
    var filterInput = document.getElementById("filter-input").value.toUpperCase();

    const lista = document.querySelectorAll(".lista-itens li");

    lista.forEach((item) => {
        const texto = item.innerText || item.textContent;
        item.style.display = texto.toUpperCase().includes(filterInput) ? "" : "none";
    })

}

const inputFilter = document.getElementById("filter-input");

inputFilter.addEventListener("keyup", () => {
    filterElement();
})

// 36 - Mover itens
const activeItem = (event, list) => {
    list.querySelectorAll("li").forEach((item) => {
        item.classList.remove("selected");
    });

    event.target.classList.add("selected");
}

const upItem = () => {
    const list = document.querySelector(".lista-movel");
    const selectedItem = list.querySelector(".selected");

    if (selectedItem) {
        const previousItem = selectedItem.previousElementSibling;
        list.insertBefore(selectedItem, previousItem)
    }
}

const downItem = () => {
    const list = document.querySelector(".lista-movel");
    const selectedItem = list.querySelector(".selected");

    if (selectedItem) {
        const nextItem = selectedItem.nextElementSibling;
        list.insertBefore(nextItem , selectedItem);
    }
}


const list = document.querySelector(".lista-movel");

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        activeItem(event, list);
    }
})

const upButton = document.querySelector(".subir");
const downButton = document.querySelector(".descer");

upButton.addEventListener("click", () => {
    upItem();
});

downButton.addEventListener("click", () => {
    downItem();
});