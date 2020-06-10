var userId = document.getElementById("userId").value;
var videoId = document.getElementById("videoId").value;
var videoClassification = document.getElementById("videoClassification").value;
layui.use(['laypage', 'layer', 'jquery'], function () {
    var laypage = layui.laypage
        , layer = layui.layer;
    var $ = layui.$;

    /**
     * 提交评论
     */
    $('#comment-submit').on('click', function () {
        var commentContent = document.getElementById("comment-content").value;
        var myDate = new Date();
        var date = myDate.getFullYear() + "-" + (myDate.getMonth()+1) + "-" + myDate.getDate();
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
     * 获取视频时间
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
     * 播放量+1
     */
    $.ajax({
        url: "/videoManage/addOneVideoPlay?id=" + videoId,
        type: "post",
        dataType: "json",
        contentType: false,
        processData: false,
        success: function (data) {
            console.log("播放量+1：" + data.data)
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
    formDataVideo.append("classification", videoClassification);
    formDataVideo.append("limit", 7);
    formDataVideo.append("page", 1);
    // formDataVideo.append("sortKey", "playbackVolume");
    // formDataVideo.append("sortDesc", false);
    $.ajax({
        url: "/videoManage/getVideoListClassificationVolume",
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
    /**
     * 点赞
     * @param id
     */
    window.addLike = function (id) {
        var myDate = new Date();
        var date = myDate.getFullYear() + "-" + (myDate.getMonth()+1) + "-" + myDate.getDate();
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
        var date = myDate.getFullYear() + "-" + (myDate.getMonth()+1) + "-" + myDate.getDate();
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
                    elem: 'demo' + commentId
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
                    // if (rpleyContent === "none") {
                    //     console.log(1);
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
                    // } else {
                    //     console.log(2);
                    //     document.getElementById("reply" + replyId).style.display = "none";
                    // }
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
                var date = myDate.getFullYear() + "-" + (myDate.getMonth()+1)+ "-" + myDate.getDate();
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
    /**
     * 收藏视频
     */
    window.collectVideo = function(){
        $.ajax({
            url: "/bookmarkManage/getVideoBookmarksListByUserId?userId=" + userId,
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                console.log(data);
                var appendHtml = "";
                if (data.data.length !== 0) {
                    for (var i = 0; i < data.data.length; i++) {
                        appendHtml += "<div style=\"margin-bottom: 10px;\">\n" +
                            "        <div style=\"float: left\">\n" +
                            "        <span style=\"color: #4d4d4d; font-size: 13px\">\n" +
                            "            " + data.data[i].bookmarkName + "\n" +
                            "        </span>\n" +
                            "        </div>\n" +
                            "        <div style=\"float: right\">\n" +
                            "            <button type=\"button\" onclick='collectVideoA(\"" + data.data[i].bookmarkName + "\")' class=\"layui-btn layui-btn-danger layui-btn-xs\">收藏</button>\n" +
                            "        </div>\n" +
                            "        <div style=\"clear: both\"></div>\n" +
                            "    </div>";
                    }
                }
                layer.open({
                    type: 6,
                    title: '添加收藏',
                    // offset: 'auto',
                    // skin:'layui-layer-rim',
                    area: ['auto', 'auto'],

                    content: '<div style="overflow-y: auto; overflow-x: auto; height: 250px; width: 350px; padding: 20px">' + appendHtml +
                        '</div>'
                    ,
                    btn: ['新建收藏夹'],
                    btn1: function (index, layero) {
                        layer.close(index)
                        insertCollect();
                    }
                });
            }
        })
    }
    /**
     * 新建收藏夹
     */
    window.insertCollect = function () {
        layer.open({
            type: 6,
            title: '新建收藏夹',
            // skin:'layui-layer-rim',
            area: ['400px', 'auto'],

            content: '<div class="row" style="width: 420px;  margin-left:7px; margin-top:10px;">'
                + '<table>'
                + '<tr>'
                + '<td>'
                + '<div class="layui-form-item" style="margin-top: 20px">\n'
                + '    <label class="layui-form-label" style="font-size: 13px">标题</label>\n'
                + '    <div class="layui-input-block">\n'
                + '      <input type="tel" name="bookmarkName" id="bookmarkName" placeholder="请输入标题" value="" autocomplete="off" class="layui-input" '
                + 'style="width: 200px; height: 30px; margin-top: 5px">\n'
                + '    </div>\n'
                + '  </div>'
                + '</td>'
                + '</tr>'
                + '<tr>'
                + '<td>'
                + '<div class="layui-form-item" style="margin-top: 20px">\n'
                + '    <label class="layui-form-label" style="font-size: 13px">收藏夹分类</label>\n'
                + '    <div class="layui-input-block">\n'
                + '        <select name="isVideo" id="isVideo" '
                + 'style="width: 200px; height: 30px; margin-top: 5px" lay-verify="required" lay-search="">\n'
                + '          <option value="1">视频</option>\n'
                + '          <option value="0">问题</option>\n'
                + '        </select>\n'
                + '    </div>\n'
                + '  </div>'
                + '</td>'
                + '</tr>'
                + '</table>'
                + '</div>'
            ,
            btn: ['保存', '取消'],
            btn1: function (index, layero) {
                var formData = new FormData();
                var bookmarkName = document.getElementById("bookmarkName").value;
                var isDelete = 0;
                var isVideo = document.getElementById("isVideo").value;
                formData.append("bookmarkName", bookmarkName);
                formData.append("userId", userId);
                formData.append("isDelete", isDelete);
                formData.append("isVideo", isVideo);
                $.ajax({
                    url: "/bookmarkManage/insertBookmark",
                    type: "post",
                    dataType: "json",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (msg) {
                        if (msg.data === true) {
                            //关闭弹框
                            layer.close(index);
                            layer.msg("添加成功", {icon: 6});
                        } else {
                            layer.msg("添加失败，该收藏夹已存在！", {icon: 5});
                        }
                    }
                });

            },
        });
    }
    /**
     * 收藏视频
     */
    window.collectVideoA = function (bookmarkName) {
        var formData = new FormData();
        formData.append("bookmarkName", bookmarkName);
        formData.append("userId", userId);
        formData.append("isDelete", 0);
        formData.append("isVideo", 1);
        formData.append("videoId", videoId);
        $.ajax({
            url: "/bookmarkManage/insertVideoBookmark",
            type: "post",
            dataType: "json",
            data: formData,
            contentType: false,
            processData: false,
            success: function (msg) {
                if (msg.data === true) {
                    layer.msg("收藏成功", {icon: 6});
                    setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                        window.location.reload();//页面刷新
                    }, 1000);
                } else {
                    layer.msg("收藏失败，该收藏夹已收藏该文件！", {icon: 5});
                }
            }
        });
    }
})
var coverUrl = document.getElementById("coverUrl").value;
var videoObject = {
    container: '#video',//“#”代表容器的ID，“.”或“”代表容器的class
    variable: 'player',//该属性必需设置，值等于下面的new chplayer()的对象
    flashplayer:false,//如果强制使用flashplayer则设置成true
    video: coverUrl//视频地址
};
var player=new ckplayer(videoObject);
