/* 用户登录名 */
if (getCookie('userid')) {
    $('#loginA').text('亲爱的' + getCookie('userid'));
    $('.login a').attr('href','javascript:;');
}

/* 返回顶部 */
