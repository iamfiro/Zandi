var { ipcRenderer } = require('electron');
var isSelected;
var selectedId;
var startDom = document.getElementsByClassName('start')[0];
var userDataDom = document.getElementsByClassName('userdata')[0];
var descDom = document.getElementsByClassName('desc')[0];

function clickCheckId() {
    let idDom = document.getElementById('id');
    isSelected = false;
    if(idDom.value === undefined || idDom.value === '') {
        localStorage.getItem("language") === 'ko' ? descDom.innerText = 'Github 아이디를 입력해주세요.' : descDom.innerText = 'Enter the Github Id';
        descDom.style.display = 'block';
        userDataDom.style.display = 'none';
    } else {
        descDom.style.display = 'none'
        ipcRenderer.send("checkGithubAcc", idDom.value);
    }
}

ipcRenderer.on('reply', (event, data) => {
    if(data === '404') {
        localStorage.getItem("language") === 'ko' ? descDom.innerText = 'Github 아이디를 확인 해주세요.' : descDom.innerText = 'Check your Github Id'
        descDom.style.display = 'block';
        startDom.disabled = true;
        startDom.style.backgroundColor = '#434343';
        startDom.style.color = '#b4b4b4';
        userDataDom.style.display = 'none';
    } else if(data === 'Organization') {
        localStorage.getItem("language") === 'ko' ? descDom.innerText = 'Organization 계정은 등록이 되지 않습니다.' : descDom.innerText = 'Organization acc is not allowed';
        descDom.style.display = 'block';
        startDom.disabled = true;
        startDom.style.backgroundColor = '#434343';
        startDom.style.color = '#b4b4b4';
        userDataDom.style.display = 'none';
    } else {
        startDom.disabled = false;
        startDom.style.backgroundColor = '#000';
        startDom.style.color = '#fff';
        document.getElementById('userdata_id').innerText = data.login;
        document.getElementById('userdata_img').src = data.avatar_url;
        userDataDom.style.display = 'flex';
        isSelected = true;
        selectedId = data.login;
    }
})

function start() {
    if(isSelected) {
        localStorage.setItem("check_first", 'yey');
        localStorage.setItem("id", selectedId);
        location.href = '../index.html';
    }
}