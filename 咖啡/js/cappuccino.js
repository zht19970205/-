var con = document.getElementsByClassName('content-list-box')
var tit = document.getElementsByTagName('article')
var ii = document.getElementsByTagName('i')
for (var i in con) {
    con[i].onclick = function () {

        for (i = 0; i < con.length; i++) {
            tit[i].className = ''
            ii[i].className = ''
        }
        var i = this.getAttribute('bb');
        tit[i].className += 'active';
        ii[i].className += 'active'
    }
}
var img = document.getElementsByTagName('img')
var banner = document.getElementsByClassName('banner')[0]
var j = 0

function fn() {
    for (var i in img) {
        j++
        if (j == 3) {
            j = 0
        }
        banner.style.left = j * (-100) + '%'
    }
}
timer = setInterval(function () {
    fn()
}, 3000)
banner.onmouseenter = function () {
    clearInterval(timer);
    timer = null;
}

banner.onmouseleave = function () {
    timer = setInterval(function () {
        fn()
    }, 3000)
}