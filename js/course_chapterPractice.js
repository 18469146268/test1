/**
 * 默认隐藏所有题的答案
 */
window.onload = function () {
    $("#18").hide();
    $("#19").hide();
}

/**
 * 获取下拉列表的值，调取对应题的答案
 */
function seek() {
    var optionValue = document.getElementById("questionNum");
    if (optionValue.value == "01") {
        $("#18").hide();
        $("#19").hide();
        $("#01").show();
    } else if (optionValue.value == "18") {
        $("#01").hide();
        $("#19").hide();
        $("#18").show();
    } else if (optionValue.value == "19") {
        $("#01").hide();
        $("#18").hide();
        $("#19").show();
    } else {
        alert("抱歉：该题暂未录入系统！")
    }
}

/**
 * 点击“亲自试一下”
 * 根据题号跳转至不同的代码预览页面
 */
function Givetry() {
    var optionValue = document.getElementById("questionNum");
    if (optionValue.value == "01") {
        window.location.href = "courses_preview_01.html";
    }
    else if (optionValue.value == "18") {
        window.location.href = "courses_preview_18.html";
    }
    else if (optionValue.value == "19") {
        window.location.href = "courses_preview_19.html";
    }
    else {
        alert("抱歉：该题暂未录入系统！")
    }
}