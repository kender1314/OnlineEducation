var userId = document.getElementById("userId").value;
var seriesId = document.getElementById("seriesId").value;

layui.use(['layer', 'table', 'flow', 'tree', 'util', 'upload', 'laypage', 'upload'], function () { //独立版的layer无需执行这一句
    var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
    var laypage = layui.laypage;
    var upload = layui.upload;
    var table = layui.table;
    var tree = layui.tree
        , util = layui.util;

    $('#uploadVideoImage').on('change', function () {
        var filePath = $(this).val(),         //获取到input的value，里面是文件的路径
            fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase();
        // 检查是否是图片
        if (!fileFormat.match(/.png|.jpg|.jpeg/)) {
            layer.msg("上传错误,文件格式必须为：png/jpg/jpeg", {icon: 5});
            document.getElementById('uploadVideoImage').value = ""
        }
    });

    $('#uploadVideo').on('change', function () {
        var filePath = $(this).val(),         //获取到input的value，里面是文件的路径
            fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase();
        // 检查是否是图片
        if (!fileFormat.match(/.mp4|.avi/)) {
            layer.msg("上传错误,视频格式必须为：mp4", {icon: 5});
            document.getElementById('uploadVideo').value = ""
        }
    });

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
        var videoDate = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate();
        if (uploadVideo === undefined) {
            document.getElementById("upload-video-tips").innerHTML = "<font color='red'>请上传视频!</font>";
        } else if (uploadVideoImage === undefined) {
            document.getElementById("upload-video-tips").innerHTML = "";
            document.getElementById("upload-image-tips").innerHTML = "<font color='red'>请图片视频!</font>";
        } else if (videoName === "") {
            document.getElementById("upload-video-tips").innerHTML = "";
            document.getElementById("upload-image-tips").innerHTML = "";
            document.getElementById("video-name-tips").innerHTML = "<font color='red'>请输入视频名字！</font>";
        } else if (introduction === "") {
            document.getElementById("upload-video-tips").innerHTML = "";
            document.getElementById("upload-image-tips").innerHTML = "";
            document.getElementById("video-name-tips").innerHTML = "";
            document.getElementById("video-introduce-tips").innerHTML = "<font color='red'>请输入视频简介!</font>";
        } else {
            document.getElementById("upload-video-tips").innerHTML = "";
            document.getElementById("upload-image-tips").innerHTML = "";
            document.getElementById("video-name-tips").innerHTML = "";
            document.getElementById("video-introduce-tips").innerHTML = "";
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
                        layer.msg("上传成功，等待管理员审核，返回上一页", {icon: 6});
                        setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                            window.location.href = "/userUrl/showSeriesList?id=" + seriesId;
                        }, 2000);
                    } else {
                        layer.msg("添加失败", {icon: 5});
                    }
                }
            });
        }
    });

})