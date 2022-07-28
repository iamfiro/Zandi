var { ipcRenderer } = require('electron');

function getVersion(dom) {
    ipcRenderer.send("appVersion", localStorage.getItem("id"))
    ipcRenderer.on('reply', (event, data) => {
        dom.innerText = localStorage.getItem("language") === 'ko' ? '앱 버전 : ' + data : 'App version : ' + data
    })
}