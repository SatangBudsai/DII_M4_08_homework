let outputNotifi = document.getElementById('notification');
let counter =0;


document.getElementById('submit').addEventListener('click',function counterNotifi(){
    counter += 1;
    outputNotifi.innerText=counter;
    console.log(counter);
});


let inputGender = document.getElementById('gender');
let inputName = document.getElementById('name');
let inputUsername = document.getElementById('username');
let table = document.getElementById('table');
function addName(){
    let gender = inputGender.value;
    let name = inputName.value;
    let username = inputUsername.value;
    console.log(gender);
    console.log(name);
    console.log(username);
    newRow = document.createElement('tr');
    newGender = document.createElement('td');
    newName = document.createElement('td');
    newUsername = document.createElement('td');
    newGender.innerText = gender;
    newName.innerText = name;
    newUsername.innerText = username;
    table.appendChild(newRow);
    newRow.appendChild(newGender);
    newRow.appendChild(newName);
    newRow.appendChild(newUsername);
}
document.getElementById('submit').addEventListener('click',addName);