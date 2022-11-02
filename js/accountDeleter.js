const deleteButton = document.getElementById('deleteButton');
const xButton = document.querySelectorAll('.deleteXButton');
// const deleteUI = document.getElementById('deleteBackground');
// const deleteAccountList = document.getElementsByClassName('accountList')[0];

// deleteAccountsListBuilder();

// deleteButton.onclick = () => {
//     deleteUI.style.display = 'flex';
//     document.getElementsByClassName('closeArea')[0].onclick = () => {
//         deleteUI.style.display = 'none';
//     }
// }

// function deleteAccountsListBuilder() {
//     deleteAccountList.innerHTML = accountList.map((element) => `
//     <div class="deleteAccountCard">
//         <img src="${element.img}" class="deleteAccountImg">
//         <div class="deleteAccountSide">
//             <h3>${element.name}</h3>
//             <button class="deleteDeleteButton deleteButton" id="deleteButton${element.id}">Borrar</button>
//         </div>
//     </div>
// `
// )
// .join("");
// }


deleteButton.onclick = () => {
    xButton.forEach((element) => {
        element.classList.toggle('invisible');
    })
}