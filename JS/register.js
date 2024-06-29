let userFirstNameBox = document.getElementById("userName");
let userEmailBox = document.getElementById("userEmail");
let userPasswordBox = document.getElementById("userPassword");
let buttonSend = document.getElementById("submit-register");


let users = [];
window.onload = function () {
    getUsersList();
};

buttonSend.addEventListener('click', function (event) {
    event.preventDefault();
    let user = {
        firstName: userFirstNameBox.value,
        email: userEmailBox.value,
        password: userPasswordBox.value
    }
    verificationRegister(userEmailBox.value);
    users.push(user);
    localStorage.setItem('memory2', JSON.stringify(users));

    
})

//Funcion para mandar mensajes si hay usuarios registrados
function verificationRegister(email){
    if(emailExist(email)){
        swal.fire({
            icon: "error",
            html: '<p>The email entered is already registered.</p><p>Please enter a different email.</p>'
        });
    } else {
        Swal.fire({
            title: "¡Good Job!",
            text: "You have successfully registered",
            icon: "success"
        });
    }
}


//Funcion para validar usuarios registrados
function emailExist(email) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() == email.toLowerCase()) {
            return true;
        }
    }
    return false;
    
}

function getUsersList() {
    // Intentar obtener la lista de usuarios del localStorage
    let storedUsers = localStorage.getItem('memory2');

    // Si hay usuarios almacenados, parsearlos y asignarlos a la variable users
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    }
}





