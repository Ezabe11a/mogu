/* 用户登录名 */
if (getCookie('userid')) {
    $('#loginA').text('亲爱的' + getCookie('userid'));
    $('.login a').attr('href','javascript:;');
}

/* 目录 */
/* $('.item').click(function () { 
    $('.item_box').attr('display','block');
}); */
