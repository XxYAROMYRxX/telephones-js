import { nanoid } from "nanoid";


const formEL = document.querySelector(".form");
const listEl = document.querySelector(".list");


const contacts = [];


function renderData(array){
    const item = array.map(({id, name, phone}) => {
        return `<li class="item" id="${id}">
                <h2 class="title">${name}</h2>
                <p class="text">${phone}</p>
                <button type="button" class="edit" data-action="edit">Edit</button>
                <button type="button" class="delete" data-action="delete">Delete</button>
            </li>`
    }).join("")
    listEl.insertAdjacentHTML("beforeend", item)
}




formEL.addEventListener("submit", (event) => {
    event.preventDefault();
    if(event.currentTarget.elements.name.value === "" || event.currentTarget.elements.number.value === ""){
        alert("Введіть коректні дані")
        return
    }
    const data = {
        id: nanoid(),
        name: event.currentTarget.elements.name.value,
        phone: event.currentTarget.elements.number.value
    }
    contacts.push(data);
    listEl.innerHTML = ""
    renderData(contacts)
    event.currentTarget.reset()
})



listEl.addEventListener("click", (event) => {
    if(event.target.nodeName !== "BUTTON"){
        return
    }
    const li = event.target.closest("li")
    const id = li.id;
    const action = event.target.dataset.action;
    if(action === "delete"){
        const index = contacts.findIndex(({ id }) => id === li.id);

        contacts.splice(index, 1);

        listEl.innerHTML = "";
        renderData(contacts);
    }


    // console.log(event.target.dataset.action);
})

