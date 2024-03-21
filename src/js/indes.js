var formManager = document.getElementById("formManager");
var formUser = document.getElementById("formUser");
var changeRoleButton = document.getElementById("changeRole");
formManager.style.display = "block";
formUser.style.display = "none";
changeRoleButton.textContent = "Manager";

function changeRole() {    // Toggle the visibility of the forms
    if (formManager.style.display === "none") {
        formManager.style.display = "block";
        formUser.style.display = "none";
        changeRoleButton.textContent = "Manager";
    } else {
        formManager.style.display = "none";
        formUser.style.display = "block";
        changeRoleButton.textContent = "User";
    }
}