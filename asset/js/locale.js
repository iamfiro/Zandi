var { ipcRenderer } = require('electron');

function did(id, text) {
    return document.getElementById(id).innerHTML = text;
}

ipcRenderer.send("getLocale", localStorage.getItem('language'));
ipcRenderer.on('getLocaleReply', (event, data) => {
    jd = data.json[0]
    if(screenName === 'welcome') {
        did('welcome_title', jd.welcome_hello)
        did('welcome_description', jd.welcome_description)
        did('welcome_button', jd.welcome_button)
    } else if(screenName === 'gitSet') {
        did('gitset_title', jd.gitSet_title)
        did('gitset_check', jd.gitSet_check)
        did('gitset_start', jd.gitSet_start)
        did('gitset_thisisyouracc', jd.gitSet_thisisyouracc)
    } else if(screenName === 'main') {
        did('main_today-commit', jd.main_todaycommit)
        did('main_1week', jd.main_1week)
    } else if(screenName === 'setting') {
        did('setting_changeacc', jd.setting_changeAcc)
    }
})