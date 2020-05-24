var userId = document.getElementById("userId").value;
var videoId = document.getElementById("videoId").value;
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

    window.addLike = function (id) {
        $.ajax({
            url: "/commentManage/addCommentLikeById?commentId=" + id,
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

})