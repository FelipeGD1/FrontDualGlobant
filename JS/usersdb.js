
let buttonSend = document.getElementById("button-signin");

let users = JSON.parse(localStorage.getItem("memory2")) || [];
console.log(users)


buttonSend.addEventListener('click', function (event) {
    event.preventDefault();
    let userEmailBox = document.getElementById("userEmail");
    let userEmailValue = userEmailBox.value;
    let userEmailLowerCase = userEmailValue.toLowerCase();

    let userPasswordBox = document.getElementById("userPassword");
    let userPasswordValue = userPasswordBox.value;

    toAccess(userEmailLowerCase, userPasswordValue);
})

let correctCredentials;

function toAccess(email, password){
    correctCredentials = validateCredentials(email, password);
    if(correctCredentials) {
        window.location.href = "../html/userPage.html";
    } else {
        swal.fire({
            icon: "error",
            html: '<p>Incorrect email or password.</p><p>Write them correctly and enter again.</p>'
        });
    }
}


function validateCredentials(email, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() == email) {
            if (users[i].password == password) {
                return true
            }
        }
    } return false;
}

