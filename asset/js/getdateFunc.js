function getDate(str) {
    var week = ['일', '월', '화', '수', '목', '금', '토'];
    var dayOfWeek = week[new Date(str).getDay()];
    return dayOfWeek;
}