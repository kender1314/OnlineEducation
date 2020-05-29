var userId = document.getElementById("userId").value;

function fun(i) {
    switch (i) {
        case 1:
            window.location.href = "/userUrl/newVideo?id=" + userId + "&pageNum=1";
            break;
        case 2:
            window.location.href = "/userUrl/newLike?id=" + userId + "&pageNum=1";
            break;
        case 3:
            window.location.href = "/userUrl/newNotice?id=" + userId + "&pageNum=1";
            break;
        case 4:
            window.location.href = "/userUrl/newQuestion?id=" + userId + "&pageNum=1";
            break;
    }
}

layui.use(['laypage', 'layer', 'jquery'], function () {
    var laypage = layui.laypage
        , layer = layui.layer;
    var $ = layui.$;

    window.showVideoCommentList = function (replyId, commentId) {
        $.ajax({
            url: "/commentManage/getCommentByCommentId?commentId=" + replyId,
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                var temp = document.getElementById("videoCommentReply" + commentId).style.display;
                if (temp === "none") {
                    console.log(data.data);
                    document.getElementById("videoCommentReply" + commentId).style.display = "block";
                    $("#videoCommentReply" + commentId).empty();
                    if (data.data !== null) {
                        var appendhtml = "<span style=\"font-size: 13px; color: #999\">" + data.data.commentContent + "</span><br>";
                        $("#videoCommentReply" + commentId).append(appendhtml);
                    }
                }else {
                    document.getElementById("videoCommentReply" + commentId).style.display = "none";
                }
            }
        });
    }

    window.showQuestionAnswerList = function (replyId, answerId) {
        $.ajax({
            url: "/answerManage/getAnswerById?answerId=" + replyId,
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                var temp = document.getElementById("questionAnswerReply" + answerId).style.display;
                if (temp === "none") {
                    console.log(data.data);
                    document.getElementById("questionAnswerReply" + answerId).style.display = "block";
                    $("#questionAnswerReply" + answerId).empty();
                    if (data.data !== null) {
                        var appendhtml = "<span style=\"font-size: 13px; color: #999\">" + data.data.answerContent + "</span><br>";
                        $("#questionAnswerReply" + answerId).append(appendhtml);
                    }
                }else {
                    document.getElementById("questionAnswerReply" + answerId).style.display = "none";
                }
            }
        });
    }

    window.replyA = function (id, videoId) {
        layer.open({
            type: 6,
            title: '回复评论',
            // skin:'layui-layer-rim',
            area: ['600px', 'auto'],

            content: '<textarea placeholder="请输入内容" id="replyA" class="layui-textarea" style="width: 80%; margin-left: 10%; margin-top: 20px"></textarea>\n' +
                '  <span style="color: red; font-size: 12px; display: none; margin-left: 10%" id="replyA-warm">评论不能不为空！</span>\n'
            ,
            btn: ['回复', '取消'],
            btn1: function (index, layero) {
                var commentContent = document.getElementById("replyA").value;
                var myDate = new Date();
                var date = myDate.getFullYear() + "-" + (myDate.getMonth()+1) + "-" + myDate.getDate();
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

    window.watch = function (commentId) {
        $.ajax({
            url: "/commentManage/updateIsWatchByCommentId?commentId=" + commentId,
            type: "post",
            dataType: "json",
            async: false,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.data === true) {
                    layer.msg("评论已读", {icon: 6});
                    setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                        window.location.reload();//页面刷新
                    }, 1000);
                } else {
                    layer.msg("标记失败，请重试！", {icon: 5});
                }
            }
        });
    }

    /**
     * 已查看问题评论
     * @param commentId
     */
    window.watchA = function (answerId) {
        $.ajax({
            url: "/answerManage/updateIsWatchByAnswerId?answerId=" + answerId,
            type: "post",
            dataType: "json",
            async: false,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.data === true) {
                    layer.msg("评论已读", {icon: 6});
                    setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                        window.location.reload();//页面刷新
                    }, 1000);
                } else {
                    layer.msg("标记失败，请重试！", {icon: 5});
                }
            }
        });
    }

    window.deleteComment = function (commentId) {
        $.ajax({
            url: "/commentManage/deleteCommentByCommentId?commentId=" + commentId,
            type: "post",
            dataType: "json",
            async: false,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.data === true) {
                    layer.msg("已删除该评论", {icon: 6});
                    setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                        window.location.reload();//页面刷新
                    }, 1000);
                } else {
                    layer.msg("删除失败，请重试！", {icon: 5});
                }
            }
        });
    }

    window.deleteAnswer = function (answerId) {
        $.ajax({
            url: "/answerManage/deleteAnswerByAnswerId?id=" + answerId,
            type: "post",
            dataType: "json",
            async: false,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.data === true) {
                    layer.msg("已删除该评论", {icon: 6});
                    setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                        window.location.reload();//页面刷新
                    }, 1000);
                } else {
                    layer.msg("删除失败，请重试！", {icon: 5});
                }
            }
        });
    }

    window.replyQ = function(id, questionId){
        layer.open({
            type: 6,
            title: '回复评论',
            // skin:'layui-layer-rim',
            area: ['600px', 'auto'],

            content: '<textarea placeholder="请输入内容" id="replyA" class="layui-textarea" style="width: 80%; margin-left: 10%; margin-top: 20px"></textarea>\n' +
                '  <span style="color: red; font-size: 12px; display: none; margin-left: 10%" id="replyA-warm">评论不能不为空！</span>\n'
            ,
            btn: ['回复', '取消'],
            btn1: function (index, layero) {
                var answerContent = document.getElementById("replyA").value;
                var myDate = new Date();
                var date = myDate.getFullYear() + "-" + (myDate.getMonth()+1) + "-" + myDate.getDate();
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
})