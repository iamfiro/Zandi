var { ipcRenderer } = require('electron');

function getVersion(dom) {
    ipcRenderer.send("appVersion", localStorage.getItem("id"))
    ipcRenderer.on('reply', (event, data) => {
        dom.innerText = '앱 버전 : ' + data
    })
}