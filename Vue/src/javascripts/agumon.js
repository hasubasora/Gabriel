window.onload = function() {
    var agumon = new Vue({
        el: '.container', //id 在这个盒子里面才能操作下面的东西
        data: { //数据
            myData: [{
                "name": "空空",
                "sex": "boy",
                "age": "13"
            }, {
                "name": "夜夜",
                "sex": "boy",
                "age": "14"
            }],
            styles: { "completed": false },
            username: '',
            sex: '',
            age: '',
            tabindex: -100,
            message: "输入框",
            checked: false,
            checkedNames: [],
            picked: ''
        },
        computed: { //页面展示数据直接处理数据放出来
            tablesDate: function() {
                return this.myData.length;
            }
        },
        methods: { //事件操作
            add: function() {
                if (this.username === "") {
                    alert('不能为空');
                } else {
                    this.myData.push({
                        name: this.username,
                        age: this.age,
                        sex: this.sex
                    });
                    this.username = '';
                    this.age = '';
                    this.sex = '';
                }
            },
            deleteMsg: function(index) {
                // console.log(this.tabindex)
                this.myData.splice(index, 1);
            },
            tooggleComletion: function(styles) { //改变按钮
                styles.completed = !styles.completed;

            },
            btnEvent: function(e) { //Event
                alert(e.clientX + "-" + e.clientY)
            },
            btn1: function() { //冒泡
                alert('我的盒子')
                    // e.cancelBubble = true;
            },
            btn2: function() { //冒泡
                alert('我是输入框')

            }

        }
    });

};