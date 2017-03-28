// (function() {
//     setRem();
//     window.addEventListener("orientationchange", setRem);
//     window.addEventListener("resize", setRem);

//     function setRem() {
//         var html = document.querySelector("html");
//         var width = html.getBoundingClientRect().width;
//         html.style.fontSize = width / 16 + "px";
//     }
// })();

window.onload = function() {

    // html直接调用
    mode.init();
}
let mode = {
    reg: /^0?1[3|4|5|7|8][0-9]\d{8}$/,
    id: document.getElementById(id),
    init: () => {
        _this = this; //保存自己
        $(".nameLogin,.Login,.forgetbtn").on("keydown", function(e) {

        });
        //失去焦点
        //按钮操作

    },
    open: () => {
        alert(234)
    },
    exp: (tel) => {
        if (!reg.test(tel)) {
            _this.err(tel, 1);
        } else {
            _this.err(tel, 2);
        }
    },
    keyCode: () => {
        if (e.keyCode == 13) {
            if ($(".nameLogin")) {
                nameLogin()
            }
            if ($(".Login")) {
                Login()
            }
        }
    },
    err: (obj, num) => {
        if (num == 1) {
            obj.style.cssText = "border:1px solid red";
            let node = document.createTextNode("不正确");
            obj.appendChild(node);
        }
        if (num == 2) {
            obj.style.cssText = "border:1px solid #ccc";
            obj.appendChild(node);
        }
    }
}

$(function() {



    $tel.keyup(fn);
    $tel.blur(fn);
    $forgettel.keyup(fn);
    $forgettel.blur(fn);

    function fn() {
        if ($tel.val() != "") {
            gray($(this));
            var otel = $(this).val();
            var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
            if (!reg.test(otel)) {
                $warning.html("手机号不正确");
                red($(this));
            } else {
                $warning.html("");
                gray($(this));
            }
        } else {
            red($(this));
            $warning.html("手机号不能为空");
        }
    };
    $username.blur(function() {
        if (!$username.val()) {
            red($(this));
            $warning.html("请填写信息");
        }
    });
    $password.blur(function() {
        if (!$password.val()) {
            red($(this));
            $warning.html("请填密码");
        }
    });
    $(".nameLogin,.Login,.forgetbtn").on("keydown", function(e) {
        if (e.keyCode == 13) {
            if ($(".nameLogin")) {
                nameLogin()
            }
            if ($(".Login")) {
                Login()
            }
            if ($(".forgetbtn")) {
                forgetbtn()
            }
        }
    });
    $nameLogin.click(nameLogin);

    function nameLogin() {
        if ($username.val() && $password.val()) {
            // alert("验证通过")

        } else if (!$username.val() && !$password.val()) {
            $warning.html("请填写信息");
            red($username);
            red($password);
        } else if (!$password.val()) {
            red($password);
            $warning.html("请填写密码");
        } else if (!$username.val()) {
            $warning.html("请填写信息");
            red($username);

        }
    }

    //验证手机号再获取验证
    getCode($getCode, $tel, 'rgb(255,222,88)')
    getCode($forgetcodebtn, $forgettel, 'rgb(255,222,88)')
        // 手机登录按钮
    $Login.click(Login)

    function Login() {
        if ($tel.val() != "" && $code.val() != "") {
            var tel = $tel.val();
            var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
            if (reg.test(tel)) {
                // alert("验证通过")
            }
        } else {
            ifelse($tel, $code, $warning);
        }
    }
    // 忘记密码的验证按钮
    $forgetbtn.click(forgetbtn);

    function forgetbtn() {
        if ($forgettel.val() != "" && $forgetcode.val() != "") {
            var tel = $forgettel.val();
            var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
            if (reg.test(tel)) {
                // alert("验证通过")
            }
        } else {
            ifelse($forgettel, $forgetcode, $warning2);
        }
    }

    var ary = [$tel, $code, $username, $password, $forgettel, $forgetcode];
    for (var i = 0; i < ary.length; i++) {
        wfocus(ary[i])
    }

    function wfocus(obj) {
        obj.focus(function() {
            $warning.html("");
            gray($(this));
        });
    }

    function ifelse(tel, code, warning) {
        if (tel.val() == "") {
            warning.html("手机号不能为空");
            red(tel);
        }
        if (code.val() == "") {
            warning.html("验证码不能为空");
            red(code);
        }
        if (code.val() == "" && tel.val() == "") {
            warning.html("请填写信息");
            red(code);
            red(tel);
        }
    }

    // 验证手机发送验证码
    function getCode(getCode, telnum, btncolor) {
        getCode.click(function() {
            var tel = telnum.val();
            var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
            if (telnum.val() == "") {
                // alert("请输入手机号");
                red(telnum);
                $warning.html("手机号不能为空");
            } else if (reg.test(tel)) {
                // 倒计时
                sixty(getCode, btncolor);
            }
        });
    }
    // 倒计时
    function sixty($code, $color) {
        var a = 60;
        var timer = setInterval(function() {
            if (a > 0) {
                $code.attr("disabled", true).val("(" + a + ")重新获取").css("background", "#ccc");
                a--;
            } else {
                clearInterval(timer);
                $code.attr("disabled", false).val("获取验证码").css("background", $color);
                a = 60;
            }
        }, 1000);
    }

    function keyupNum(obj) {
        document.querySelector(obj).onkeyup = function() {
            this.value = this.value.replace(/[^\d]/g, '')
        }
    }



})