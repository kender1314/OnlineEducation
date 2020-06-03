var videoClassification = "编程语言";
var classificationLittle;
layui.use(['carousel', 'form'], function () {
    var carousel = layui.carousel
        , form = layui.form;

    //图片轮播
    carousel.render({
        elem: '#test10'
        , width: '80%'
        , height: '300px'
        , interval: 5000
    });

    var $ = layui.$, active = {
        set: function (othis) {
            var THIS = 'layui-bg-normal'
                , key = othis.data('key')
                , options = {};

            othis.css('background-color', '#5FB878').siblings().removeAttr('style');
            options[key] = othis.data('value');
            ins3.reload(options);
        }
    };

    //监听开关
    form.on('switch(autoplay)', function () {
        ins3.reload({
            autoplay: this.checked
        });
    });

    $('.demoSet').on('keyup', function () {
        var value = this.value
            , options = {};
        if (!/^\d+$/.test(value)) return;

        options[this.name] = value;
        ins3.reload(options);
    });

    //其它示例
    $('.demoTest .layui-btn').on('click', function () {
        var othis = $(this), type = othis.data('type');
        active[type] ? active[type].call(this, othis) : '';
    });

});
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
                , layout: ['count', 'prev', 'page', 'next']
                , limit: 10
                , jump: function (obj) {
                    //调用加载函数加载数据
                    showByClassification(obj.curr, obj.limit, videoClassification);
                    showSeriesByClassification(obj.curr, obj.limit, videoClassification);
                }
            });
        }
    });

    /**
     * 根据一级分类获取视频列表
     */
    $('#videoClass1, #videoClass1_limitless').on('click', function () {
        videoClassification = "编程语言";
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
                    , layout: ['count', 'prev', 'page', 'next']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showByClassification(obj.curr, obj.limit, videoClassification);
                        showSeriesByClassification(obj.curr, obj.limit, videoClassification);
                    }
                });
            }
        });
    });
    $('#videoClass2, #videoClass2_limitless').on('click', function () {
        videoClassification = "云计算大数据";
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
                    , layout: ['count', 'prev', 'page', 'next']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showByClassification(obj.curr, obj.limit, videoClassification);
                        showSeriesByClassification(obj.curr, obj.limit, videoClassification);
                    }
                });
            }
        });
    });

    $('#videoClass3, #videoClass3_limitless').on('click', function () {
        videoClassification = "计算机基础";
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
                    , layout: ['count', 'prev', 'page', 'next']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showByClassification(obj.curr, obj.limit, videoClassification);
                        showSeriesByClassification(obj.curr, obj.limit, videoClassification);
                    }
                });
            }
        });
    });

    $('#videoClass4, #videoClass4_limitless').on('click', function () {
        videoClassification = "移动开发";
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
                    , layout: ['count', 'prev', 'page', 'next']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showByClassification(obj.curr, obj.limit, videoClassification);
                        showSeriesByClassification(obj.curr, obj.limit, videoClassification);
                    }
                });
            }
        });
    });

    $('#videoClass5, #videoClass5_limitless').on('click', function () {
        videoClassification = "前沿技术";
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
                    , layout: ['count', 'prev', 'page', 'next']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showByClassification(obj.curr, obj.limit, videoClassification);
                        showSeriesByClassification(obj.curr, obj.limit, videoClassification);
                    }
                });
            }
        });
    });

    /**
     * 根据二级分类获取视频列表
     */
    //编程语言
    function showClassificationLittle(classificationLittle) {
        $.ajax({
            url: "/videoManage/getCountByLittleClassification?classificationLittle=" + classificationLittle,
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demo7'
                    , count: data.data
                    , layout: ['count', 'prev', 'page', 'next']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showByClassificationLittle(obj.curr, obj.limit, classificationLittle);
                        showSeriesByClassificationLittle(obj.curr, obj.limit, classificationLittle);
                    }
                });
            }
        });
    }

    $('#videoClass1_Java').on('click', function () {
        classificationLittle = "Java";
        showClassificationLittle(classificationLittle);
    });
    $('#videoClass1_php').on('click', function () {
        classificationLittle = "php";
        showClassificationLittle(classificationLittle);
    });
    $('#videoClass1_python').on('click', function () {
        classificationLittle = "Python";
        showClassificationLittle(classificationLittle);
    });
    $('#videoClass1_c2').on('click', function () {
        classificationLittle = "C";
        showClassificationLittle(classificationLittle);
    });
    //云计算大数据
    $('#videoClass2_Hadoop').on('click', function () {
        classificationLittle = "Hadoop";
        showClassificationLittle(classificationLittle);
    });
    $('#videoClass2_Spark').on('click', function () {
        classificationLittle = "Spark";
        showClassificationLittle(classificationLittle);
    });
    $('#videoClass2_Hbase').on('click', function () {
        classificationLittle = "Hbase";
        showClassificationLittle(classificationLittle);
    });
    $('#videoClass2_Aliyun').on('click', function () {
        classificationLittle = "阿里云";
        showClassificationLittle(classificationLittle);
    });
    $('#videoClass2_Docker').on('click', function () {
        classificationLittle = "Docker";
        showClassificationLittle(classificationLittle);
    });
    //计算机基础
    $('#videoClass3_network').on('click', function () {
        classificationLittle = "计算机网络";
        showClassificationLittle(classificationLittle);
    });
    $('#videoClass3_algorithm').on('click', function () {
        classificationLittle = "算法与数据结构";
        showClassificationLittle(classificationLittle);
    });
    //移动开发
    $('#videoClass4_Android').on('click', function () {
        classificationLittle = "Android";
        showClassificationLittle(classificationLittle);
    });
    $('#videoClass4_iOS').on('click', function () {
        classificationLittle = "iOS";
        showClassificationLittle(classificationLittle);
    });
    $('#videoClass4_react_natives').on('click', function () {
        classificationLittle = "React native";
        showClassificationLittle(classificationLittle);
    });
    //前沿技术
    $('#videoClass5_microservice').on('click', function () {
        classificationLittle = "微服务";
        showClassificationLittle(classificationLittle);
    });
    $('#videoClass5_blockchain').on('click', function () {
        classificationLittle = "区块链";
        showClassificationLittle(classificationLittle);
    });
    $('#videoClass5_machine_learning').on('click', function () {
        classificationLittle = "机器学习";
        showClassificationLittle(classificationLittle);
    });
    $('#videoClass5_deep_learning').on('click', function () {
        classificationLittle = "深度学习";
        showClassificationLittle(classificationLittle);
    });
    $('#videoClass5_computer_vision').on('click', function () {
        classificationLittle = "计算机视觉";
        showClassificationLittle(classificationLittle);
    });
});

