"use strict";

$(function () {
  //获取url中的参数
  function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象

    var r = window.location.search.substr(1).match(reg); //匹配目标参数

    if (r != null) return unescape(r[2]);
    return null; //返回参数值
  } //接收URL中的参数goodsId


  var id = getUrlParam('goodsId'); // console.log(id);
  // console.log($("title").html());

  $.ajax({
    type: 'get',
    url: './iconfont/case.json',
    dataType: 'json',
    success: function success(res, status) {
      $.each(res.cases, function (index, val) {
        //根据id获取详情数据
        if (id == val.id) {
          var str_title = val.title;
          var str_shop = val.shop;
          var str_banner = "<img src=\"".concat(val.banner, "\">");
          var str_Sshowpic = "\n                    <div class=\"case_pic\">\n                        <img src=\"".concat(val.showpic, "\" alt=\"\">\n                    </div>\n                        <span>\n                        <img src=\"").concat(val.showpic, "\" alt=\"\">\n                    </span>\n                    <span>\n                        <img src=\"").concat(val.showpic, "\" alt=\"\">\n                    </span>\n                    <span>\n                        <img src=\"").concat(val.showpic, "\" alt=\"\">\n                    </span>\n                    <span>\n                        <img src=\"").concat(val.showpic, "\" alt=\"\">\n                    </span>\n                    <span>\n                        <img src=\"").concat(val.showpic, "\" alt=\"\">\n                    </span>\n                    ");
          var str_price = val.price;
          var str_relPrice = val.relPrice;
          var str_sell = val.sell;
          var str_base = val.base;
          var str_show = "\n                    <img src=\"".concat(val.pic1, "\" alt=\"\">\n                    <img src=\"").concat(val.pic2, "\" alt=\"\">\n                    ");
          var str_color = val.color;
          var str_id = val.id;
        }

        $("title").text(str_title);
        $(".shop_case>p").text(str_title);
        $(".shop_info>a").text(str_shop);
        $(".case_wrap_lefttop ul>li>a").text(str_shop);
        $(".shop_ad_con").append(str_banner);

        if (index < 7) {
          $(".case_left").append(str_Sshowpic);
        }

        $(".case_right>h2").text(str_title);
        $(".price").text(str_price);
        $(".relPrice").text(str_relPrice);
        $('.sell').text(str_sell);
        $('.base>em').text(str_base);
        $(".color").attr("value", str_color);
        $(".show_box").append(str_show);
        /* 跳转购物车 */

        $('.addshopcar').prev().click(function () {
          location.href = "./shoppingcar.html";
          var num = $('.count_text').val();

          if (str_id !== undefined) {
            setCookie({
              key: 'num',
              val: num,
              day: 100,
              path: '/'
            });
            setCookie({
              key: 'id',
              val: str_id,
              days: 100,
              path: '/'
            });
          }
        });
        /* 加入购物车 */
        // console.log(str_id);

        $('.addshopcar').click(function () {
          var num = $('.count_text').val();

          if (str_id !== undefined) {
            setCookie({
              key: 'num',
              val: num,
              day: 100,
              path: '/'
            });
            setCookie({
              key: 'id',
              val: str_id,
              days: 100,
              path: '/'
            });
          }
        });
      });
    },
    error: function error(_error) {
      console.log(_error);
    }
  });
  $('.clk_btn').click(function () {
    var size = this.value;
    setCookie({
      key: 'size',
      val: size,
      day: 100,
      path: '/'
    });
  });
  /* 收藏店铺 */

  $('.collshop').click(function () {
    $('.collshop').css('background', '#ff4065');
    $('.collshop').css('borderColor', '#ff4065');
    $('.collshop').css('color', '#fff');
    $('.collshop').text('已收藏');
  });
  /* 尺码选择 */

  $('.clk_btn').click(function () {
    $('.clk_btn').removeClass('active_btn');
    $(this).addClass('active_btn');
  });
  /* 数量加减 */

  $('.count_btn').click(function () {
    if ($(this).hasClass('add_btn')) {
      $('.count_text').val(parseInt($('.count_text').val()) + 1);
    } else if ($(this).hasClass('cut_btn')) {
      if (parseInt($('.count_text').val()) < 1) {
        return;
      }

      $('.count_text').val(parseInt($('.count_text').val()) - 1);
    }
  });
});