const { ipcRenderer } = require('electron');
function clickent(i) {
    switch (i) {
        case 1:
            ipcRenderer.send('closeApp');
            break;
        case 2:
            ipcRenderer.send('minimizeApp');
            break;
        case 3:
            // ipcRenderer.send('minimizeApp');
            break;
    }
}