function showByClassification(pageNo, pageSize, videoClassification) {
    var formData = new FormData();
    formData.append("query", videoClassification);
    // formData.append("limit", pageSize);
    // formData.append("page", pageNo);
    formData.append("limit", 10);
    formData.append("page", 1);
    $.ajax({
        url: "/videoManage/searchByClassification",
        type: "post",
        dataType: "json",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            $("#videoClass_limitless_item").empty();
            if (data.data.numberOfElements === 0) {
                var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                    "<div>" +
                    "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                    "<span>暂无相关信息，请查看其它分类！</span>" +
                    "</div>" +
                    "</div>";
                $("#videoClass_limitless_item").append(appendhtml);
                $("#video-more").empty();
            } else {
                for (var i = 0; i < data.data.numberOfElements; i++) {
                    var appendhtml = "<input type=\"hidden\" id=\"videoId\" name=\"videoId\" value=" + data.data.content[i].id + ">\n " +
                        "                               <div class=\"layui-inline\" style=\"width: 212px; padding: 5px; margin-left: 15px\">\n" +
                        "                                    <div class=\"layui-card\">\n" +
                        "                                        <a href=\"/userUrl/playVideo?id=" + data.data.content[i].id + "&pageNum=1\">" +
                        "                                           <img src=" + data.data.content[i].videoImageUrl + " width=\"212\" height=\"119\">\n" +
                        "                                            <div style=\"height: 40px\">\n" +
                        "                                                <span style=\"margin-left: 15px; font-size: 12px\">" + data.data.content[i].videoName + "</span>\n" +
                        "                                            </div>\n" +
                        "                                        </a>\n" +
                        "                                        <div class=\"layui-card-body\">\n" +
                        "                                            <div class=\"layui-input-inline\" style=\"float: left\">\n" +
                        "                                                <img src=\"../images/integral.png\" style=\"width: 16px; height: 16px\"/>\n" +
                        "                                                <span style=\"color: red; font-size: 10px\">" + data.data.content[i].videoIntegral + "</span>&nbsp;&nbsp;" +
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
                $("#video-more").empty();
                var appendHtml = "   <a href=\"/userUrl/videoList?videoClassification=" + videoClassification +"\">\n" +
                    "                    <span style=\" font-size: 16px\">更多&nbsp;&nbsp;<img src=\"../images/more.png\" width='12'/></span>\n" +
                    "                </a>";
                $("#video-more").append(appendHtml);
            }
        }
    });
}

