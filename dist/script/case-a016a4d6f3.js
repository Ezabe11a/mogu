"use strict";$(function(){var t,c,d=(t=new RegExp("(^|&)"+"goodsId"+"=([^&]*)(&|$)"),null!=(c=window.location.search.substr(1).match(t))?unescape(c[2]):null);$.ajax({type:"get",url:"./iconfont/case.json",dataType:"json",success:function(t){$.each(t.cases,function(t,c){var a,n,s,o,e,l,i,p,r,h,u;d==c.id&&(a=c.title,n=c.shop,s='<img src="'.concat(c.banner,'">'),o='\n                    <div class="case_pic">\n                        <img src="'.concat(c.showpic,'" alt="">\n                    </div>\n                        <span>\n                        <img src="').concat(c.showpic,'" alt="">\n                    </span>\n                    <span>\n                        <img src="').concat(c.showpic,'" alt="">\n                    </span>\n                    <span>\n                        <img src="').concat(c.showpic,'" alt="">\n                    </span>\n                    <span>\n                        <img src="').concat(c.showpic,'" alt="">\n                    </span>\n                    <span>\n                        <img src="').concat(c.showpic,'" alt="">\n                    </span>\n                    '),e=c.price,l=c.relPrice,i=c.sell,p=c.base,r='\n                    <img src="'.concat(c.pic1,'" alt="">\n                    <img src="').concat(c.pic2,'" alt="">\n                    '),h=c.color,u=c.id),$("title").text(a),$(".shop_case>p").text(a),$(".shop_info>a").text(n),$(".case_wrap_lefttop ul>li>a").text(n),$(".shop_ad_con").append(s),t<7&&$(".case_left").append(o),$(".case_right>h2").text(a),$(".price").text(e),$(".relPrice").text(l),$(".sell").text(i),$(".base>em").text(p),$(".color").attr("value",h),$(".show_box").append(r),$(".addshopcar").prev().click(function(){location.href="./shoppingcar.html";var t=$(".count_text").val();void 0!==u&&(setCookie({key:"num",val:t,day:100,path:"/"}),setCookie({key:"id",val:u,days:100,path:"/"}))}),$(".addshopcar").click(function(){var t=$(".count_text").val();void 0!==u&&(setCookie({key:"num",val:t,day:100,path:"/"}),setCookie({key:"id",val:u,days:100,path:"/"}))})})},error:function(t){console.log(t)}}),$(".clk_btn").click(function(){var t=this.value;setCookie({key:"size",val:t,day:100,path:"/"})}),$(".collshop").click(function(){$(".collshop").css("background","#ff4065"),$(".collshop").css("borderColor","#ff4065"),$(".collshop").css("color","#fff"),$(".collshop").text("已收藏")}),$(".clk_btn").click(function(){$(".clk_btn").removeClass("active_btn"),$(this).addClass("active_btn")}),$(".count_btn").click(function(){if($(this).hasClass("add_btn"))$(".count_text").val(parseInt($(".count_text").val())+1);else if($(this).hasClass("cut_btn")){if(parseInt($(".count_text").val())<1)return;$(".count_text").val(parseInt($(".count_text").val())-1)}})});