"use strict";

$(function () {
  var id = getCookie('id'); // console.log(id);

  var zero = "\n    <div class=\"messbox\">\n        <img src=\"./images/shopingcar.png\" alt=\"\">\n        <p>\u60A8\u7684\u8D2D\u7269\u8F66\u8FD8\u662F\u7A7A\u7684\uFF0C\u8D76\u5FEB\u53BB\u6311\u9009\u5546\u54C1\u5427\uFF01</p>\n        <span>\u53BB<a href=\"./list.html\">\u5546\u57CE</a>\u548C<a href=\"./index.html\">\u9996\u9875</a>\u770B\u770B\u5427</span>\n    </div>";

  if (!getCookie('id')) {
    $('.shoppingcar_con').html(zero);
  } else {
    $.ajax({
      type: "get",
      url: "./iconfont/case.json",
      dataType: "json",
      success: function success(res, status) {
        $.each(res.cases, function (index, val) {
          if (id == val.id) {
            var str = "\n                    <div class=\"case_box\">\n                        <div class=\"case_box_wrap\">\n                            <div class=\"case_wrap_header\">\n                                <div class=\"case_wrap_header_con\">\n                                    <h2>\n                                        <a href=\"javascript:;\">\n                                            \u5168\u90E8\u5546\u54C1<b>&nbsp;1</b>\n                                        </a>\n                                        <a href=\"javascript:;\">\n                                            \u4F18\u60E0<b>&nbsp;1</b>\n                                        </a>\n                                        <a href=\"javascript:;\">\n                                            \u5E93\u5B58\u7D27\u5F20<b>&nbsp;0</b>\n                                        </a>\n                                    </h2>\n                                </div>\n                            </div>\n                            <div class=\"case_Bcon\">\n                                <div class=\"case_Bcon_top\">\n                                    <input type=\"checkbox\" id=\"\">\n                                    <span>\u5168\u9009</span>\n                                    <span>\u5546\u54C1\u4FE1\u606F</span>\n                                    <span>\u5355\u4EF7\uFF08\u5143\uFF09</span>\n                                    <span>\u6570\u91CF</span>\n                                    <span>\u5C0F\u8BA1\uFF08\u5143\uFF09</span>\n                                    <span>\u64CD\u4F5C</span>\n                                </div>\n                                <div class=\"case_row\">\n                                    <div class=\"case_row_shopN\">\n                                        <input type=\"checkbox\">\n                                        <span>".concat(val.shop, "</span>\n                                    </div>\n                                    <div class=\"case_row_con\">\n                                        <div class=\"case_row_box\">\n                                            <input type=\"checkbox\">\n                                            <img src=\"").concat(val.showpic, "\" alt=\"\">\n                                            <span>\n                                                <a href='case.html?goodsId=").concat(val.id, "'\n                                                    class=\"hidden_text\">").concat(val.title, "</a>\n                                                <b>\u964D\u4EF7<em>").concat(val.price - val.relPrice, "</em></b>\n                                            </span>\n                                            <span>\n                                                <p>\u989C\u8272\uFF1A<em>").concat(val.color, "</em></p>\n                                                <p>\u5C3A\u7801\uFF1A<b>").concat(getCookie('size'), "</b></p>\n                                            </span>\n                                            <span>\n                                                <p>").concat(val.price, "</p>\n                                                <p>").concat(val.relPrice, "</p>\n                                                <p>").concat((val.relPrice / val.price).toFixed(2) * 10, "\u6298</p>\n                                            </span>\n                                            <div class=\"count_box\">\n                                                <div class=\"count_btn\">\n                                                    <input class=\"count_btn cut_btn\" type=\"button\" value=\"-\">\n                                                    <input class=\"count_text\" type=\"text\" value=\"").concat(getCookie('num'), "\">\n                                                    <input class=\"count_btn add_btn\" type=\"button\" value=\"+\">\n                                                </div>\n                                            </div>\n                                            <span>").concat(val.relPrice * getCookie('num'), "</span>\n                                            <a class=\"remove\" href=\"javascript:;\">\u5220\u9664</a>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                                <div class=\"case_Bcon_bottom\">\n                                    <input type=\"checkbox\" >\n                                    <span>\u5168\u9009</span>\n                                    <a href=\"javascript:;\">\u5220\u9664</a>\n                                    <a href=\"javascript:;\">\u6E05\u7A7A\u552E\u7F44\u5546\u54C1</a>\n                                    <a href=\"javascript:;\">\u79FB\u5165\u6536\u85CF\u5939</a>\n                                    <span>\u5171\u6709<b>&nbsp;").concat(getCookie('num'), "&nbsp;</b>\u4EF6\u5546\u54C1\uFF0C\u603B\u8BA1:</span>\n                                    <span>\uFFE5").concat(val.relPrice * getCookie('num'), "</span>\n                                    <a href=\"javascript:;\">\u4ED8\u6B3E</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>");
            $('.shoppingcar_con').html(str);
          }
        });
      },
      error: function error(_error) {
        console.log(_error);
      }
    });
  }
});
/* 数量加减 */

$('.count_btn').click(function () {
  console.log(111);

  if ($(this).hasClass('add_btn')) {
    $('.count_text').val(parseInt($('.count_text').val()) + 1);
  } else if ($(this).hasClass('cut_btn')) {
    if (parseInt($('.count_text').val()) < 1) {
      return;
    }

    $('.count_text').val(parseInt($('.count_text').val()) - 1);
  }
});
/* 删除商品 */

$('.remove').click(function () {
  $('.case_row').html('');
});