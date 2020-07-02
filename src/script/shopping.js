$(function () {
    var id = getCookie('id');
    // console.log(id);
    var zero = `
    <div class="messbox">
        <img src="./images/shopingcar.png" alt="">
        <p>您的购物车还是空的，赶快去挑选商品吧！</p>
        <span>去<a href="./list.html">商城</a>和<a href="./index.html">首页</a>看看吧</span>
    </div>`;

    if (!getCookie('id')) {
        $('.shoppingcar_con').html(zero);
    } else {
        $.ajax({
            type: "get",
            url: "./iconfont/case.json",
            dataType: "json",
            success: function (res, status) {
                $.each(res.cases, function (index, val) {
                    if (id == val.id) {
                        var str = `
                    <div class="case_box">
                        <div class="case_box_wrap">
                            <div class="case_wrap_header">
                                <div class="case_wrap_header_con">
                                    <h2>
                                        <a href="javascript:;">
                                            全部商品<b>&nbsp;1</b>
                                        </a>
                                        <a href="javascript:;">
                                            优惠<b>&nbsp;1</b>
                                        </a>
                                        <a href="javascript:;">
                                            库存紧张<b>&nbsp;0</b>
                                        </a>
                                    </h2>
                                </div>
                            </div>
                            <div class="case_Bcon">
                                <div class="case_Bcon_top">
                                    <input type="checkbox" id="">
                                    <span>全选</span>
                                    <span>商品信息</span>
                                    <span>单价（元）</span>
                                    <span>数量</span>
                                    <span>小计（元）</span>
                                    <span>操作</span>
                                </div>
                                <div class="case_row">
                                    <div class="case_row_shopN">
                                        <input type="checkbox">
                                        <span>${val.shop}</span>
                                    </div>
                                    <div class="case_row_con">
                                        <div class="case_row_box">
                                            <input type="checkbox">
                                            <img src="${val.showpic}" alt="">
                                            <span>
                                                <a href='case.html?goodsId=${val.id}'
                                                    class="hidden_text">${val.title}</a>
                                                <b>降价<em>${val.price - val.relPrice}</em></b>
                                            </span>
                                            <span>
                                                <p>颜色：<em>${val.color}</em></p>
                                                <p>尺码：<b>${getCookie('size')}</b></p>
                                            </span>
                                            <span>
                                                <p>${val.price}</p>
                                                <p>${val.relPrice}</p>
                                                <p>${((val.relPrice / val.price).toFixed(2)) * 10}折</p>
                                            </span>
                                            <div class="count_box">
                                                <div class="count_btn">
                                                    <input class="count_btn cut_btn" type="button" value="-">
                                                    <input class="count_text" type="text" value="${getCookie('num')}">
                                                    <input class="count_btn add_btn" type="button" value="+">
                                                </div>
                                            </div>
                                            <span>${val.relPrice * getCookie('num')}</span>
                                            <a class="remove" href="javascript:;">删除</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="case_Bcon_bottom">
                                    <input type="checkbox" >
                                    <span>全选</span>
                                    <a href="javascript:;">删除</a>
                                    <a href="javascript:;">清空售罄商品</a>
                                    <a href="javascript:;">移入收藏夹</a>
                                    <span>共有<b>&nbsp;${getCookie('num')}&nbsp;</b>件商品，总计:</span>
                                    <span>￥${val.relPrice * getCookie('num')}</span>
                                    <a href="javascript:;">付款</a>
                                </div>
                            </div>
                        </div>
                    </div>`;
                        $('.shoppingcar_con').html(str);
                    }
                })
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    
})
/* 数量加减 */
$('.count_btn').click(function () {
    console.log(111);
    if ($(this).hasClass('add_btn')) {
        $('.count_text').val(parseInt($('.count_text').val()) + 1);
    } else if ($(this).hasClass('cut_btn')) {
        if (parseInt($('.count_text').val()) < 1) {
            return
        }
        $('.count_text').val(parseInt($('.count_text').val()) - 1);
    }
});

/* 删除商品 */
$('.remove').click(function(){
    $('.case_row').html('');
});