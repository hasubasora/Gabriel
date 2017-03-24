window.onload = function() {
    // html直接调用
    mode.init();
}
let mode = {
    it: 111, //全局声明
    init: () => {
        _this = this; //保存自己
        // 操作方法 click什么的
        _this.open(); //调用方法
    },
    open: () => {
        alert(234)
    }

}