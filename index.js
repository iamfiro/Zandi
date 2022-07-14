const { app, BrowserWindow, ipcMain, dialog  } = require('electron')
let request = require('request')
var cheerio = require('cheerio');
const { autoUpdater } = require("electron-updater");
const log = require('electron-log');

function createWindow() {
  const win = new BrowserWindow({
    width: 300,
    height: 450,
    frame: false,
    // autoHideMenuBar: true,
    transparent: true,
    icon: __dirname + '/asset/icon/icon.png',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })
  win.loadFile('index.html');

  autoUpdater.on('checking-for-update', () => {
    log.info('업데이트 확인 중...');
  });
  autoUpdater.on('update-available', () => {
    dialog
      .showMessageBox({
        type: 'info',
        title: 'Update available',
        message:
          'A new version of Project is available. Do you want to update now?',
        buttons: ['Update', 'Later'],
      })
      .then((result) => {
        const buttonIndex = result.response;

        if (buttonIndex === 0) autoUpdater.downloadUpdate();
      });
  });
  autoUpdater.on('update-not-available', (info) => {
    log.info('현재 최신버전입니다.');
  });
  autoUpdater.on('error', (err) => {
    log.info('에러가 발생하였습니다. 에러내용 : ' + err);
  });
  autoUpdater.on('download-progress', (progressObj) => {
    let log_message = "다운로드 속도: " + progressObj.bytesPerSecond;
    log_message = log_message + ' - 현재 ' + progressObj.percent + '%';
    log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
    log.info(log_message);
  })
  autoUpdater.on('update-downloaded', (info) => {
    log.info('업데이트가 완료되었습니다.');
  });

  ipcMain.on('minimizeApp', () => {
    win.minimize();
  })

  ipcMain.on('closeApp', () => {
    win.close();
  })
}

ipcMain.on('init', (event, data) => {
  request({ url: 'https://github.com/' + data }, function (err, response, body) {
    event.reply('reply', body)
  });
});

ipcMain.on('settinginit', (event, data) => {
    event.reply('reply', app.getVersion())
});

ipcMain.on('checkGithubAcc', (event, data) => {
  request({
    url: 'https://api.github.com/users/' + data,
    headers: {
      'User-Agent': 'MY IPHINE 7s'
    }
  }, function (err, response, body) {
    response.statusCode === 404 ? event.reply('reply', '404') : JSON.parse(body).type === 'User' ? event.reply('reply', JSON.parse(body)) : event.reply('reply', 'Organization')
  });
});

app.whenReady().then(() => {
  createWindow();
  autoUpdater.checkForUpdates();
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})