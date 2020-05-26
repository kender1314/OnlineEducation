var userId = document.getElementById("userId").value;
var videoId = document.getElementById("videoId").value;
var videoClassification = document.getElementById("videoClassification").value;
layui.use(['laypage', 'layer', 'jquery'], function () {
    var laypage = layui.laypage
        , layer = layui.layer;
    var $ = layui.$;

    $('#comment-submit').on('click', function () {
        var commentContent = document.getElementById("comment-content").value;
        var myDate = new Date();
        var date = myDate.getFullYear() + "-" + myDate.getMonth() + "-" + myDate.getDate();
        var formData = new FormData();
        if (commentContent === "" || commentContent == null) {
            document.getElementById("content-warm").style.display = "block";
        } else {
            formData.append("commentContent", commentContent);
        }
        formData.append("userId", userId);
        formData.append("videoId", videoId);
        formData.append("commentDate", date);
        $.ajax({
            url: "/commentManage/insertComment",
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
                    layer.msg("评论失败，请重试！", {icon: 5});
                }
            }
        });
    });
    /**
     * 获取时间
     */
    $.ajax({
        url: "/videoManage/getVideoByVideoId?id=" + videoId,
        type: "post",
        dataType: "json",
        contentType: false,
        processData: false,
        success: function (data) {
            $("#videoDate").empty();
            if (data.data !== null) {
                var appendhtml = "<span style=\"font-size: 12px; color: #999\">" + data.data.videoDate + "</span>";
                $("#videoDate").append(appendhtml);
            }
        }
    });

    /**
     * 获取收藏量
     */
    $.ajax({
        url: "/bookmarkManage/getCountBookmarkByVideoId?id=" + videoId,
        type: "post",
        dataType: "json",
        contentType: false,
        processData: false,
        success: function (data) {
            $("#countCollectVideo").empty();
            if (data.data !== null) {
                var appendhtml = "<span style=\"font-size: 12px; color: #999\">" + data.data + "</span>";
                $("#countCollectVideo").append(appendhtml);
            }
        }
    });
    /**
     * 推荐视频
     */
    var formDataVideo = new FormData();
    formDataVideo.append("query", videoClassification);
    formDataVideo.append("limit", 7);
    formDataVideo.append("page", 1);
    // formDataVideo.append("sortKey", "playbackVolume");
    // formDataVideo.append("sortDesc", false);
    $.ajax({
        url: "/videoManage/searchByClassification",
        type: "post",
        dataType: "json",
        data: formDataVideo,
        contentType: false,
        processData: false,
        success: function (data) {
            $("#recommendVideo").empty();
            for (var i = 0; i < data.data.numberOfElements; i++) {
                var appendhtml = "<div style=\"margin-left: 5%; width: 90%; height: 105px; margin-top: 10px; padding: 5px\">\n" +
                    "                <a href=\"/userUrl/playVideo?id=" + data.data.content[i].id + "&pageNum=1\">\n" +
                    "                    <div style=\"float: left\">\n" +
                    "                        <img src=" + data.data.content[i].videoImageUrl + " style=\"height: 100px; width: 150px\"/>\n" +
                    "                    </div>\n" +
                    "                </a>\n" +
                    "                <div style=\"float: left; margin-left: 10px;\">\n" +
                    "                    <div style=\"height: 60px; width: 160px; white-space:normal; word-break:break-all; word-wrap:break-word;\">\n" +
                    "                        <span>" + data.data.content[i].videoName + "</span>\n" +
                    "                    </div>\n" +
                    "                    <div style=\"height: 40px\">\n" +
                    "                        <span style=\"font-size: 10px; color: #999\">" + data.data.content[i].user.userName + "</span>\n" +
                    "                        <br>\n" +
                    "                        <img src=\"../images/play.png\" style=\"width: 16px; height: 16px\"/>\n" +
                    "                        <span style=\"font-size: 10px; color: #999\">" + data.data.content[i].playbackVolume + "</span>\n" +
                    "                        <img src=\"../images/integral.png\" style=\"width: 16px; height: 16px; margin-left: 10px\"/>\n" +
                    "                        <span style=\"color: red; font-size: 10px\">" + data.data.content[i].videoIntegral + "</span>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "                <div style=\"clear: both\"></div>\n" +
                    "            </div>";
                $("#recommendVideo").append(appendhtml);
            }
        }
    });
    window.addLike = function (id) {
        var myDate = new Date();
        var date = myDate.getFullYear() + "-" + myDate.getMonth() + "-" + myDate.getDate();
        $.ajax({
            url: "/commentManage/addCommentLikeById?commentId=" + id + "&userId=" + userId,
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
                    layer.msg("您已点赞过该评论，请勿重复点赞", {icon: 5});
                }
            }
        })
    }
    window.commentReply = function (id) {
        var commentContent = document.getElementById("commentReply" + id).value;
        var myDate = new Date();
        var date = myDate.getFullYear() + "-" + myDate.getMonth() + "-" + myDate.getDate();
        var formData = new FormData();
        if (commentContent === "" || commentContent == null) {
            document.getElementById("commentReply-warm" + id).style.display = "block";
        } else {
            formData.append("commentContent", commentContent);
        }
        formData.append("userId", userId);
        formData.append("videoId", videoId);
        formData.append("commentDate", date);
        formData.append("replyId", id);
        $.ajax({
            url: "/commentManage/insertComment",
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
    window.getReplyListCount = function (commentId) {
        $.ajax({
            url: "/commentManage/getCountReplyByCommentId?commentId=" + commentId,
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
                        showReplyCommentList(obj.curr, obj.limit, commentId);
                    }
                });
            }
        });
    }
    window.showReplyCommentList = function (pageNo, pageSize, replyId) {
        var formData = new FormData();
        formData.append("replyId", replyId);
        formData.append("limit", pageSize);
        formData.append("page", pageNo);
        $.ajax({
            url: "/commentManage/getCommentReply",
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
                        $("#replyComment" + replyId).empty();
                        for (var i = 0; i < data.data.numberOfElements; i++) {
                            var appendhtml = "<div style=\"margin-top: 20px\">\n" +
                                "                            <img src=\"../images/users.png\" height=\"15\" width=\"15\"/>\n" +
                                "                            <span style=\"font-size: 10px; color: #2E2D3C\">" + data.data.content[i].user.userName + "</span>\n" +
                                "                            <span style=\"font-size: 12px\">" + data.data.content[i].commentContent + "</span>\n" +
                                "                            <div style=\"margin-top: 5px\">\n" +
                                "                                <span style=\"font-size: 10px; color: #999;\">" + data.data.content[i].commentDate + "</span>\n" +
                                "                                &nbsp;&nbsp;&nbsp;&nbsp;\n" +
                                "                                <a href=\"#\">\n" +
                                "                                    <img src=\"../images/like.png\" onclick='addLike(" + data.data.content[i].id + ")' style=\"width: 15px; height: 15px\"/>\n" +
                                "                                </a>\n" +
                                "                                <span style=\"font-size: 10px; color: #999;\">" + data.data.content[i].commentLike + "</span>\n" +
                                "                                &nbsp;&nbsp;&nbsp;&nbsp;\n" +
                                "                                <a href=\"#\" style=\"font-size: 10px; color: #999;\">\n" +
                                "                                    <img src=\"../images/comment.png\" height=\"15\" onclick='replyA(" + data.data.content[i].id + ", \"" + data.data.content[i].commentContent + "\")' width=\"15\" style=\"margin-left: 20px\"/>\n" +
                                "                                </a>\n" +
                                "                            </div>\n" +
                                "                        </div>";
                            $("#replyComment" + replyId).append(appendhtml);
                        }
                    } else {
                        document.getElementById("reply" + replyId).style.display = "none";
                    }
                }
            }
        });
    }
    window.replyA = function (id, content) {
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
                var commentContent = document.getElementById("replyA").value;
                var myDate = new Date();
                var date = myDate.getFullYear() + "-" + myDate.getMonth() + "-" + myDate.getDate();
                var formData = new FormData();
                if (commentContent === "" || commentContent == null) {
                    document.getElementById("replyA-warm").style.display = "block";
                } else {
                    formData.append("commentContent", commentContent);
                }
                formData.append("userId", userId);
                formData.append("videoId", videoId);
                formData.append("commentDate", date);
                formData.append("replyId", id);
                $.ajax({
                    url: "/commentManage/insertComment",
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
})