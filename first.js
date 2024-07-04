const title=document.querySelector("#title");
const nameField=document.querySelector("#nameField");

function signUP(){
     title.textContent="Login";
    nameField.style.display="none";
}

function signIN(){
    title.textContent="Sign Up";
    nameField.style.display="block";
}
