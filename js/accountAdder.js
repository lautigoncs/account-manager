const uiSpace = document.getElementById('uiSpace');
const button = document.getElementsByTagName('button')[0];
const accountArea = document.getElementById('ui');
let username = ""
let password = ""
let img = ""


button.onclick = () => {
    uiSpace.classList.add('uiSpaceCurrent');
    uiSpace.style.display = 'inline';
    document.getElementsByClassName('closeArea2')[0].onclick = () => {
        finish();
    }
    accountArea.classList.add('uiStart')
    accountArea.classList.remove('uiFinish')
    document.getElementById('uiBackground').classList.remove('backgroundFinish')

    accountArea.innerHTML = `
        <p>Introducir Nombre de Usuario</p>
        <input class="input" id='usernameInput' required>
        <button class="button" id="next"> Siguiente 👉</button>
    `
    document.getElementById('next').onclick = () => {
        username = document.getElementById('usernameInput').value;
        console.log(username);

        accountArea.classList.add('uiFirstState')

        setTimeout(() => {
            accToPass();
        }, 345)
    }
}

function accToPass() {
    accountArea.classList.remove('uiFirstState')
    accountArea.classList.add('uiSecondState')

    accountArea.innerHTML = `
    <p>Introducir Contraseña</p>
    <input class="input" id='passwordInput' required>
    <button class="button" id="next2"> Siguiente 👉</button>
    `

    
    document.getElementById('next2').onclick = () => {
        password = document.getElementById('passwordInput').value;
        console.log(password);

        accountArea.classList.add('uiFirstState')
        accountArea.classList.remove('uiSecondState')

        setTimeout(() => {
            passToImg();
        }, 345)
    }
}

function passToImg() {
    accountArea.classList.add('uiSecondState')
    accountArea.classList.remove('uiFirstState')

    accountArea.innerHTML = `
    <p>Introducir Imagen</p>
    <input class="input" id='imgInput' required>
    <button class="button" id="next3"> Siguiente 👉</button>
    `
    document.getElementById('next3').onclick = () => {
        img = document.getElementById('imgInput').value;
        console.log(img);
        finish();
        pushAccount();
    }
}

function finish() {
    accountArea.classList.add('uiFinish')
    document.getElementById('uiBackground').classList.add('backgroundFinish')
    setTimeout(() => {
        accountArea.innerHTML = "";
        uiSpace.style.display = 'none';
        localStorage.setItem('storageValue', JSON.stringify(accountList));
        refresh(accountList);
    }, 345)
}

function pushAccount() {
    let preID = '';
    if (accountList.length == 0) {
        preID = 1;
        console.log(preID);
    } else {
        preID = accountList[accountList.length - 1].id + 1;
        console.log(preID);
    }

    accountList.push({
        name: username,
        password: password,
        img: img,
        id: preID
    })

}