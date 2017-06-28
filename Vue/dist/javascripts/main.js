'use strict';

var sf = {
    config: {
        tbodys: document.getElementsByTagName('tbody')[0],
        tag: document.getElementsByTagName('td'),
        len: document.getElementsByTagName('td').length,
        btn: document.getElementById('btn'),
        thead: document.getElementsByTagName('thead')[0]
    },
    init: function init() {
        document.addEventListener('click', sf.unbodys);
        sf.config.tbodys.addEventListener('click', sf.bodys);
        sf.config.btn.addEventListener('click', sf.addBodys);
    },
    bodys: function bodys(event) {
        event = event || window.event;
        var target = event.target || event.srcElement;
        console.log(sf.config.tag[0].nodeName);
        if (target.nodeName == sf.config.tag[0].nodeName) {
            target.setAttribute('contenteditable', 'true');
            target.focus();
            event.cancelBubble = true;
        }
    },
    unbodys: function unbodys(event) {
        event = event || window.event;
        var target = event.target || event.srcElement;
        if (target.nodeName == target.nodeName) {
            for (var o = 0, i = sf.config.len; o < i; o++) {
                sf.config.tag[o].removeAttribute('contenteditable');
            }
        }
        //  console.log(!target.id.indexOf('btn')) //！true  正常0  找不到-1
        //存在
        //  if (!target.id.indexOf('btn')) {
        //      alert('此时进行#son元素的事件处理');
        //  }
    },
    addBodys: function addBodys() {
        var thLen = sf.config.thead.getElementsByTagName('th').length;
        // insertRow
        var tbody = document.getElementsByTagName('tbody')[0].insertRow(0);
        tbody.setAttribute('role', 'row');
        for (var r = 0; r < thLen; r++) {
            var y = tbody.insertCell(r);
            y.innerHTML = "&nbsp;";
        }

        // 文档片段优化法
        //  var fragment = document.createDocumentFragment();
    }
};
'use strict';

var filter = {
    /** 将text中的html字符转义， 仅转义  ', ", <, > 四个字符
     * @param  { String } str 需要转义的字符串
     * @returns { String }     转义后的字符串 
     */
    unhtml: function unhtml(str) {
        return str ? str.replace(/[<">']/g, function (a) {
            return {
                '<': '&lt;',
                '"': '&quot;',
                '>': '&gt;',
                "'": '&#39;'
            }[a];
        }) : '';
    },

    /**
     * 匹配电话号码的正则
     * @param {String} tel 传入的电话号码
     * @param {String} reg 正则
     * @returns {bool} true false
     */
    verificationPhone: function verificationPhone(tel, reg) {
        return tel ? reg || /^0?1[3|4|5|7|8][0-9]\d{8}$/.test(tel) : '';
        // console.log(reg.test(tel))
    },

    /**
     * 去除多余空格
     * @param { String } str 需要去空格的字符串 
     */
    unBlank: function unBlank(str) {
        return str ? str.replace(/\s/ig, '') : '';
    }
};
'use strict';

window.onload = function () {

    // 组件-一定要在vue前面
    Vue.component('zy', {
        template: '<h2>我是首页</h2>' //用什么模板来渲染他
    });

    Vue.component('rz', {
        template: '<h2>我是日志</h2>' //用什么模板来渲染他
    });
    Vue.component('xc', {
        template: '<h2>我是相册</h2>' //用什么模板来渲染他
    });
    Vue.component('lyb', {
        template: '<h2>我是留言吧</h2>' //用什么模板来渲染他
    });
    Vue.component('ss', {
        template: '<h2>我是说说</h2>' //用什么模板来渲染他
    });
    Vue.component('grd', {
        template: '<h2>我是个人的</h2>' //用什么模板来渲染他
    });
    Vue.component('bzd', {
        template: '<h2>bzd</h2>' //用什么模板来渲染他
    });

    var agumon = new Vue({
        el: '.container', //id 在这个盒子里面才能操作下面的东西
        data: { //数据
            types: [{ "title": "主页", "link": "zy" }, { "title": "日志", "link": "rz" }, { "title": "相册", "link": "xc" }, { "title": "留言吧", "link": "lyb" }, { "title": "说说", "link": "ss" }, { "title": "个人的", "link": "grd" }, { "title": "bzd", "link": "bzd" }],
            show: 'rz'
        },
        computed: {//页面展示数据直接处理数据放出来

        },
        methods: {//事件操作

        }
    });

    function fouter() {
        var str = location.hash;
        str = str.slice(1);
        str = str.replace(/^\//, '');
        var map = {
            zy: true,
            rz: true,
            xc: true,
            lyb: true,
            ss: true,
            grd: true,
            bzd: true
        };
        if (map[str]) {
            agumon.show = str;
        } else {
            agumon.show = 'zy';
        }
        console.log(str);
    }

    // window.addEventListener('hashChange', callback: EventListener, capture ? : boolean)
    window.addEventListener('hashchange', fouter);
};
"use strict";

(function () {
    var ft = document.getElementsByTagName("html")[0]; //获取到html标签
    var s = window.screen.width; //获取屏幕的宽度
    window.onresize = function () {
        //屏幕尺寸改变触发
        var w = document.body.offsetWidth; //获取浏览器内容的宽度
        ft.style.fontSize = w / s * 16 + "px";
    };
})();