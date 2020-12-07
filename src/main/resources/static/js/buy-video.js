var userId = document.getElementById("userId").value;
var videoId = document.getElementById("videoId").value;
var orderId = document.getElementById("orderId").value;
var videoIntegral = document.getElementById("videoIntegral").value;
layui.use(['laypage', 'layer', 'jquery'], function () {
    var laypage = layui.laypage
        , layer = layui.layer;
    var $ = layui.$;

    window.pay = function () {
        layer.confirm('是否支付', {
            btn: ['确定', '取消'] //可以无限个按钮
        }, function (index, layero) {
            var myDate = new Date();
            var date = myDate.getFullYear() + "-" + (myDate.getMonth()+1) + "-" + myDate.getDate();
            var formDataVideo = new FormData();
            if (orderId == null || orderId ==="") {
                formDataVideo.append("orderDate", date);
                formDataVideo.append("orderStatus", 2);
                formDataVideo.append("userId", userId);
                formDataVideo.append("videoId", videoId);
                formDataVideo.append("isDelete", 0);
                formDataVideo.append("isVideo", 1);
                formDataVideo.append("integral", videoIntegral);
                $.ajax({
                    url: "/orderManage/insertOrder",
                    type: "post",
                    dataType: "json",
                    data: formDataVideo,
                    contentType: false,
                    processData: false,
                    success: function (data) {
                        layer.close(index);
                        if(data.data === true){
                            layer.msg("购买成功！", {icon: 6});
                            setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                                window.location.href ="/userUrl/playVideo?id=" + videoId + "&pageNum=1";
                            }, 1000);
                        }else {
                            layer.msg("购买失败，请充值！", {icon: 5});
                        }
                    }
                });
            }else {
                formDataVideo.append("orderId", orderId);
                formDataVideo.append("userId", userId);
                formDataVideo.append("videoId", videoId);
                formDataVideo.append("orderStatus", 2);
                formDataVideo.append("integral", videoIntegral);
                $.ajax({
                    url: "/orderManage/updateOrderStatus",
                    type: "post",
                    dataType: "json",
                    data: formDataVideo,
                    contentType: false,
                    processData: false,
                    success: function (data) {
                        layer.close(index);
                        if(data.data === true){
                            layer.msg("购买成功！", {icon: 6});
                            setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                                window.location.href ="/userUrl/playVideo?id=" + videoId + "&pageNum=1";
                            }, 1000);
                        }else {
                            layer.msg("购买失败，请充值！", {icon: 5});
                        }
                    }
                });
            }
        }, function (index) {
            var myDate = new Date();
            var date = myDate.getFullYear() + "-" + (myDate.getMonth()+1) + "-" + myDate.getDate();
            var formDataVideo = new FormData();
            formDataVideo.append("orderDate", date);
            formDataVideo.append("orderStatus", 1);
            formDataVideo.append("userId", userId);
            formDataVideo.append("videoId", videoId);
            formDataVideo.append("isDelete", 0);
            formDataVideo.append("isVideo", 1);
            $.ajax({
                url: "/orderManage/insertOrderNotPay",
                type: "post",
                dataType: "json",
                data: formDataVideo,
                contentType: false,
                processData: false,
                success: function (data) {
                    layer.close(index);
                    if(data.data === true){
                        layer.msg("取消成功，已添加进订单中！", {icon: 6});
                        setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                            window.location.href ="/userUrl/personalInformation?userId=" + userId;
                        }, 1000);
                    }else {
                        layer.msg("取消失败！", {icon: 5});
                    }
                }
            });
        });
    }
})