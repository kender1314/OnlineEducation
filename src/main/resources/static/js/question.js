var userId = document.getElementById("userId").value;
var questionId = document.getElementById("questionId").value;
layui.use(['laypage', 'layer', 'jquery'], function () {
    var laypage = layui.laypage
        , layer = layui.layer;
    var $ = layui.$;

    /**
     * 获取时间
     */
    $.ajax({
        url: "/questionManage/getQuestionById?id=" + questionId,
        type: "post",
        dataType: "json",
        contentType: false,
        processData: false,
        success: function (data) {
            $("#questionDate").empty();
            if (data.data !== null) {
                var appendhtml = "<span style=\"font-size: 12px; color: #999\">" + data.data.questionDate + "</span>";
                $("#questionDate").append(appendhtml);
            }
        }
    });

    $('#answer-submit').on('click', function () {
        var answerContent = document.getElementById("answer-content").value;
        var myDate = new Date();
        var date = myDate.getFullYear() + "-" + myDate.getMonth() + "-" + myDate.getDate();
        var formData = new FormData();
        if (answerContent === "" || answerContent == null) {
            document.getElementById("content-warm").style.display = "block";
        } else {
            formData.append("answerContent", answerContent);
        }
        formData.append("userId", userId);
        formData.append("questionId", questionId);
        formData.append("answerDate", date);
        $.ajax({
            url: "/answerManage/insertAnswer",
            type: "post",
            dataType: "json",
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.data === true) {
                    layer.msg("评论成功", {icon: 6});
                    setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                        window.location.reload();//页面刷新
                    }, 1000);
                } else {
                    layer.msg("评论失败，请重试！", {icon: 6});
                }
            }
        });
    });

    window.showAnswerByQuestionId = function (pageNo, pageSize, questionId) {
        var formData = new FormData();
        formData.append("questionId", questionId);
        formData.append("limit", pageSize);
        formData.append("page", pageNo);
        $.ajax({
            url: "/answerManage/getAnswerList",
            type: "post",
            dataType: "json",
            async: false,
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                $("#answer-list").empty();
                if (data.data.numberOfElements === 0) {
                    document.getElementById("demo8").style.display = "none";
                    var appendhtml = "<div style=\" text-align: center; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                        "<div>" +
                        "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                        "<span>暂无相关评论！</span>" +
                        "</div>" +
                        "</div>";
                    $("#answer-list").append(appendhtml);
                } else {
                    document.getElementById("demo8").style.display = "block";
                    for (var i = 0; i < data.data.numberOfElements; i++) {
                        var appendhtml = " <div class=\"layui-col-md12\" style=\"margin-top: 20px;\">\n" +
                            "                        <div class=\"layui-card\">\n" +
                            "                            <div class=\"layui-card-header\">\n" +
                            "                                <img src=\"../images/user1.png\" style=\"width: 30px; height: 30px\"/><b><span style=\"font-size: 14px\">" + data.data.content[i].user.userName + "</span></b>\n" +
                            "                            </div>\n" +
                            "                            <div class=\"layui-card-body\">\n" +
                            "                               <span style=\"font-size: 13px\">" + data.data.content[i].answerContent + "</span>\n" +
                            "                            </div>\n" +
                            "                            <div style=\"padding-bottom: 20px\">\n" +
                            "                                <div style=\"float: left; margin-left: 15px\">\n" +
                            "                                    <span style=\"font-size: 10px; color: #999\">时间：" + data.data.content[i].answerDate + "</span>\n" +
                            "                                    <a style=\"margin-left: 20px\" href=\"#\"><img src=\"../images/like.png\" height=\"15\" onclick='addLike(" + data.data.content[i].id + ")' width=\"15\"/></a>\n" +
                            "                                    <span style=\"font-size: 14px; color: #999\">" + data.data.content[i].answerLike + "</span>\n" +
                            "                                    <a  href = \"javascript:void(0);\" onclick =' getReplyListCount(" + data.data.content[i].id + ")'\"><img src=\"../images/comment.png\" height=\"15\" width=\"15\"\n" +
                            "                                                    style=\"margin-left: 20px\"/></a>\n" +
                            "                                    </div>" +
                            "                                </div>\n" +
                            "                                <div style=\"clear: both\"></div>\n" +
                            "                        </div>\n" +
                            "                    </div>";
                        $("#answer-list").append(appendhtml);
                    }
                }
            }
        });
    }

    window.addLike = function (id) {
        $.ajax({
            url: "/answerManage/addAnswerLikeById?answerId=" + id,
            type: "post",
            dataType: "json",
            async: false,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.data === true) {
                    layer.msg("点赞成功", {icon: 6});
                    setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                        window.location.reload();//页面刷新
                    }, 1000);
                } else {
                    layer.msg("点赞失败", {icon: 6});
                }
            }
        })
    }

    window.answerReply = function (id) {
        var answerContent = document.getElementById("answerReply" + id).value;
        var myDate = new Date();
        var date = myDate.getFullYear() + "-" + myDate.getMonth() + "-" + myDate.getDate();
        var formData = new FormData();
        if (answerContent === "" || answerContent == null) {
            document.getElementById("answerReply-warm" + id).style.display = "block";
        } else {
            formData.append("answerContent", answerContent);
        }
        formData.append("userId", userId);
        formData.append("questionId", questionId);
        formData.append("answerDate", date);
        formData.append("answerReplyId", id);
        $.ajax({
            url: "/answerManage/insertAnswer",
            type: "post",
            dataType: "json",
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.data === true) {
                    layer.msg("评论成功", {icon: 6});
                    setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                        window.location.reload();//页面刷新
                    }, 1000);
                } else {
                    layer.msg("评论失败，请重试", {icon: 5});
                }
            }
        })
    }

    window.getReplyListCount = function (answerId) {
        $.ajax({
            url: "/answerManage/getCountReplyByAnswerId?answerId=" + answerId,
            type: "post",
            dataType: "json",
            async: false,
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demo8'
                    , count: data.data
                    , layout: ['prev', 'page', 'next', 'count']
                    , limit: 8
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showReplyAnswerList(obj.curr, obj.limit, answerId);
                    }
                });
            }
        });
    }

    window.showReplyAnswerList = function (pageNo, pageSize, replyId) {
        var formData = new FormData();
        formData.append("replyId", replyId);
        formData.append("limit", pageSize);
        formData.append("page", pageNo);
        $.ajax({
            url: "/answerManage/getAnswerReply",
            type: "post",
            dataType: "json",
            async: false,
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.data !== null) {
                    var rpleyContent = document.getElementById("reply" + replyId).style.display;
                    if (rpleyContent === "none") {
                        document.getElementById("reply" + replyId).style.display = "block";
                        $("#replyAnswer" + replyId).empty();
                        for (var i = 0; i < data.data.numberOfElements; i++) {
                            var appendhtml = "<div style=\"margin-top: 20px\">\n" +
                                "                                                    <img src=\"../images/user1.png\" height=\"15\" width=\"15\"/>\n" +
                                "                                                    <span style=\"font-size: 10px; color: #2E2D3C\">" + data.data.content[i].user.userName + "：</span>\n" +
                                "                                                    <span style=\"font-size: 12px\">" + data.data.content[i].answerContent + "</span>\n" +
                                "                                                    <div style=\"margin-top: 5px\">\n" +
                                "                                                        <span style=\"font-size: 10px; color: #999;\">" + data.data.content[i].answerDate + "</span>\n" +
                                "                                                        &nbsp;&nbsp;&nbsp;&nbsp;\n" +
                                "                                                        <a href=\"#\" >\n" +
                                "                                                            <img src=\"../images/like.png\"\n" +
                                "                                                                 style=\"width: 15px; height: 15px\" onclick='addLike(" + data.data.content[i].id + ")'/>\n" +
                                "                                                        </a>\n" +
                                "                                                        <span style=\"font-size: 10px; color: #999;\">" + data.data.content[i].answerLike + "</span>\n" +
                                "                                                        &nbsp;&nbsp;&nbsp;&nbsp;\n" +
                                "                                                        <a href=\"#\" style=\"font-size: 10px; color: #999;\"><img onclick='replyA(" + data.data.content[i].id + ", \"" + data.data.content[i].answerContent + "\")' src=\"../images/comment.png\" height=\"15\" width=\"15\"\n" +
                                "                                                    style=\"margin-left: 20px\"/></a>\n" +
                                "                                                    </div>\n" +
                                "                                                </div>";
                            $("#replyAnswer" + replyId).append(appendhtml);
                        }
                    } else {
                        document.getElementById("reply" + replyId).style.display = "none";
                    }
                }
            }
        });
    }
    window.replyA = function(id, content){
        layer.open({
            type: 6,
            title: '回复评论--"' + content + '"',
            // skin:'layui-layer-rim',
            area: ['600px', 'auto'],

            content: '<textarea placeholder="请输入内容" id="replyA" class="layui-textarea" style="width: 80%; margin-left: 10%; margin-top: 20px"></textarea>\n' +
                '  <span style="color: red; font-size: 12px; display: none; margin-left: 10%" id="replyA-warm">评论不能不为空！</span>\n'
            ,
            btn: ['回复', '取消'],
            btn1: function (index, layero) {
                var answerContent = document.getElementById("replyA").value;
                var myDate = new Date();
                var date = myDate.getFullYear() + "-" + myDate.getMonth() + "-" + myDate.getDate();
                var formData = new FormData();
                if (answerContent === "" || answerContent == null) {
                    document.getElementById("replyA-warm").style.display = "block";
                } else {
                    formData.append("answerContent", answerContent);
                }
                formData.append("userId", userId);
                formData.append("questionId", questionId);
                formData.append("answerDate", date);
                formData.append("answerReplyId", id);
                $.ajax({
                    url: "/answerManage/insertAnswer",
                    type: "post",
                    dataType: "json",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (data) {
                        if (data.data === true) {
                            layer.msg("评论成功", {icon: 6});
                            setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                                window.location.reload();//页面刷新
                            }, 1000);
                        } else {
                            layer.msg("评论失败，请重试", {icon: 5});
                        }
                    }
                })
            },
        });
    }
});

function answer() {
    var answerContent = document.getElementById("my-answer-content").style.display;
    if (answerContent === "none") {
        document.getElementById("my-answer").style.display = "none";
        document.getElementById("my-answer-content").style.display = "block";
    } else {
        document.getElementById("my-answer").style.display = "block";
        document.getElementById("my-answer-content").style.display = "none";
    }
}

