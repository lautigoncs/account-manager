const deleteButton = document.getElementById('deleteButton');
const deleteUI = document.getElementById('deleteBackground');
const deleteAccountList = document.getElementsByClassName('accountList')[0];
const accounts = Array.from(document.getElementsByClassName('account'));
const xButton = Array.from(document.getElementsByClassName('deleteXButton'));

// deleteButton.onclick = () => {
//     // When the button is clicked, the accounts show up in the menu.
//     deleteAccountsListBuilder();
//     // The menu appears.
//     deleteUI.style.display = 'flex';
//     // You can click the background to close the menu as well.
//     document.getElementsByClassName('closeArea')[0].onclick = () => {
//         deleteUI.style.display = 'none';
//     }
// }

// function deleteAccountsListBuilder() {
//     // For each element in the array, a card is created with its unique image, name and id.
//     deleteAccountList.innerHTML = accountList.map((element) => `
//     <div class="deleteAccountCard card${element.id}">
//         <img src="${element.img}" class="deleteAccountImg">
//         <div class="deleteAccountSide">
//             <h3>${element.name}</h3>
//             <h6>id : ${element.id}</h6>
//             <button class="deleteDeleteButton deleteButton" id="deleteButton${element.id}" onClick="deleteAccountButton(${element.id})">Borrar</button>
//         </div>
//     </div>
// `
// )
// .join("");
// }

deleteButton.onclick = () => {
    accounts.forEach((element) => {
        element.classList.toggle('shaky')
    });
    xButton.forEach((element) => {
        element.classList.toggle('invisible')
    })
}

function deleteAccountButton(i) {
    accounts.forEach((element) => {element.classList.remove('shaky')});
    document.getElementsByClassName(`account${i}`)[0].classList.add('disappear');
    setTimeout(() => {
        removeAccount(i);
        console.log('Cuenta Borrada')
        console.log(accountList);
        refresh(accountList);
        localStorage.setItem('storageValue', JSON.stringify(accountList));
    }, 345);
}

function removeAccount(id) {
    const objWithIdIndex = accountList.findIndex((obj) => obj.id === id);

    if (objWithIdIndex > -1) {
        accountList.splice(objWithIdIndex, 1);
    }

    return accountList;
}