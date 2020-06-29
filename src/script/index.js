/* 轮播图 */
$(function () {
    var i = 1;
    var timer1 = null;
    function bannermove() {
        $(".banner .banner_pic").attr("src", function () {
            var index = "./images/goods/goodsbanner/b" + i + ".jpg";
            return index;
        });
        i++;
        if (i > 6)
            i = 1;
    }
    timer1 = setInterval(bannermove, 2000);
})

