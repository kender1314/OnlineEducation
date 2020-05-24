var userId = document.getElementById("userId").value;
var seriesId = document.getElementById("seriesId").value;

layui.use(['layer', 'table', 'flow', 'tree', 'util', 'upload', 'laypage', 'upload'], function () { //独立版的layer无需执行这一句
    var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
    var laypage = layui.laypage;
    var upload = layui.upload;
    var table = layui.table;
    var tree = layui.tree
        , util = layui.util;

    $('#addVideoAndImage').on('click', function () {
        var formData = new FormData();
        var uploadVideo_file = document.getElementById("uploadVideo");
        if (uploadVideo_file !== null) {
            var uploadVideo = uploadVideo_file.files[0];
            formData.append("uploadVideo", uploadVideo);
        }
        var uploadVideoImage_file = document.getElementById("uploadVideoImage");
        if (uploadVideoImage_file !== null) {
            var uploadVideoImage = uploadVideoImage_file.files[0];
            formData.append("uploadVideoImage", uploadVideoImage);
        }

        var videoName = document.getElementById("videoName").value;
        var videoClassification = document.getElementById("videoClassification").value;
        var classificationLittle = document.getElementById("classificationLittle").value;
        // var videoIntegral = document.getElementById("videoIntegral").value;
        var introduction = document.getElementById("introduction").value;
        var videoNumber = document.getElementById("videoNumber").value;
        var myDate = new Date();
        var videoDate = myDate.getFullYear() + "-" + myDate.getMonth() + "-" + myDate.getDate();

        formData.append("userId", userId);
        formData.append("seriesId", seriesId);
        formData.append("videoName", videoName);
        formData.append("videoClassification", videoClassification);
        formData.append("classificationLittle", classificationLittle);
        formData.append("videoIntroduce", introduction);
        formData.append("videoStatus", 0);
        // formData.append("videoIntegral", videoIntegral);
        formData.append("playbackVolume", 0);
        formData.append("videoDate", videoDate);
        // formData.append("videoImage", 0);
        // formData.append("videoImageUrl", 0);
        // formData.append("coverUrl", 0);
        formData.append("isDelete", 0);
        formData.append("videoNumber", videoNumber);
        $.ajax({
            url: "/videoManage/insertVideo",
            type: "post",
            dataType: "json",
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.data === true) {
                    //关闭弹框
                    layer.msg("添加成功", {icon: 6});
                    window.location.href = "/userUrl/showSeriesList?id=" + seriesId;
                } else {
                    layer.msg("添加失败", {icon: 5});
                }
            }
        });
    });

})