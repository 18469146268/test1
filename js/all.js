/*
返回顶部按钮
*/
window.onload = function () {
    var gotop = document.getElementById('gotop');
    var timer = null;
    var isTop = true;
    //获取页面可视区高度
    var clientHeight = document.documentElement.clientHeight;
    //console.log(clientHeight)
    //滚动条滚动时触发
    window.onscroll = function () {
        //显示回到顶部按钮
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop >= clientHeight) {
            gotop.style.display = "block";
        } else {
            gotop.style.display = "none";
        };
        //回到顶部过程中用户滚动滚动条，停止定时器
        if (!isTop) {
            clearInterval(timer);
        };
        isTop = false;
    };

    gotop.onclick = function () {
        //设置定时器
        timer = setInterval(function () {
            //获取滚动条距离顶部高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            //console.log('osTop ' + osTop);
            var ispeed = Math.floor(-osTop / 7);
            //console.log('ispeed ' + ispeed);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
            //到达顶部，清除定时器
            if (osTop == 0) {
                clearInterval(timer);
            };
            isTop = true;

        }, 30);
    };
};

/*
根据不同的屏幕分辨率显示/隐藏底部导航
*/
// 定义事件侦听器函数
function displayWindowSize() {
    // 获取窗口的宽度，不包括滚动条
    var w = document.documentElement.clientWidth;
    //768为：超小设备手机、小型平板电脑
    if (w >= 768) {
        document.getElementById("one").style.display = "none";
    } else {
        document.getElementById("one").style.display = "block";
    }
}
// 将事件侦听器函数附加到窗口的resize事件
window.addEventListener("resize", displayWindowSize);
// 第一次调用该函数
displayWindowSize();

/*
复制——提示框
 */
$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

/*
 * 显示隐藏【详情】【下载】按钮
 */
function myClickshow(one) {
    var event = document.getElementById(one);
    event.style.display = "block";
}

function myClickhide(one) {
    var event = document.getElementById(one);
    event.style.display = "none";
}

/**
 * 后台管理登录
 */
function login() {

    var userName = document.getElementById('userName').value;
    var passWord = document.getElementById('passWord').value;
    if (userName == "" || passWord == "") {
        document.getElementById("hint").innerHTML = "输入框不能为空";
    } else if (userName == "001" && passWord == "110") {
        window.location.href = "html/backstage.html";
    } else {
        document.getElementById("hint").innerHTML = "非法操作";
    }

}
