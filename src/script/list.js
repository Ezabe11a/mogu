/* 商品列表样式 */
$(function () {
    $.ajax({
        type: "get",
        url: "./iconfont/case.json",
        dataType: "json",
        success: function (res) {
            // console.log(res.cases);
            var str = "";
            var tep = "";
            $.each(res.cases, function (index, val) {
                str += `
                <figure>
                <a target='_blank' href='case.html?goodsId=${val.id}'>
                        <img src="${val.showpic}" alt="">
                        <figcaption>
                            <p>${val.title}</p>
                            <b>${val.relPrice}</b>
                            <span>${val.price}</span>
                        </figcaption>
                    </a>
                </figure>
                `;
                tep += `
                <figure class="swiper-slide">
                <a target='_blank' href='case.html?goodsId=${val.id}'>
                        <img src="${val.showpic}" alt="">
                        <figcaption>
                            <p>${val.title}</p>
                            <b>${val.relPrice}</b>
                        </figcaption>
                        </a>
                </figure>
                `;

                // console.log(index);
            })
            $('.active_wrap_rightBox').append(str);
            $('.case_WBrightTOP').append(tep);
        },
        error: function (error) {
            console.log(error);
        }
    });
    gettime();
    moveCasepic();


    /* 0点倒计时 */
    function gettime() {
        var now = new Date();
        $('.hour').text(checkTime('23' - now.getHours()));
        $('.min').text(checkTime('59' - now.getMinutes()));
        $('.sec').text(checkTime('60' - now.getSeconds()));
        setTimeout(function () {
            gettime()
        }, 500);
    }
    // 保持每个位置都是两位数
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    /* 商品列表轮播 */
    function moveCasepic() {
        var swiper = new Swiper('.swiper-container', {
            autoplay: {
                reverseDirection: true,
              },
            paginationClickable: true,
            observer: true,
            observeParents: true,
            slidesPerView: 6,
            loopedSlides :6,
            spaceBetween: 10,
            slidesPerGroup: 6,
            loop: true,
            loopAdditionalSlides: 3,
            loopFillGroupWithBlank: true,
        });
    }
})
