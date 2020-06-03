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
                , layout: ['count', 'prev', 'page', 'next']
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
                    , layout: ['count', 'prev', 'page', 'next']
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
            url: "/videoSeriesManage/getCountVideoByQuery?query=" + query,
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
                    , layout: ['count', 'prev', 'page', 'next']
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
                    , layout: ['count', 'prev', 'page', 'next']
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
                        "                               <div class=\"layui-inline\" style=\"width: 212px; padding: 5px; margin-left: 15px\">\n" +
                        "                                    <div class=\"layui-card\">\n" +
                        "                                        <a href=\"/userUrl/playVideo?id=" + data.data.content[i].id + "&pageNum=1\">" +
                        "                                           <img src=" + data.data.content[i].videoImageUrl + " width=\"212\" height=\"119\">\n" +
                        "                                            <div style=\"min-height: 30px; margin-left: 15px; \">\n" +
                        "                                                <span style=\"font-size: 12px\">" + data.data.content[i].videoName + "</span>\n" +
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
        url: "/videoSeriesManage/getVideoByQuery",
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
                    var appendHtml =  "<div class=\"layui-card\" style=\"width: 100%; min-height: 150px; margin-bottom: 20px;\">\n" +
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
                        "                                        <a href=\"/userUrl/question?id=" + data.data.content[i].id + "&pageNum=1\"><b>" + data.data.content[i].questionName +"</b></a>\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"layui-input-inline\" style=\"float: right\">\n" +
                        "                                    <img src=\"../images/user1.png\" style=\"width: 16px; height: 16px\"/>\n" +
                        "                                    <span style=\"font-size: 10px; color:#999;margin-right: 40px;\">" + data.data.content[i].user.userName +"</span>" +
                        "                                        <span style=\"font-size: 10px; color:#999;margin-right: 40px\">分类：" + data.data.content[i].classification + "</span>\n" +
                        "                                        <span style=\"font-size: 10px; color:#999;margin-right: 40px\">" + data.data.content[i].questionDate + "</span>\n" +
                        "                                    </div>\n" +
                        "                                    <div style=\"clear: both\"></div>\n" +
                        "                                </div>\n" +
                        "                                <div class=\"layui-card-body\">" +
                        "                                   <span style=\"font-size: 12px; color:#999\"><b>问题详述：</b>" + data.data.content[i].questionContent +"</span><br>" +
                        "                                   <span style=\"font-size: 10px; color: #00be00\">浏览" + data.data.content[i].viewNumber +"</span>" +
                        "                               </div>\n" +
                        "                            </div>\n" +
                        "                        </div>\n" +
                        "                    </div>";

                    $("#videoClass_limitless_item").append(appendhtml1);
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
                        "                                    </div>\n" +
                        "                                    <div class=\"layui-input-inline\" style=\"float: right\">\n" +
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

