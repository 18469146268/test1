// 双击返回实现退出APP

window.apiready = function(){
    //安卓应用
    var isAndroid = (/android/gi).test(navigator.appVersion);
    if (isAndroid) {
    //绑定安卓的后退按钮事件 两秒内后退按钮点击两次 关闭应用
    var backSecond = 0;
    api.addEventListener({
        name: 'keyback'
    }, function(ret, err) {
        var curSecond = new Date().getSeconds();
        if (Math.abs(curSecond - backSecond) > 2) {
            backSecond = curSecond;
            api.toast({
                msg: '再按一次退出APP',
                duration: 2000,
                location: 'bottom'
            });
        } else {
            api.closeWidget({
                id: 'A6027481609347', //这里改成自己的应用ID
                retData: {name:'closeWidget'},
                silent:true
                });
        }
    });
    }
    }
