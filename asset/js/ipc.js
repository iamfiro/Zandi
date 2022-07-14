var { ipcRenderer } = require('electron');
var isSelected;
var selectedId;
function clickCheckId() {
    isSelected = false;
    if(document.getElementById('id').value === undefined || document.getElementById('id').value === '') {
        document.getElementsByClassName('desc')[0].innerText = 'Github 아이디를 입력해주세요.';
        document.getElementsByClassName('desc')[0].style.display = 'block';
        document.getElementsByClassName('userdata')[0].style.display = 'none';
    } else {
        document.getElementsByClassName('desc')[0].style.display = 'none'
        ipcRenderer.send("checkGithubAcc", document.getElementById('id').value);
    }
}

ipcRenderer.on('reply', (event, data) => {
    if(data === '404') {
        document.getElementsByClassName('desc')[0].innerText = 'Github 아이디를 확인 해주세요.';
        document.getElementsByClassName('desc')[0].style.display = 'block';
        document.getElementsByClassName('start')[0].disabled = true;
        document.getElementsByClassName('start')[0].style.backgroundColor = '#434343';
        document.getElementsByClassName('start')[0].style.color = '#b4b4b4';
        document.getElementsByClassName('userdata')[0].style.display = 'none';
    } else if(data === 'Organization') {
        document.getElementsByClassName('desc')[0].innerText = 'Organization 계정은 등록이 되지 않습니다.';
        document.getElementsByClassName('desc')[0].style.display = 'block';
        document.getElementsByClassName('start')[0].disabled = true;
        document.getElementsByClassName('start')[0].style.backgroundColor = '#434343';
        document.getElementsByClassName('start')[0].style.color = '#b4b4b4';
        document.getElementsByClassName('userdata')[0].style.display = 'none';
    } else {
        document.getElementsByClassName('start')[0].disabled = false;
        document.getElementsByClassName('start')[0].style.backgroundColor = '#000';
        document.getElementsByClassName('start')[0].style.color = '#fff';

        document.getElementById('userdata_id').innerText = data.login;
        document.getElementById('userdata_img').src = data.avatar_url;
        document.getElementsByClassName('userdata')[0].style.display = 'flex';
        isSelected = true;
        selectedId = data.login;
    }
})

function start() {
    if(isSelected) {
        localStorage.setItem("first", 'yey');
        localStorage.setItem("id", selectedId);

        location.href = 'index.html'
    }
}