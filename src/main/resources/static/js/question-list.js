var userId = document.getElementById("userId").value;
layui.use(['laypage', 'layer', 'jquery'], function () {
    var laypage = layui.laypage
        , layer = layui.layer;
    var $ = layui.$;

    window.showQuedtionById = function (id) {
        window.location.href = "/userUrl/question?id=" + id + "&pageNum=1"
    }
})