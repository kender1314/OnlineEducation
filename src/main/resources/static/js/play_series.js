var userId = document.getElementById("userId").value;
var videoId = document.getElementById("videoId").value;
var videoClassification = document.getElementById("videoClassification").value;
layui.use(['laypage', 'layer', 'jquery'], function () {
    var laypage = layui.laypage
        , layer = layui.layer;
    var $ = layui.$;
    /**
     * 获取系列时间
     */
    $.ajax({
        url: "/videoSeriesManage/getVideoSeriesById?id=" + document.getElementById("seriesId").value,
        type: "post",
        dataType: "json",
        contentType: false,
        processData: false,
        success: function (data) {
            console.log("系列时间" + data.data.seriesDate);
            $("#seriesDateB").empty();
            if (data.data !== null) {
                var appendhtml = "<span style=\"font-size: 12px; color: #999\">" + data.data.seriesDate + "</span>";
                $("#seriesDateB").append(appendhtml);
            }
        }
    });
})