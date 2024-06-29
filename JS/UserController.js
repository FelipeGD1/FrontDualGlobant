let boxName= document.getElementById("name");
let boxPrize= document.getElementById("prize");
let boxDescription= document.getElementById("description");
let boxButton= document.getElementById("button")
let boxButtonBodega= document.getElementById("buttonBodega");
let imageUrlInput = document.getElementById("photo");
let containerTitle = document.getElementById("titulo");

let users = JSON.parse(localStorage.getItem("memory2")) || [];
let productos= [];

window.onload= function(){
    getUserList();
    
    init();
    
}


function init(){
    
    users.forEach(user=> {
    containerTitle.innerHTML = "";

    let target2 = document.createElement("div");
    target2.classList.add("target2");
    containerTitle.appendChild(target2);
    
    let Username = document.createElement("p");
    Username.classList.add("userName");
    Username.textContent = "Hello " + user.firstName;
    target2.appendChild(Username);
    })
}



boxButton.addEventListener('click', function (evento){
    evento.preventDefault()
    
    let producto= {
        name: boxName.value,
        prize: boxPrize.value,
        description: boxDescription.value,
        photo: imageUrlInput.value
    }
    
    productos.push(producto);
    localStorageSend();
    console.log(producto.photo)
    
})

function getUserList(){
    let storeProduct= localStorage.getItem('memory');
    if(storeProduct){
        productos= JSON.parse(storeProduct);
    }
}

function localStorageSend(){
localStorage.setItem('memory', JSON.stringify(productos));
//mostrando alerta sacada de sweetalert
Swal.fire({
    title: "Good job!",
    text: "Producto registrado con exito",
    icon: "success"
});
}