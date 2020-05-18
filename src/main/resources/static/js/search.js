var query = document.getElementById("query").value;
layui.use(['laypage', 'layer'], function () {
    var laypage = layui.laypage
        , layer = layui.layer;

    $.ajax({
        url: "/videoManage/getCountByQuery?query=" + query,
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
                    showVideoByQuery(obj.curr, obj.limit, query);
                }
            });
        }
    });

    $('#searchVideo').on('click', function () {
        $.ajax({
            url: "/videoManage/getCountByQuery?query=" + query,
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demo7'
                    , count: data.data
                    , layout: ['count']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showVideoByQuery(obj.curr, obj.limit, query);
                    }
                });
            }
        });
    });
    $('#searchSeries').on('click', function () {
        $.ajax({
            url: "/videoSeriesManage/getCountByQuery?query=" + query,
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
                        showSeriesByQuery(obj.curr, obj.limit, query);
                    }
                });
            }
        });
    });
    $('#searchQuestion').on('click', function () {
        $.ajax({
            url: "/questionManage/getCountByQuery?query=" + query,
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
                        showQuestionByQuery(obj.curr, obj.limit, query);
                    }
                });
            }
        });
    });
    $('#searchUser').on('click', function () {
        $.ajax({
            url: "/userManage/getCountByQuery?query=" + query,
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
                        showUserByQuery(obj.curr, obj.limit, query);
                    }
                });
            }
        });
    });
});

