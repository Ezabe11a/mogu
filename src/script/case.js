$(function () {
    //获取url中的参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    }
    //接收URL中的参数goodsId
    var id = getUrlParam('goodsId');
    // console.log(id);
    // console.log($("title").html());


    $.ajax({
        type: 'get',
        url: '../iconfont/case.json',
        dataType: 'json',
        success: function (res, status) {
            $.each(res.cases, function (index, val) {
                //根据id获取详情数据
                if (id == val.id) {
                    var str_title = val.title;
                    var str_shop = val.shop;
                    var str_banner = `<img src="${val.banner}">`;
                    var str_Sshowpic = `
                    <div class="case_pic">
                        <img src="${val.showpic}" alt="">
                    </div>
                        <span>
                        <img src="${val.showpic}" alt="">
                    </span>
                    <span>
                        <img src="${val.showpic}" alt="">
                    </span>
                    <span>
                        <img src="${val.showpic}" alt="">
                    </span>
                    <span>
                        <img src="${val.showpic}" alt="">
                    </span>
                    <span>
                        <img src="${val.showpic}" alt="">
                    </span>
                    `;
                    var str_price = val.price;
                    var str_relPrice = val.relPrice;
                    var str_sell = val.sell;
                    var str_base = val.base;
                    var str_show =`
                    <img src="${val.pic1}" alt="">
                    <img src="${val.pic2}" alt="">

                    `;
                }
                $("title").text(str_title);
                $(".shop_case>p").text(str_title);
                $(".shop_info>a").text(str_shop);
                $(".case_wrap_lefttop ul>li>a").text(str_shop);
                $(".shop_ad_con").append(str_banner);
                $(".case_left").append(str_Sshowpic);
                $(".case_right>h2").text(str_title);
                $(".price").text(str_price);
                $(".relPrice").text(str_relPrice);
                $('.sell').text(str_sell);
                $('.base>em').text(str_base);
                $(".show_box").append(str_show);

            });
        },
        error: function (error) {
            console.log(error)
        }
    })
})