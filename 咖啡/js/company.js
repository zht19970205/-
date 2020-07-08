var con = document.getElementsByClassName('content-list-box')
var tit = document.getElementsByTagName('article')
var ii = document.getElementsByTagName('i')
for (var i in con) {
    con[i].onclick = function () {
        
        for (i = 0;i<con.length;i++) {
            tit[i].className=''
            ii[i].className=''
        }
        var i = this.getAttribute('hh');
        tit[i].className += 'active';
        ii[i].className +='active'
    }
}