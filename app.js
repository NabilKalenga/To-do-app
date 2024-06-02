let input = document.querySelector("#txt-input")
let btn = document.querySelector(".btn-add")
let ul = document.querySelector(".add-list")

//when i click on the button these function will run
function add(){
    if(input.value===""){
        alert("Write something there")
    } else{
        const li=document.createElement("li")
        //this is where the user will input the value using the add button
        li.innerHTML=`<p>${input.value}</p>` + `<button class="btn btn-line">&#10006;</button>`
        ul.appendChild(li)

        const listener=document.querySelector("li")
        
    }
    input.value= ""
    
}
ul.addEventListener("click", function(p){
    if(p.target.tagName==="LI")
        {
            p.target.classList.toggle("check-li")
            p.target.childNodes[0].classList.toggle("check")
            console.log(p.target)
        } else if(p.target.tagName==="BUTTON")
            {
                p.target.parentElement.remove()
            }
},
false

)