function showByClassificationLittle(pageNo, pageSize, classificationLittle) {
    var formData = new FormData();
    formData.append("query", classificationLittle);
    // formData.append("limit", pageSize);
    // formData.append("page", pageNo);
    formData.append("limit", 10);
    formData.append("page", 1);
    $.ajax({
        url: "/videoManage/searchByLittleClassification",
        type: "post",
        dataType: "json",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            $("#videoClass_limitless_item").empty();
            if (data.data.numberOfElements === 0) {
                var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                    "<div>" +
                    "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                    "<span>暂无相关信息，请查看其它分类！</span>" +
                    "</div>" +
                    "</div>";
                $("#videoClass_limitless_item").append(appendhtml);
                $("#video-more").empty();
            } else {
                for (var i = 0; i < data.data.numberOfElements; i++) {
                    var appendhtml = "<input type=\"hidden\" id=\"videoId\" name=\"videoId\" value=" + data.data.content[i].id + ">\n " +
                        "                               <div class=\"layui-inline\" style=\"width: 212px; padding: 5px; margin-left: 15px\">\n" +
                        "                                    <div class=\"layui-card\">\n" +
                        "                                        <a href=\"/userUrl/playVideo?id=" + data.data.content[i].id + "&pageNum=1\">" +
                        "                                           <img src=" + data.data.content[i].videoImageUrl + " width=\"212\" height=\"119\">\n" +
                        "                                            <div style=\"height: 40px\">\n" +
                        "                                                <span style=\"margin-left: 15px; font-size: 12px\">" + data.data.content[i].videoName + "</span>\n" +
                        "                                            </div>\n" +
                        "                                        </a>\n" +
                        "                                        <div class=\"layui-card-body\">\n" +
                        "                                            <div class=\"layui-input-inline\" style=\"float: left\">\n" +
                        "                                                <img src=\"../images/integral.png\" style=\"width: 16px; height: 16px\"/>\n" +
                        "                                                <span style=\"color: red; font-size: 10px\">" + data.data.content[i].videoIntegral + "</span>&nbsp;&nbsp;" +
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
        }
    });
}

function showSeriesByClassification(pageNo, pageSize, seriesClassification) {
    var formData = new FormData();
    formData.append("query", seriesClassification);
    // formData.append("limit", pageSize);
    // formData.append("page", pageNo);
    formData.append("limit", 5);
    formData.append("page", 1);
    $.ajax({
        url: "/videoSeriesManage/searchByClassification",
        type: "post",
        dataType: "json",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            $("#series-list").empty();
            if (data.data.numberOfElements === 0) {
                $("#series-more").empty();
                $("#series-list").empty();
                document.getElementById("recommend-series").style.display = "none";
            } else {
                for (var i = 0; i < data.data.numberOfElements; i++) {
                    var appendhtml = "<input type=\"hidden\" id=\"seriesId\" name=\"seriesId\" value=" + data.data.content[i].id + ">\n " +
                        "                               <div class=\"layui-col-md6\" style=\"width: 222px; padding: 5px; margin-left: 15px\">\n" +
                        "                                    <div class=\"layui-card\">\n" +
                        "                                    <a href=\"/userUrl/playSeriesBySeries?seriesId=" + data.data.content[i].id + "&pageNum=1\">" +
                        "                                           <img src=" + data.data.content[i].seriesImageUrl + " width=\"212\" height=\"119\">\n" +
                        "                                            <div style=\"height: 40px\">\n" +
                        "                                                <span style=\"margin-left: 15px; font-size: 12px\">" + data.data.content[i].seriesName + "</span>\n" +
                        "                                            </div>\n" +
                        "                                        </a>\n" +
                        "                                        <div class=\"layui-card-body\">\n" +
                        "                                            <div class=\"layui-input-inline\" style=\"float: left\">\n" +
                        "                                                <img src=\"../images/integral.png\" style=\"width: 16px; height: 16px\"/>\n" +
                        "                                                <span style=\"color: red; font-size: 10px\">" + data.data.content[i].seriesIntegral + "</span>&nbsp;&nbsp;" +
                        // "                                                <img src=\"../images/play.png\" style=\"width: 16px; height: 16px\"/>\n" +
                        // "                                                <span style=\"font-size: 10px; color:#999;\">" + data.data.content[i].playbackVolume + "</span>\n" +
                        "                                            </div>\n" +
                        "                                            <div class=\"layui-input-inline\" style=\"float: right\">\n" +
                        "                                                <span style=\"font-size: 10px; color:#999;\">" + data.data.content[i].seriesDate + "</span>\n" +
                        "                                            </div>\n" +
                        "                                            <div style=\"clear: both\"></div>\n" +
                        "                                        </div>\n" +
                        "                                    </div>\n" +
                        "                                </div>";
                    $("#series-list").append(appendhtml);
                }
                document.getElementById("recommend-series").style.display = "block";
                $("#series-more").empty();
                var appendHtml = "   <a href=\"/userUrl/seriesList?seriesClassification=" + seriesClassification +"\">\n" +
                    "                    <span style=\" font-size: 16px\">更多&nbsp;&nbsp;<img src=\"../images/more.png\" width='12'/></span>\n" +
                    "                </a>";
                $("#series-more").append(appendHtml);
            }
        }
    });
}

