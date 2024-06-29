let containerTarget = document.getElementById("fila");
let imageTarget = document.getElementById("imageTarget");


function print() {
    let users = JSON.parse(localStorage.getItem("memory"));
    imageTarget.src = "";
    containerTarget.innerHTML = "";


    users.forEach(producto=> {
        let target = document.createElement("div");
        target.classList.add("target");
        containerTarget.appendChild(target);

        let name = document.createElement("p");
        name.classList.add("userName");
        name.textContent = "Name: "+producto.name;
        target.appendChild(name);

        let prize = document.createElement("p");
        prize.textContent = "Prize: " + producto.prize;
        target.appendChild(prize);
        
        let description = document.createElement("p");
        description.textContent = "Description: " + producto.description;
        target.appendChild(description);

        let image = document.createElement('img');
        image.src = "../images/"+producto.photo;
        var nuevoAncho = 100; // ancho deseado
        var nuevoAlto = 130; // altura deseada
        image.style.width = nuevoAncho + "px";
        image.style.height = nuevoAlto + "px";
        target.appendChild(image);
    })
}

print();