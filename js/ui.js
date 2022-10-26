let uiSpace = document.getElementById('uiSpace');
const button = document.getElementsByTagName('button')[0];

button.onclick = () => {
    uiSpace.classList.add('uiSpaceCurrent');
    uiSpace.innerHTML = `
        <div id="uiBackground" class="backgroundStart">
            <div id="ui" class="uiStart first">
                <p>Introducir Nombre de Usuario</p>
                <input class="input" id='usernameInput' required>
                <button class="button" id="next1"> Siguiente 👉</button>
            </div>
        </div>
    `
    let firstStateButton = document.getElementById('next1');
    firstStateButton.onclick = () => {
        let username = usernameInput.value;
        console.log(username);
        next('first');

        setTimeout(() => {
            uiSpace.innerHTML = `
            <div id="uiBackground">
                <div id="ui" class="uiStart second">
                    <p>Introducir Contraseña</p>
                    <input class="input" id='passwordInput' required>
                    <button class="button" id="next2"> Siguiente 👉</button>
                </div>
            </div>
            `
            let secondStateButton = document.getElementById('next2');
            secondStateButton.onclick = () => {
                let password = passwordInput.value;
                console.log(password);
                next('second');

                setTimeout(() => {
                    uiSpace.innerHTML = `
                    <div id="uiBackground">
                        <div id="ui" class="uiStart third">
                            <p>Introducir Foto</p>
                            <input class="input" id='imgInput' required>
                            <button class="button" id="next3"> Terminar 👉</button>
                        </div>
                    </div>
                `
                let thirdStateButton = document.getElementById('next3');
                thirdStateButton.onclick = () => {
                    let img = imgInput.value;
                    console.log(img);
                    finish('third');
                    accountList.push({
                        name: username,
                        password: password,
                        img: img,
                        id: (accountList.length + 1)
                    })
                    localStorage.setItem('storageValue', JSON.stringify(accountList));
                    refresh(accountList);
                    setTimeout(() => {
                        uiSpace.innerHTML = ""
                        uiSpace.classList.remove('uiSpaceCurrent');
                    }, 345)
                }
                },345)
        }
        },345)
    }
}

function next(element) {
    document.getElementsByClassName(`${element}`)[0].classList.remove('uiStart');
    document.getElementsByClassName(`${element}`)[0].classList.add('uiNext');
}

function finish(element) {
    document.getElementsByClassName(`${element}`)[0].classList.remove('uiStart');
    document.getElementsByClassName(`${element}`)[0].classList.add('uiFinish');
    document.getElementById('uiBackground').classList.add('backgroundFinish');
}