function showSeriesByClassificationLittle(pageNo, pageSize, classificationLittle) {
    var formData = new FormData();
    formData.append("query", classificationLittle);
    // formData.append("limit", pageSize);
    // formData.append("page", pageNo);
    formData.append("limit", 5);
    formData.append("page", 1);
    $.ajax({
        url: "/videoSeriesManage/searchByLittleClassification",
        type: "post",
        dataType: "json",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            $("#series-list").empty();
            if (data.data.numberOfElements === 0) {
                $("#series-list").empty();
                document.getElementById("recommend-series").style.display = "none";
            } else {
                for (var i = 0; i < data.data.numberOfElements; i++) {
                    var appendhtml = "<input type=\"hidden\" id=\"videoId\" name=\"videoId\" value=" + data.data.content[i].id + ">\n " +
                        "                               <div class=\"layui-col-md6\" style=\"width: 222px; padding: 5px; margin-left: 15px\">\n" +
                        "                                    <div class=\"layui-card\">\n" +
                        "                                        <a href=\"/userUrl/playSeriesBySeries?seriesId=" + data.data.content[i].id + "&pageNum=1\">" +
                        "                                           <img src=" + data.data.content[i].seriesImageUrl + " width=\"212\" height=\"119\">\n" +
                        "                                            <div style=\"height: 40px\">\n" +
                        "                                                <span style=\"margin-left: 15px; font-size: 12px\">" + data.data.content[i].seriesName + "</span>\n" +
                        "                                            </div>\n" +
                        "                                        </a>\n" +
                        "                                        <div class=\"layui-card-body\">\n" +
                        "                                            <div class=\"layui-input-inline\" style=\"float: left\">\n" +
                        "                                                <img src=\"../images/integral.png\" style=\"width: 16px; height: 16px\"/>\n" +
                        "                                                <span style=\"color: red; font-size: 10px\">" + data.data.content[i].seriesIntegral + "</span>&nbsp;&nbsp;" +
                        // "                                                <img src=\"../images/play.png\" style=\"width: 16px; height: 16px\"/>\n" +
                        // "                                                <span style=\"font-size: 10px; color:#999;\">" + data.data.content[i].playbackVolume + "</span>\n" +
                        "                                            </div>\n" +
                        "                                            <div class=\"layui-input-inline\" style=\"float: right\">\n" +
                        "                                                <span style=\"font-size: 10px; color:#999;\">" + data.data.content[i].seriesDate + "</span>\n" +
                        "                                            </div>\n" +
                        "                                            <div style=\"clear: both\"></div>\n" +
                        "                                        </div>\n" +
                        "                                    </div>\n" +
                        "                                </div>";
                    $("#series-list").append(appendhtml);
                }
            }
        }
    });
}
