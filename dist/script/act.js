"use strict";

$(function () {
  $.ajax({
    type: "get",
    url: "./iconfont/case.json",
    dataType: "json",
    success: function success(res, status) {
      var str = '';
      $.each(res.cases, function (index, val) {
        str += "\n                 <figure>\n                    <img src=\"".concat(val.showpic, "\" alt=\"\">\n                    <figcaption>\n                        <h3 class=\"hidden_text\">").concat(val.title, "</h3>\n                        <p>\u5FEB\u62A2\u4EF7</p>\n                        <b>\uFFE5").concat(val.relPrice, "</b>\n                        <p>\uFFE5").concat(val.price, "</p>\n                        <p>\u5DF2\u62A2").concat(val.sell, "\u4EF6</p>\n                        <a href=\"./case.html?goodsId=").concat(val.id, "\">\u7ACB\u5373\u62A2\u8D2D</a>\n                        <p>\u4EC5\u5269").concat(val.base, "\u4EF6</p>\n                    </figcaption>\n                </figure>\n                 ");

        if (index < 7) {
          $('.actcase_left').prepend(str);
        }
      });
    },
    error: function error(_error) {
      console.log(_error);
    }
  });
});