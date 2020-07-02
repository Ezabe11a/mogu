$(function () {
    $.ajax({
        type: "get",
        url: "./iconfont/case.json",
        dataType: "json",
        success: function (res, status) {
            var str = '';
            $.each(res.cases, function (index, val) {
                str += `
                 <figure>
                    <img src="${val.showpic}" alt="">
                    <figcaption>
                        <h3 class="hidden_text">${val.title}</h3>
                        <p>快抢价</p>
                        <b>￥${val.relPrice}</b>
                        <p>￥${val.price}</p>
                        <p>已抢${val.sell}件</p>
                        <a href="./case.html?goodsId=${val.id}">立即抢购</a>
                        <p>仅剩${val.base}件</p>
                    </figcaption>
                </figure>
                 `;
                if (index < 7) {
                    $('.actcase_left').prepend(str);
                }
            });
        },
        error: function (error) {
            console.log(error);
        }
    });
})