var seriesClassification = document.getElementById("seriesClassification").value;
var classificationLittle;
layui.use(['laypage', 'layer', 'jquery'], function () {
    var laypage = layui.laypage
        , layer = layui.layer;
    var $ = layui.$;

    $.ajax({
        url: "/videoSeriesManage/getCountByClassification?seriesClassification=" + seriesClassification,
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
                    showByClassification(obj.curr, obj.limit, seriesClassification);
                }
            });
        }
    });

    /**
     * 根据一级分类获取视频列表
     */
    $('#videoClass1, #videoClass1_limitless').on('click', function () {
        seriesClassification = "编程语言";
        $.ajax({
            url: "/videoSeriesManage/getCountByClassification?seriesClassification=" + seriesClassification,
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
                        showByClassification(obj.curr, obj.limit, seriesClassification);
                    }
                });
            }
        });
    });
    $('#videoClass2, #videoClass2_limitless').on('click', function () {
        seriesClassification = "云计算大数据";
        $.ajax({
            url: "/videoSeriesManage/getCountByClassification?seriesClassification=" + seriesClassification,
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
                        showByClassification(obj.curr, obj.limit, seriesClassification);
                    }
                });
            }
        });
    });

    $('#videoClass3, #videoClass3_limitless').on('click', function () {
        seriesClassification = "计算机基础";
        $.ajax({
            url: "/videoSeriesManage/getCountByClassification?seriesClassification=" + seriesClassification,
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
                        showByClassification(obj.curr, obj.limit, seriesClassification);
                    }
                });
            }
        });
    });

    $('#videoClass4, #videoClass4_limitless').on('click', function () {
        seriesClassification = "移动开发";
        $.ajax({
            url: "/videoSeriesManage/getCountByClassification?seriesClassification=" + seriesClassification,
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
                        showByClassification(obj.curr, obj.limit, seriesClassification);
                    }
                });
            }
        });
    });

    $('#videoClass5, #videoClass5_limitless').on('click', function () {
        seriesClassification = "前沿技术";
        $.ajax({
            url: "/videoSeriesManage/getCountByClassification?seriesClassification=" + seriesClassification,
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
                        showByClassification(obj.curr, obj.limit, seriesClassification);
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
            url: "/videoSeriesManage/getCountByLittleClassification?classificationLittle=" + classificationLittle,
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

function showByClassification(pageNo, pageSize, seriesClassification) {
    var formData = new FormData();
    formData.append("query", seriesClassification);
    formData.append("limit", pageSize);
    formData.append("page", pageNo);
    $.ajax({
        url: "/videoSeriesManage/searchByClassification",
        type: "post",
        dataType: "json",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            $("#videoClass_limitless_item").empty();
            if (data.data.numberOfElements === 0) {
                document.getElementById("demo7").style.display = "none";
                var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                    "<div>" +
                    "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                    "<span>暂无相关信息，请查看其它分类！</span>" +
                    "</div>" +
                    "</div>";
                $("#videoClass_limitless_item").append(appendhtml);
            } else {
                document.getElementById("demo7").style.display = "block";
                for (var i = 0; i < data.data.numberOfElements; i++) {
                    var appendHtml =  "<div class=\"layui-card\ style=\"width: 100%; min-height: 150px; margin-bottom: 20px;\">\n" +
                        "                                    <a href=\"/userUrl/playSeriesBySeries?seriesId=" + data.data.content[i].id + "&pageNum=1\">" +
                        "                                    <div class=\"course-img layui-input-inline\" style=\"width: 250px; height: 150px\">\n" +
                        "                                        <img src=" + data.data.content[i].seriesImageUrl + "\n" +
                        "                                             height=\"150\"\n" +
                        "                                             width=\"250\"/>\n" +
                        "                                    </div>\n" +
                        "                                    </a>\n" +
                        "                                    <div class=\"my-course-introduce layui-input-inline\" style=\"width: 900px; min-height: 150px; \">\n" +
                        "                                    <a href=\"/userUrl/playSeriesBySeries?seriesId=" + data.data.content[i].id + "&pageNum=1\">" +
                        "                                        <div class=\"layui-card-header\">" + data.data.content[i].seriesName + "</div>\n" +
                        "                                    </a>\n" +
                        "                                        <div class=\"layui-card-body\">\n" +
                        "                                             <span style=\"font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                        "                                                总集数：" + data.data.content[i].seriesNumber + "\n" +
                        "                                            </span>\n" +
                        "                                            <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                        "                                                分类：" + data.data.content[i].seriesClassification + "\n" +
                        "                                            </span>\n" +
                        "                                            <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                        "                                                二级分类：" + data.data.content[i].classificationLittle + "\n" +
                        "                                            </span>\n" +
                        "                                            <span style=\"margin-left: 20px; font-size: 12px; color: green; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                        "                                                <img src=\"../images/integral.png\" style=\"width: 13px; height: 13px\"/>\n" +
                        "                                                " + data.data.content[i].seriesIntegral + "\n" +
                        "                                            </span>" +
                        "                                        </div>\n" +
                        "                                        <div class=\"layui-card-body\">\n" +
                        "                                           <span style=\"font-size: 12px; color:#999\"><b>系列简介：</b>" + data.data.content[i].introduction +"</span>" +
                        "                                        </div>\n" +
                        "                                    </div>\n" +
                        "                                </div>";
                    $("#videoClass_limitless_item").append(appendHtml);
                }
            }
        }
    });
}

function showByClassificationLittle(pageNo, pageSize, classificationLittle) {
    var formData = new FormData();
    formData.append("query", classificationLittle);
    formData.append("limit", pageSize);
    formData.append("page", pageNo);
    $.ajax({
        url: "/videoSeriesManage/searchByLittleClassification",
        type: "post",
        dataType: "json",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            $("#videoClass_limitless_item").empty();
            if (data.data.numberOfElements === 0) {
                document.getElementById("demo7").style.display = "none";
                var appendhtml = "<div style=\" text-align: center; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                    "<div>" +
                    "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                    "<span>暂无相关信息，请查看其它分类！</span>" +
                    "</div>" +
                    "</div>";
                $("#videoClass_limitless_item").append(appendhtml);
            } else {
                document.getElementById("demo7").style.display = "block";
                for (var i = 0; i < data.data.numberOfElements; i++) {
                    var appendHtml =  "<div class=\"layui-card\ style=\"width: 100%; min-height: 150px; background-color: #dee3e2;margin-bottom: 20px;\">\n" +
                        "                                    <a href=\"/userUrl/playSeriesBySeries?seriesId=" + data.data.content[i].id + "&pageNum=1\">" +
                        "                                    <div class=\"course-img layui-input-inline\" style=\"width: 250px; height: 150px\">\n" +
                        "                                        <img src=" + data.data.content[i].seriesImageUrl + "\n" +
                        "                                             height=\"150\"\n" +
                        "                                             width=\"250\"/>\n" +
                        "                                    </div>\n" +
                        "                                    </a>\n" +
                        "                                    <div class=\"my-course-introduce layui-input-inline\" style=\"width: 900px; min-height: 150px\">\n" +
                        "                                    <a href=\"/userUrl/playSeriesBySeries?seriesId=" + data.data.content[i].id + "&pageNum=1\">" +
                        "                                        <div class=\"layui-card-header\">" + data.data.content[i].seriesName + "</div>\n" +
                        "                                    </a>\n" +
                        "                                        <div class=\"layui-card-body\">\n" +
                        "                                             <span style=\"font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                        "                                                总集数：" + data.data.content[i].seriesNumber + "\n" +
                        "                                            </span>\n" +
                        "                                            <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                        "                                                分类：" + data.data.content[i].seriesClassification + "\n" +
                        "                                            </span>\n" +
                        "                                            <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                        "                                                二级分类：" + data.data.content[i].classificationLittle + "\n" +
                        "                                            </span>\n" +
                        "                                            <span style=\"margin-left: 20px; font-size: 12px; color: green; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                        "                                                <img src=\"../images/integral.png\" style=\"width: 13px; height: 13px\"/>\n" +
                        "                                                " + data.data.content[i].seriesIntegral + "\n" +
                        "                                            </span>" +
                        "                                        </div>\n" +
                        "                                        <div class=\"layui-card-body\">\n" +
                        "                                           <span style=\"font-size: 12px; color:#999\"><b>系列简介：</b>" + data.data.content[i].introduction +"</span>" +
                        "                                        </div>\n" +
                        "                                    </div>\n" +
                        "                                </div>";
                    $("#videoClass_limitless_item").append(appendHtml);
                }
            }
        }
    });
}
