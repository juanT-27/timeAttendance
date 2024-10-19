let userInformation= [];
let userPlan= "";
let formActive= 0;

let forms=[
    document.querySelector("#informationForm"),
    document.querySelector("#planForm"),
    document.querySelector("#suscriptionSummarise")
];

const formsContainer= document.querySelector(".formContainer")

function showForm(form){
    let elementToClone= forms[form];
    const clone = document.importNode(elementToClone.content, true);
    let formItem= clone.querySelector(".formContainer");
    formsContainer.innerHTML=""
    formsContainer.appendChild(clone)

    formItem.addEventListener("submit", (e)=>{
        e.preventDefault()
        formActive+=1
        console.log(formActive)
        if(formActive > 2){
            formActive=0
        }
        showForm(formActive)
    }) 
    
}

document.addEventListener("DOMContentLoaded", ()=>{
   showForm(formActive);
})