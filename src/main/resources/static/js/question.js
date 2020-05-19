var userId = document.getElementById("userId").value;
var questionId = document.getElementById("questionId").value;
layui.use(['laypage', 'layer', 'jquery'], function () {
    var laypage = layui.laypage
        , layer = layui.layer;
    var $ = layui.$;

    $.ajax({
        url: "/answerManage/getCountAnswerByQuestionId?questionId=" + questionId,
        type: "post",
        dataType: "json",
        contentType: false,
        processData: false,
        success: function (data) {
            laypage.render({
                elem: 'demo8'
                , count: data.data
                , layout: ['prev', 'page', 'next', 'count']
                , limit: 10
                , jump: function (obj) {
                    //调用加载函数加载数据
                    showAnswerByQuestionId(obj.curr, obj.limit, questionId);
                }
            });
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
                    location.reload();
                }
            }
        });
    });

    function showAnswerByQuestionId(pageNo, pageSize, questionId) {
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
                    var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
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
                            "                                <img src=\"../images/user1.png\" style=\"width: 30px; height: 30px\"/><b>" + data.data.content[i].user.userName + "</b>\n" +
                            "                            </div>\n" +
                            "                            <div class=\"layui-card-body\">\n" +
                            "                                " + data.data.content[i].answerContent + "\n" +
                            "                            </div>\n" +
                            "                            <div style=\"padding-bottom: 20px\">\n" +
                            "                                <div style=\"float: left; margin-left: 15px\">\n" +
                            "                                    <span style=\"font-size: 10px; color: #999\">时间：" + data.data.content[i].answerDate + "</span>\n" +
                            "                                    <a style=\"margin-left: 20px\" href=\"\"><img src=\"../images/like.png\" height=\"15\" width=\"15\"/></a>\n" +
                            "                                    <span style=\"font-size: 14px; color: #999\">" + data.data.content[i].answerLike + "</span>\n" +
                            "                                    <a  href = \"javascript:void(0);\" onclick =\" "+ getReplyListCount(i, data.data.content[i].id) + "\"><img src=\"../images/comment.png\" height=\"15\" width=\"15\"\n" +
                            "                                                    style=\"margin-left: 20px\"/></a>\n" +
                            "                                    <div id=\"reply\" style=\"min-height: 50px; margin-left: 50px;margin-top: 10px; display: none\">\n" +
                            "                                        <textarea placeholder=\"请输入内容\" class=\"layui-textarea\" style=\"width: 80%\"></textarea>\n" +
                            "                                        <div style=\"width: 80%; text-align: right; margin-top: 5px\">\n" +
                            "                                            <button type=\"button\" class=\"layui-btn layui-btn-sm\">回复</button>\n" +
                            "                                        </div>" +
                            "                                        <div id=\"reply-answer" + i +"\">" +
                            "                                        </div>\n" +
                            "                                        <div id=\"demo7\" style=\"text-align: center\"></div>\n" +
                            "                                    </div>" +
                            "                                    </div>" +
                            "                                </div>\n" +
                            "                                <div style=\"clear: both\"></div>\n" +
                            "                            </div>\n" +
                            "                        </div>\n" +
                            "                    </div>";
                        $("#answer-list").append(appendhtml);
                    }
                }
            }
        });
    }

    function getReplyListCount(temp, answerId) {
        $.ajax({
            url: "/answerManage/getCountReplyByAnswerId?answerId=" + answerId,
            type: "post",
            dataType: "json",
            async: false,
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demo7'
                    , count: data.data
                    , layout: ['prev', 'page', 'next', 'count']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showReplyAnswerList(obj.curr, obj.limit, answerId, temp);
                    }
                });
            }
        });
    }


    function showReplyAnswerList(pageNo, pageSize, replyId, temp) {
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
                $("#reply-answer" + temp).empty();
                if (data.data.numberOfElements === 0) {
                    document.getElementById("demo7").style.display = "none";
                    var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                        "<div>" +
                        "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                        "<span>暂无相关评论！</span>" +
                        "</div>" +
                        "</div>";
                    $("#reply-answer"+ temp).append(appendhtml);
                } else {
                    console.log("aaa" + i);
                    document.getElementById("demo7").style.display = "block";
                    document.getElementById("reply").style.display = "block";
                    for (var i = 0; i < data.data.numberOfElements; i++) {
                        var appendhtml = "<div style=\"margin-top: 10px\">\n" +
                            "                                            <img src=\"../images/user1.png\" height=\"15\" width=\"15\"/>\n" +
                            "                                            <span style=\"font-size: 10px; color: #2E2D3C\">" + data.data.content[i].user.userName + "</span>\n" +
                            "                                            <span style=\"font-size: 12px\">" + data.data.content[i].answerContent + "</span>\n" +
                            "                                            <div style=\"margin-top: 5px\">\n" +
                            "                                                <span style=\"font-size: 10px; color: #999;\">时间：" + data.data.content[i].answerDate + "</span>\n" +
                            "                                                &nbsp;&nbsp;&nbsp;&nbsp;\n" +
                            "                                                <a href=\"#\">\n" +
                            "                                                    <img src=\"../images/like.png\" style=\"width: 15px; height: 15px\"/>\n" +
                            "                                                </a>\n" +
                            "                                    <span style=\"font-size: 14px; color: #999\">" + data.data.content[i].answerLike + "</span>\n" +
                            "                                                <span style=\"font-size: 10px; color: #999;\">12</span>\n" +
                            "                                                &nbsp;&nbsp;&nbsp;&nbsp;\n" +
                            "                                                <a href=\"#\" style=\"font-size: 10px; color: #999;\">回复</a>\n" +
                            "                                            </div>\n" +
                            "                                        </div>";
                        $("#reply-answer"+ temp).append(appendhtml);
                    }
                }
            }
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
