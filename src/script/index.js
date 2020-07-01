$(function () {
    banner();
    $.ajax({
        type: 'get',
        url: '../iconfont/index.json',
        dataType: 'json',
        success: function (res) {
            var str = "";
            console.log(res.product_center);
            var str_c = "";
            $.each(res.product, function (index, val) {
                str += `
                <figure>
                    <img src="${val.src}" alt="">
                </figure>
                `;
            });
            $.each(res.product_center, function (index, val) {
                str_c += `
                <figure>
                    <img src="${val.src}" alt="">
                </figure>
                `;
            });
            $('.goodscon_center_case').append(str_c);
            $('.goodscon_left').append(str); 
            $('.goodscon_right').append(str);
        },
        error: function (error) {
            console.log(error);
        }
    });

    /* 轮播图 */
    function banner() {
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

    }
})

