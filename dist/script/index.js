"use strict";

$(function () {
  banner();
  $.ajax({
    type: 'get',
    url: './iconfont/index.json',
    dataType: 'json',
    success: function success(res) {
      var str = ""; // console.log(res.product_center);

      var str_c = "";
      $.each(res.product, function (index, val) {
        str += "\n                <figure>\n                    <img src=\"".concat(val.src, "\" alt=\"\">\n                </figure>\n                ");
      });
      $.each(res.product_center, function (index, val) {
        str_c += "\n                <figure>\n                    <img src=\"".concat(val.src, "\" alt=\"\">\n                </figure>\n                ");
      });
      $('.goodscon_center_case').append(str_c);
      $('.goodscon_left').append(str);
      $('.goodscon_right').append(str);
    },
    error: function error(_error) {
      console.log(_error);
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
      if (i > 6) i = 1;
    }

    timer1 = setInterval(bannermove, 2000);
  }
});