function showVideoByQuery(pageNo, pageSize, query) {
    var formData = new FormData();
    formData.append("query", query);
    formData.append("limit", pageSize);
    formData.append("page", pageNo);
    $.ajax({
        url: "/videoManage/search",
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
                    "</div>"
                $("#videoClass_limitless_item").append(appendhtml);
            } else {
                document.getElementById("demo7").style.display = "block";
                for (var i = 0; i < data.data.numberOfElements; i++) {
                    var appendhtml = "<input type=\"hidden\" id=\"videoId\" name=\"videoId\" value=" + data.data.content[i].id + ">\n " +
                        "                               <div class=\"layui-col-md6\" style=\"width: 222px; padding: 5px; margin-left: 15px\">\n" +
                        "                                    <div class=\"layui-card\">\n" +
                        "                                        <a href=\"/userUrl/playVideo?id=" + data.data.content[i].id + "\">" +
                        "                                           <img src=" + data.data.content[i].videoImageUrl + " width=\"212\">\n" +
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
                        "                                            <img src=\"../images/user1.png\" style=\"width: 16px; height: 16px\"/>\n" +
                        "                                            <span style=\"font-size: 10px; color:#999;\">" + data.data.content[i].user.userName +"</span>" +
                        "                                        </div>\n" +
                        "                                    </div>\n" +
                        "                                </div>";
                    $("#videoClass_limitless_item").append(appendhtml);
                }
            }
        }
    });
}
function showSeriesByQuery(pageNo, pageSize, query) {
    var formData = new FormData();
    formData.append("query", query);
    formData.append("limit", pageSize);
    formData.append("page", pageNo);
    $.ajax({
        url: "/videoSeriesManage/search",
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
                    var appendhtml = "<input type=\"hidden\" id=\"videoId\" name=\"videoId\" value=" + data.data.content[i].id + ">\n " +
                        "                               <div class=\"layui-col-md6\" style=\"width: 222px; padding: 5px; margin-left: 15px\">\n" +
                        "                                    <div class=\"layui-card\">\n" +
                        "                                        <a href=\"/userUrl/playVideo?id=" + data.data.content[i].id + "\">" +
                        "                                           <img src=" + data.data.content[i].seriesImageUrl + " width=\"212\">\n" +
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
                        "                                            <img src=\"../images/user1.png\" style=\"width: 16px; height: 16px\"/>\n" +
                        "                                            <span style=\"font-size: 10px; color:#999;\">" + data.data.content[i].user.userName +"</span>" +
                        "                                        </div>\n" +
                        "                                    </div>\n" +
                        "                                </div>";
                    $("#videoClass_limitless_item").append(appendhtml);
                }
            }
        }
    });
}
function showQuestionByQuery(pageNo, pageSize, query) {
    var formData = new FormData();
    formData.append("query", query);
    formData.append("limit", pageSize);
    formData.append("page", pageNo);
    $.ajax({
        url: "/questionManage/search",
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
                    var appendhtml1 = "<div class=\"layui-row layui-col-space15\">\n" +
                        "                        <div class=\"layui-col-md12\">\n" +
                        "                            <div class=\"layui-card\">\n" +
                        "                                <div class=\"layui-card-header\">\n" +
                        "                                    <div class=\"layui-input-inline\" style=\"float: left;\">\n" +
                        "                                        <a href=\"\"><b>" + data.data.content[i].questionName +"</b></a>\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"layui-input-inline\" style=\"float: right\">\n" +
                        "                                    <img src=\"../images/user1.png\" style=\"width: 16px; height: 16px\"/>\n" +
                        "                                    <span style=\"font-size: 10px; color:#999;margin-right: 40px;\">" + data.data.content[i].user.userName +"</span>";

                    if(data.data.content[i].questionIsSolve === 1){
                        var appendhtml2 = "<img src=\"../images/correct.png\" style=\"width: 16px; height: 16px\"/>" +
                            "<span style=\"font-size: 10px; margin-right: 40px; color: green\">已解决</span>\n";
                    }else {
                        var appendhtml2 = "<img src=\"../images/error.png\" style=\"width: 16px; height: 16px\"/>" +
                            "<span style=\"font-size: 10px; margin-right: 40px; color: red\">未解决</span>\n";
                    }

                    var appendhtml3 = "<img src=\"../images/integral.png\" style=\"width: 16px; height: 16px\"/>\n" +
                        "                                        <span style=\"font-size: 10px; color:#999;margin-right: 40px\">" + data.data.content[i].questionIntegral + "</span>\n" +
                        "                                        <span style=\"font-size: 10px; color:#999;margin-right: 40px\">分类：" + data.data.content[i].classification + "</span>\n" +
                        "                                        <span style=\"font-size: 10px; color:#999;margin-right: 40px\">" + data.data.content[i].questionDate + "</span>\n" +
                        "                                    </div>\n" +
                        "                                    <div style=\"clear: both\"></div>\n" +
                        "                                </div>\n" +
                        "                                <div class=\"layui-card-body\">" +
                        "                                   <span style=\"font-size: 12px; color:#999\"><b>问题详述：</b>" + data.data.content[i].questionContent +"</span>" +
                        "                               </div>\n" +
                        "                            </div>\n" +
                        "                        </div>\n" +
                        "                    </div>";

                    $("#videoClass_limitless_item").append(appendhtml1 + appendhtml2 + appendhtml3);
                }
            }
        }
    });
}
function showUserByQuery(pageNo, pageSize, query) {
    var formData = new FormData();
    formData.append("query", query);
    formData.append("limit", pageSize);
    formData.append("page", pageNo);
    $.ajax({
        url: "/userManage/searchByQuery",
        type: "post",
        dataType: "json",
        async: false,
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
                    var appendhtml1 = "<div class=\"layui-row layui-col-space15\">\n" +
                        "                        <div class=\"layui-col-md12\">\n" +
                        "                            <div class=\"layui-card\">\n" +
                        "                                <div class=\"layui-card-header\">\n" +
                        "                                    <div class=\"layui-input-inline\" style=\"float: left;\">\n" +
                        "                                        <a href=\"\">\n" +
                        "                                            <img src=\"../images/user1.png\" height=\"35\" width=\"35\"/>\n" +
                        "                                            <span style=\"margin-left: 20px\"><b>" + data.data.content[i].userName +"</b></span>\n" +
                        "                                        </a>\n" +
                        "                                        <button type=\"button\" class=\"layui-btn layui-btn-sm layui-btn-normal\" style=\"margin-left: 20px\">关注</button>\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"layui-input-inline\" style=\"float: right\">\n" +
                        "<span style=\"font-size: 10px; color:#999;margin-right: 40px\" id=\"fan" + i +"\"></span>\n" +
                        "<span style=\"font-size: 10px; color:#999;margin-right: 40px\" id=\"video" + i +"\"></span>\n" +
                        "                  </div>\n" +
                        "                                <div style=\"clear: both\"></div>\n" +
                        "                                </div>\n" +
                        "                                <div style=\"padding: 10px; margin-left: 55px\">\n" +
                        "                                    <span style=\"font-size: 14px; color:#999\">\n" +
                        "                                        <b>个人简介：</b>" + data.data.content[i].introduction + "</span>\n" +
                        "                                </div>\n" +
                        "                            </div>\n" +
                        "                        </div>\n" +
                        "                    </div>";
                    $("#videoClass_limitless_item").append(appendhtml1);
                    $.ajax({
                        url: "/followManage/getCountFanById?id=" + data.data.content[i].id,
                        type: "post",
                        async: false,
                        dataType: "json",
                        contentType: false,
                        processData: false,
                        success: function (data) {
                            // var appendhtml2 = "<span style=\"font-size: 10px; color:#999;margin-right: 40px\">粉丝：" + data.data + "</span>\n";
                            // $("#videoClass_limitless_item").append(appendhtml2);
                            document.getElementById("fan" + i).innerText = "粉丝：" + data.data ;
                        }
                    });
                    $.ajax({
                        url: "/videoManage/getCountVideoByUserId?id=" + data.data.content[i].id,
                        type: "post",
                        async: false,
                        dataType: "json",
                        contentType: false,
                        processData: false,
                        success: function (data) {
                            // var appendhtml3 = "<span style=\"font-size: 10px; color:#999;margin-right: 40px\">稿件：" + data.data + "</span>\n";
                            // $("#videoClass_limitless_item").append(appendhtml3);
                            document.getElementById("video"+ i).innerText = "稿件：" + data.data ;
                        }
                    });
                }
            }
        }
    });
}

