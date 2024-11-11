const desmondPlayer = document.querySelector('desmond-player')

window.onload = () => {
    setTimeout(() => {
        desmondPlayer.shadowRoot.querySelector("#top").style = "position: fixed;transform: translate(-50%, -50%);width: 40%;left: 50%;top: 30%;height: 40%;";
        desmondPlayer.shadowRoot.querySelector("#bottom").style = "position: fixed;transform: translate(-50%, -50%);width: 40%;left: 50%;top: 70%;height: 40%;";
    }, 1000)
}

document.querySelector('#gameInput').onchange = () => {
    desmondPlayer.loadURL(URL.createObjectURL(document.querySelector("#gameInput").files[0]))
}