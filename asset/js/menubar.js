function clickent(i) {
    switch (i) {
        case 1:
            var { ipcRenderer } = require('electron');
            ipcRenderer.send('closeApp');
            break;
        case 2:
            var { ipcRenderer } = require('electron');
            ipcRenderer.send('minimizeApp');
            break;
        case 3:
            // const { ipcRenderer } = require('electron');
            // ipcRenderer.send('minimizeApp');
            break;
    }
}