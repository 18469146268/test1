/*
实例化复制插件
*/
var clipboard = new ClipboardJS('.btn');

/*
颜色选择器表单赋值
*/
layui.use('colorpicker', function () {
    var $ = layui.$,
        colorpicker = layui.colorpicker;

    colorpicker.render({
        elem: '#test-form',
        color: '#1c97f5',
        size: 'lg' ,
        done: function (color) {
            $('#test-form-input').val(color);
        }
    });
});