/**
 * HTTP状态码分类
 */
$(document).ready(function () {
    $("#classify-show").click(function () {
        $("#search-error-hide").hide();
        $("#search-hide").hide();
        $("#classify-hide").toggle();
    });
});

/**
 * 状态码搜索
 */
$("#search-show").click(function () {
    $("#search-error-hide").hide();
    $("#search-hide").hide();
    $("#classify-hide").hide();
    var valu_http = $("#http_input").val();
    if (valu_http == 100) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_message.png";
        document.getElementById("http-Num").innerHTML = "100";
        document.getElementById("http-En").innerHTML = "Continue";
        document.getElementById("http-Ch").innerHTML = "继续。客户端应继续其请求";
    } else if (valu_http == 101) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_message.png";
        document.getElementById("http-Num").innerHTML = "101";
        document.getElementById("http-En").innerHTML = "Switching Protocols";
        document.getElementById("http-Ch").innerHTML = "切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议";
    } else if (valu_http == 200) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_success.png";
        document.getElementById("http-Num").innerHTML = "200";
        document.getElementById("http-En").innerHTML = "OK";
        document.getElementById("http-Ch").innerHTML = "请求成功。一般用于GET与POST请求";
    } else if (valu_http == 201) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_success.png";
        document.getElementById("http-Num").innerHTML = "201";
        document.getElementById("http-En").innerHTML = "Created";
        document.getElementById("http-Ch").innerHTML = "已创建。成功请求并创建了新的资源";
    } else if (valu_http == 202) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_success.png";
        document.getElementById("http-Num").innerHTML = "202";
        document.getElementById("http-En").innerHTML = "Accepted";
        document.getElementById("http-Ch").innerHTML = "已接受。已经接受请求，但未处理完成";
    } else if (valu_http == 203) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_success.png";
        document.getElementById("http-Num").innerHTML = "203";
        document.getElementById("http-En").innerHTML = "Non-Authoritative Information";
        document.getElementById("http-Ch").innerHTML = "非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本";
    } else if (valu_http == 204) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_success.png";
        document.getElementById("http-Num").innerHTML = "204";
        document.getElementById("http-En").innerHTML = "No Content";
        document.getElementById("http-Ch").innerHTML = "无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档";
    } else if (valu_http == 205) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_success.png";
        document.getElementById("http-Num").innerHTML = "205";
        document.getElementById("http-En").innerHTML = "Reset Content";
        document.getElementById("http-Ch").innerHTML = "重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域";
    } else if (valu_http == 206) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_success.png";
        document.getElementById("http-Num").innerHTML = "206";
        document.getElementById("http-En").innerHTML = "Partial Content";
        document.getElementById("http-Ch").innerHTML = "部分内容。服务器成功处理了部分GET请求";
    } else if (valu_http == 300) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_refresh.png";
        document.getElementById("http-Num").innerHTML = "300";
        document.getElementById("http-En").innerHTML = "Multiple Choices";
        document.getElementById("http-Ch").innerHTML = "多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择";
    } else if (valu_http == 301) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_refresh.png";
        document.getElementById("http-Num").innerHTML = "301";
        document.getElementById("http-En").innerHTML = "Moved Permanently";
        document.getElementById("http-Ch").innerHTML = "永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替";
    } else if (valu_http == 302) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_refresh.png";
        document.getElementById("http-Num").innerHTML = "302";
        document.getElementById("http-En").innerHTML = "Found";
        document.getElementById("http-Ch").innerHTML = "临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI";
    } else if (valu_http == 303) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_refresh.png";
        document.getElementById("http-Num").innerHTML = "303";
        document.getElementById("http-En").innerHTML = "See Other";
        document.getElementById("http-Ch").innerHTML = "查看其它地址。与301类似。使用GET和POST请求查看";
    } else if (valu_http == 304) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_refresh.png";
        document.getElementById("http-Num").innerHTML = "304";
        document.getElementById("http-En").innerHTML = "Not Modified";
        document.getElementById("http-Ch").innerHTML = "未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源";
    } else if (valu_http == 305) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_refresh.png";
        document.getElementById("http-Num").innerHTML = "305";
        document.getElementById("http-En").innerHTML = "Use Proxy";
        document.getElementById("http-Ch").innerHTML = "使用代理。所请求的资源必须通过代理访问";
    } else if (valu_http == 306) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_refresh.png";
        document.getElementById("http-Num").innerHTML = "306";
        document.getElementById("http-En").innerHTML = "Unused";
        document.getElementById("http-Ch").innerHTML = "已经被废弃的HTTP状态码";
    } else if (valu_http == 307) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_refresh.png";
        document.getElementById("http-Num").innerHTML = "307";
        document.getElementById("http-En").innerHTML = "Temporary Redirect";
        document.getElementById("http-Ch").innerHTML = "临时重定向。与302类似。使用GET请求重定向";
    } else if (valu_http == 400) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "400";
        document.getElementById("http-En").innerHTML = "Bad Request";
        document.getElementById("http-Ch").innerHTML = "客户端请求的语法错误，服务器无法理解";
    } else if (valu_http == 401) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "401";
        document.getElementById("http-En").innerHTML = "Unauthorized";
        document.getElementById("http-Ch").innerHTML = "请求要求用户的身份认证";
    } else if (valu_http == 402) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "402";
        document.getElementById("http-En").innerHTML = "Payment Required";
        document.getElementById("http-Ch").innerHTML = "保留，将来使用";
    } else if (valu_http == 403) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "403";
        document.getElementById("http-En").innerHTML = "Forbidden";
        document.getElementById("http-Ch").innerHTML = "服务器理解请求客户端的请求，但是拒绝执行此请求";
    } else if (valu_http == 404) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "404";
        document.getElementById("http-En").innerHTML = "Not Found";
        document.getElementById("http-Ch").innerHTML = "	服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置-您所请求的资源无法找到-的个性页面";
    } else if (valu_http == 405) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "405";
        document.getElementById("http-En").innerHTML = "Method Not Allowed";
        document.getElementById("http-Ch").innerHTML = "客户端请求中的方法被禁止";
    } else if (valu_http == 406) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "406";
        document.getElementById("http-En").innerHTML = "Not Acceptable";
        document.getElementById("http-Ch").innerHTML = "服务器无法根据客户端请求的内容特性完成请求";
    } else if (valu_http == 407) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "407";
        document.getElementById("http-En").innerHTML = "Proxy Authentication Required";
        document.getElementById("http-Ch").innerHTML = "请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权";
    } else if (valu_http == 408) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "408";
        document.getElementById("http-En").innerHTML = "Request Time-out";
        document.getElementById("http-Ch").innerHTML = "服务器等待客户端发送的请求时间过长，超时";
    } else if (valu_http == 409) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "409";
        document.getElementById("http-En").innerHTML = "Conflict";
        document.getElementById("http-Ch").innerHTML = "服务器完成客户端的 PUT 请求时可能返回此代码，服务器处理请求时发生了冲突";
    } else if (valu_http == 410) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "410";
        document.getElementById("http-En").innerHTML = "Gone";
        document.getElementById("http-Ch").innerHTML = "客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置";
    } else if (valu_http == 411) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "411";
        document.getElementById("http-En").innerHTML = "Length Required";
        document.getElementById("http-Ch").innerHTML = "服务器无法处理客户端发送的不带Content-Length的请求信息";
    } else if (valu_http == 412) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "412";
        document.getElementById("http-En").innerHTML = "Precondition Failed";
        document.getElementById("http-Ch").innerHTML = "客户端请求信息的先决条件错误";
    } else if (valu_http == 413) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "413";
        document.getElementById("http-En").innerHTML = "Request Entity Too Large";
        document.getElementById("http-Ch").innerHTML = "由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息";
    } else if (valu_http == 414) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "414";
        document.getElementById("http-En").innerHTML = "Request-URI Too Large";
        document.getElementById("http-Ch").innerHTML = "请求的URI过长（URI通常为网址），服务器无法处理";
    } else if (valu_http == 415) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "415";
        document.getElementById("http-En").innerHTML = "Unsupported Media Type";
        document.getElementById("http-Ch").innerHTML = "服务器无法处理请求附带的媒体格式";
    } else if (valu_http == 416) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "416";
        document.getElementById("http-En").innerHTML = "Requested range not satisfiable";
        document.getElementById("http-Ch").innerHTML = "客户端请求的范围无效";
    } else if (valu_http == 417) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "417";
        document.getElementById("http-En").innerHTML = "Expectation Failed";
        document.getElementById("http-Ch").innerHTML = "服务器无法满足Expect的请求头信息";
    } else if (valu_http == 500) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "500";
        document.getElementById("http-En").innerHTML = "Internal Server Error";
        document.getElementById("http-Ch").innerHTML = "服务器内部错误，无法完成请求";
    } else if (valu_http == 501) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "501";
        document.getElementById("http-En").innerHTML = "Not Implemented";
        document.getElementById("http-Ch").innerHTML = "服务器不支持请求的功能，无法完成请求";
    } else if (valu_http == 502) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "502";
        document.getElementById("http-En").innerHTML = "Bad Gateway";
        document.getElementById("http-Ch").innerHTML = "作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应";
    } else if (valu_http == 503) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "503";
        document.getElementById("http-En").innerHTML = "Service Unavailable";
        document.getElementById("http-Ch").innerHTML = "由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中";
    } else if (valu_http == 504) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "504";
        document.getElementById("http-En").innerHTML = "Gateway Time-out";
        document.getElementById("http-Ch").innerHTML = "充当网关或代理的服务器，未及时从远端服务器获取请求";
    } else if (valu_http == 505) {
        $("#search-hide").show();
        document.getElementById("http-Img").src = "../icon/icon_http_erro.png";
        document.getElementById("http-Num").innerHTML = "505";
        document.getElementById("http-En").innerHTML = "HTTP Version not supported";
        document.getElementById("http-Ch").innerHTML = "服务器不支持请求的HTTP协议的版本，无法完成处理";
    } else if (valu_http == "") {
        $("#search-error-hide").show();
        document.getElementById("hint").innerHTML = "输入框不能为空";
    } else {
        $("#search-error-hide").show();
    }



    //

});