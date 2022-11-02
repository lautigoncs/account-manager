
// place where the cards will be displayed.
const space = document.getElementById('accountList');
// make the json a string
const storageJSON = JSON.parse(localStorage.getItem('storageValue'));
// set this variable so you can import storage's value if it has one or to make an empty array.
let storageValue = [];
// if the json is not empty, make it the value of storageValue.
if(storageJSON != null) {
    storageValue = storageJSON;
}
// let the accountList variable (the array with all the accounts in it) be the value of storageValue.
const accountList = storageValue;

//BUILD CARDS 
function refresh(accounts) {
    // build a card for each element in the array.
    space.innerHTML = accounts.map((element) => `
            <div class="account">
                <a class="deleteXButton invisible">
                    <p>X</p>
                    <div class="deleteXButtonBackground"></div>
                </a>
                <img src="${element.img}" class="accountImage">
                <input type="text" value="${element.name}" class="input" id="name${element.id}" readonly>
                <input type="password" value="${element.password}" class="input" id="password${element.id}" readonly>
            </div>
        `
        )
        .join("");
    
    accountList.forEach(element => {
        document.getElementById(`name${element.id}`).onclick = () => {
            navigator.clipboard.writeText(document.getElementById(`name${element.id}`).value);
        }
        document.getElementById(`password${element.id}`).onclick = () => {
            navigator.clipboard.writeText(document.getElementById(`password${element.id}`).value);
        }
    })
}

// call the function so it displays the cards when you first login.
refresh(accountList);



