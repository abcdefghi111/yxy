window.addEventListener("load", function() {
    var go = document.getElementById("go");
    var to = document.getElementById("to");
    var w = go.offsetWidth;
    var index = 0;
    var startX = 0;
    var moveX = 0;
    var img_l = to.getElementsByClassName("image").length;
    document.getElementById("one").innerHTML = index + 1;
    document.getElementById("imge").innerHTML = img_l - 1;

    to.addEventListener("touchstart", start, false);

    function start(e) {
        var e = e || window.event;
        startX = e.changedTouches[0].pageX;
    }

    to.addEventListener("touchmove", move, false);

    function move(e) {
        var e = e || window.event;
        moveX = e.changedTouches[0].pageX - startX;
        var translatex = -index * w + moveX;
        to.style.transform = "translatex(" + translatex + "px)";
    }

    to.addEventListener("touchend", end, false);

    function end(e) {
        if (Math.abs(moveX) > 50) {
            if (moveX > 0) {
                index--;
            } else {
                index++;
            }
            if (index == -1) {
                index = 0;
            }
            if (index == 3) {
                window.scroll(0, 1000);
                index = 2;
            }
            var translatex = -index * w;

            to.style.transition = "all .3s";
            to.style.transform = "translatex(" + translatex + "px)";
            document.getElementById("one").innerHTML = index + 1;
        } else {
            var translatex = -index * w;
            to.style.transform = "translatex(" + translatex + "px)";
            document.getElementById("one").innerHTML = index + 1;
        }
    }
});
window.addEventListener("scroll", function() {
    if (window.pageYOffset >= go.offsetHeight) {
        topend.style = "display: block;";
    } else {
        topend.style = "display: none;";
    }
    topend.addEventListener("click", onclick, false);

    function onclick() {
        window.scroll(0, 0);
    }
});

/* window.onload = function() {
    var to = document.getElementById("to");
    var toleft = to.offsetLeft;
    const img_l = to.getElementsByClassName("image").length;
    var a = 1;
    var startX;
    var moveX;
    to.addEventListener("touchstart", start, false);

    function start(e) {
        var e = e || window.event;
        startX = e.changedTouches[0].pageX;
    }
    to.addEventListener("touchmove", move, false);

    function move(c) {
        var c = c || window.event;
        moveX = c.changedTouches[0].pageX;
        X = moveX - startX;
        Y = moveY - startY;
        if (X > -Y && X > 0) {
            // console.log("left on right")
            if (a != 0) {
                to.style.left = toleft + 300 + "px";
            }
            console.log(toleft);
        }
        a++;
        if (-X > Y && X < 0) {
            // console.log("right on left")
            if (a != img_l + 1) {
                to.style.left = toleft - 300 + "px";
            }
            console.log(toleft);
        }
    }
    console.log(a);
    document.getElementById("one").innerHTML = a;
    document.getElementById("imge").innerHTML = img_l;
}; */