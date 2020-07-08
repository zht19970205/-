// 轮播图
function wrap(imgs, btns, lis, j, carousel) {
    this.imgs = imgs;
    this.btns = btns;
    this.lis = lis;
    this.j = j;
    this.carousel = carousel;
}
// 创建init方法
wrap.prototype.init = function() {
    this.bind();
    this.time(1);
}
wrap.prototype.bind = function() {
        var me = this;
        for (var i in this.btns) {
            this.btns[i].onclick = function() {
                if (this.innerHTML == "&gt;") {
                    me.dh(1);
                } else {
                    me.dh(-1);
                }
            }
        }
        for (var i in this.lis) {
            this.lis[i].onclick = function() {
                me.j = parseInt(this.getAttribute("tt"));
                me.dh();
            }
        }
        this.carousel.onmouseover = function() {
            me.time()
        }
        this.carousel.onmouseout = function() {
            me.time(1)
        }
    }
    // 创建动画方法
wrap.prototype.dh = function(num) {
        if (num !== undefined) {
            this.j += num;
            if (this.j == 3) {
                this.j = 0;
            } else if (this.j == -1) {
                this.j = 2;
            }
        }
        for (var i in lis) {
            this.lis[i].className = "";
            this.imgs[i].className = "";
        }
        this.lis[this.j].className = "active";
        this.imgs[this.j].className = "active";
    }
    // 创建定时器方法
wrap.prototype.time = function(x) {
    var me = this;
    if (x == undefined) {
        clearInterval(me.timer);
        me.timer = null;
    } else {
        me.timer = setInterval(function() {
            me.dh(1);
        }, 2000)
    }
}
var carousel = document.getElementsByClassName("carousel")[0];
var imgs = carousel.getElementsByTagName("img");

var btns = document.getElementsByTagName("button");

var lis = carousel.getElementsByTagName("li");
console.log(lis);

var dad = new wrap(imgs, btns, lis, 0, carousel); //给wrap传参

window.onload = function() {
    dad.init();
}