const deleteButton = document.getElementById('deleteButton');
const deleteUI = document.getElementById('deleteBackground');
const deleteAccountList = document.getElementsByClassName('accountList')[0];

deleteButton.onclick = () => {
    deleteUI.style.display = 'flex';
    deleteAccountList.innerHTML = accountList.map((element) => `
        <div class="deleteAccountCard">
            <img src="${element.img}" class="deleteAccountImg">
            <div class="deleteAccountSide">
                <h3>${element.name}</h3>
                <button class="deleteDeleteButton">Borrar</button>
            </div>
        </div>
    `
    )
    .join("");
    
}

document.getElementsByClassName('closeArea')[0].onclick = () => {
    deleteUI.style.display = 'none';
}