var videoClassification = document.getElementById("videoClassification").value;
layui.use(['laypage', 'layer', 'jquery'], function () {
    var laypage = layui.laypage
        , layer = layui.layer;
    var $ = layui.$;
    
    $.ajax({
        url: "/videoManage/getCountByClassification?videoClassification=" + videoClassification,
        type: "post",
        dataType: "json",
        contentType: false,
        processData: false,
        success: function (data) {
            laypage.render({
                elem: 'demo7'
                , count: data.data
                // , layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
                , limit: 10
                , jump: function (obj) {
                    //调用加载函数加载数据
                    showVideoList(obj.curr, obj.limit, choiceCssID(videoClassification));
                }
            });
        }
    });

    function choiceCssID(videoClassification) {
        var cssID;
        switch (videoClassification) {
            case '编程语言':
                cssID = 1;
                break;
            case '云计算大数据':
                cssID = 2;
                break;
            case '计算机基础':
                cssID = 3;
                break;
            case '移动开发':
                cssID = 4;
                break;
            case '前沿技术':
                cssID = 5;
                break;
        }
        return cssID;
    }

    function onclickByClassification(videoClassification) {
        $.ajax({
            url: "/videoManage/getCountByClassification?videoClassification=" + videoClassification,
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demo7'
                    , count: data.data
                    // , layout: ['count', 'prev', 'page', 'next', 'skip']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showVideoList(obj.curr, obj.limit);
                    }
                });
            }
        });
    }

    function onclickByLittleClassification(classificationLittle) {

    }

});

function showVideoList(pageNo, pageSize, cssID) {
    var formData = new FormData();
    formData.append("query", videoClassification);
    formData.append("limit", pageSize);
    formData.append("page", pageNo);
    $.ajax({
        url: "/videoManage/searchByClassification",
        type: "post",
        dataType: "json",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            $("#videoClass_limitless_item").empty();
            for (var i = 0; i < data.data.numberOfElements; i++) {
                var appendhtml = "<input type=\"hidden\" id=\"videoId\" name=\"videoId\" value=" + data.data.content[i].id + ">\n " +
                    "                               <div class=\"layui-col-md6\" style=\"width: 222px; padding: 5px; margin-left: 10px\">\n" +
                    "                                    <div class=\"layui-card\">\n" +
                    "                                        <a href=\"/userUrl/playVideo?id=" + data.data.content[i].id + "\">" +
                    "                                           <img src=" + data.data.content[i].videoImageUrl + " width=\"212\">\n" +
                    "                                            <div style=\"height: 40px\">\n" +
                    "                                                <span style=\"margin-left: 15px; font-size: 12px\">" + data.data.content[i].videoName + "</span>\n" +
                    "                                            </div>\n" +
                    "                                        </a>\n" +
                    "                                        <div class=\"layui-card-body\">\n" +
                    "                                            <div class=\"layui-input-inline\" style=\"float: left\">\n" +
                    "                                                <img src=\"../images/play.png\" style=\"width: 16px; height: 16px\"/>\n" +
                    "                                                <span style=\"font-size: 10px; color:#999;\">" + data.data.content[i].playbackVolume + "</span>\n" +
                    "                                            </div>\n" +
                    "                                            <div class=\"layui-input-inline\" style=\"float: right\">\n" +
                    "                                                <span style=\"font-size: 10px; color:#999;\">" + data.data.content[i].videoDate + "</span>\n" +
                    "                                            </div>\n" +
                    "                                            <div style=\"clear: both\"></div>\n" +
                    "                                        </div>\n" +
                    "                                    </div>\n" +
                    "                                </div>";
                $("#videoClass_limitless_item").append(appendhtml);
            }
        }
    });
}

function playVideo() {

}
