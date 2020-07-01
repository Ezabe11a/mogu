$(function () {
    $("#btnLogin").click(function () {
        var user = $('#username').val();
        var pwd = $('#userpass').val();
        $.ajax({
            type: "get",
            url: "./iconfont/user.json",
            dataType: "json",
            success: function (result) {
                loginsystem(result);
            }
        });
        function loginsystem(result) {
            if (user == '' || pwd == '') {
                $('#messageBox').text('请输入用户名和密码');
            } else {
                for (var key in result) {
                    if (user === result[key].user && pwd === result[key].pwd) {
                        setCookie({
                            key: 'userid',
                            val: user,
                            days: 1,
                            path: '/'
                        });
                        location.href = './index.html';
                    } else {
                        $('#messageBox').text('用户名或密码错误');
                        return;
                    }
                }
            }
        }
    });

});
