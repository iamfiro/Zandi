function getDate(str) {
    var week = ['일', '월', '화', '수', '목', '금', '토'];
    var weekEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var dayOfWeek = localStorage.getItem("language") === 'ko' ? week[new Date(str).getDay()] : weekEn[new Date(str).getDay()] 
    return dayOfWeek;
}