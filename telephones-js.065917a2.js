let e=document.querySelector(".form"),t=document.querySelector(".list"),n=[];function r(e){let n=e.map(({id:e,name:t,phone:n})=>`<li class="item" id="${e}">
                <h2 class="title">${t}</h2>
                <p class="text">${n}</p>
                <button type="button" class="edit" data-action="edit">Edit</button>
                <button type="button" class="delete" data-action="delete">Delete</button>
            </li>`).join("");t.insertAdjacentHTML("beforeend",n)}e.addEventListener("submit",e=>{if(e.preventDefault(),""===e.currentTarget.elements.name.value||""===e.currentTarget.elements.number.value)return void alert("Введіть коректні дані");let a={id:((e=21)=>{for(var t="",n=crypto.getRandomValues(new Uint8Array(e|=0));e--;)t+="57X6y3wQZNzYjJB2L_10pxbackgroundhimselfUTF-8DEMOGRAPHICSVqvt4KW9"[63&n[e]];return t})(),name:e.currentTarget.elements.name.value,phone:e.currentTarget.elements.number.value};n.push(a),t.innerHTML="",r(n),e.currentTarget.reset()}),t.addEventListener("click",e=>{if("BUTTON"!==e.target.nodeName)return;let a=e.target.closest("li");if(a.id,"delete"===e.target.dataset.action){let e=n.findIndex(({id:e})=>e===a.id);n.splice(e,1),t.innerHTML="",r(n)}});
//# sourceMappingURL=telephones-js.065917a2.js.map
