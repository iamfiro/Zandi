function left() {
    if(document.getElementsByClassName('wrap')[0].style.display === 'block') {
        document.getElementsByClassName('wrap2')[0].style.display = 'block';
        document.getElementsByClassName('wrap')[0].style.display = 'none';
        document.getElementsByClassName('leftbutton')[0].style.opacity = 0.2;
        document.getElementsByClassName('rightbutton')[0].style.opacity = 0.5;
    }
    if(document.getElementsByClassName('wrap3')[0].style.display === 'block') {
        document.getElementsByClassName('wrap')[0].style.display = 'block';
        document.getElementsByClassName('wrap3')[0].style.display = 'none';
        document.getElementsByClassName('leftbutton')[0].style.opacity = 0.5;
        document.getElementsByClassName('rightbutton')[0].style.opacity = 0.5;
    }
}

function right() {
    if(document.getElementsByClassName('wrap2')[0].style.display === 'block') {
        document.getElementsByClassName('wrap')[0].style.display = 'block';
        document.getElementsByClassName('wrap2')[0].style.display = 'none';
        document.getElementsByClassName('rightbutton')[0].style.opacity = 0.2;
        document.getElementsByClassName('leftbutton')[0].style.opacity = 0.5;
    } else if(document.getElementsByClassName('wrap')[0].style.display === 'block') {
        document.getElementsByClassName('rightbutton')[0].style.opacity = 0.2;
        document.getElementsByClassName('leftbutton')[0].style.opacity = 0.5;
    }
}