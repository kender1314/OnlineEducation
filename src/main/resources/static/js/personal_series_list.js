var userId = document.getElementById("userId").value;
var seriesNumber = document.getElementById("seriesNumber").value;
var seriesId = document.getElementById("seriesId").value;

layui.use(['layer', 'table', 'flow', 'tree', 'util', 'upload', 'laypage', 'upload'], function () { //独立版的layer无需执行这一句
    var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
    var laypage = layui.laypage;
    var upload = layui.upload;
    var table = layui.table;
    var tree = layui.tree
        , util = layui.util;

    table.render({
        elem: '#test'
        , url: '/videoManage/getVideoBySeriesId'
        , where: {
            "pageSize": 'limit',
            // "page": 'curr',//当前页（必传参数，可改变参数名）
            "sortKey": 'video_number',
            "sortDesc": false,
            "seriesId": seriesId
        }
        , method: 'post'
        , parseData: function (res) {
            return {
                "code": res.code,
                "msg": res.msg,
                "count": res.data.totalElements,
                "data": res.data.content
            }
        }
        , toolbar: '#toolbarDemo' //开启头部工具栏，并为其绑定左侧模板
        , defaultToolbar: ['filter']
        , title: '视频数据表'
        , cols: [[
            {type: 'numbers', title: '序号', width: 80, fixed: 'left'}
            , {field: 'videoName', title: '视频名', unresize: true, sort: true}
            // , {
            //     field: 'user', title: '用户名', templet: function (d) {
            //         return d.user.userName;
            //     }
            // }
            // , {
            //     field: 'series', title: '系列名', templet: function (d) {
            //         if (d.series == null) {
            //             return "[null]";
            //         }
            //         return d.series.seriesName;
            //     }
            // }
            , {field: 'videoDate', title: '上传时间'}
            , {field: 'videoNumber', title: '视频集', sort: true}
            , {field: 'videoClassification', title: '视频类别'}
            , {field: 'classificationLittle', title: '二级分类'}
            // , {field: 'videoIntegral', title: '积分', width: 100}
            , {field: 'videoIntroduce', title: '视频简介'}
            , {field: 'playbackVolume', title: '播放量'}
            // , {field: 'coverUrl', title: '视频地址', width: 100}
            , {fixed: 'right', title: '操作', toolbar: '#barDemo', width: 200}
        ]]
        , page: true
    });

    table.on('tool(test)', function (obj) {
        //日期时间选择器
        var data = obj.data;
        //console.log(obj)
        if (obj.event === 'del') {
            layer.confirm('是否删除', function (index) {
                $.ajax({
                    url: "/videoManage/deleteVideo?id=" + data.id,
                    type: "POST",
                    success: function (msg) {
                        if (msg.data === true) {
                            //删除这一行
                            obj.del();
                            //关闭弹框
                            layer.close(index);
                            layer.msg("删除成功", {icon: 6});
                            setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                                window.location.reload();//页面刷新
                            }, 1000);
                        } else {
                            layer.msg("删除失败", {icon: 5});
                        }
                    }
                });
                obj.del();
                layer.close(index);
            });
        } else if (obj.event === 'edit') {
            layer.open({
                type: 6,
                title: '修改信息',
                // skin:'layui-layer-rim',
                area: ['600px', 'auto'],

                content: '<div class="row" style="width: 420px;  margin-left:7px; margin-top:10px;">'
                    + '<input type="hidden" id="id" name="id" value="' + data.id + '">'
                    + '<input type="hidden" id="videoStatus" name="videoStatus" value="' + data.videoStatus + '">'
                    + '<input type="hidden" id="user" name="user" value="' + data.user + '">'
                    + '<input type="hidden" id="series" name="series" value="' + data.series + '">'
                    + '<input type="hidden" id="videoImage" name="videoImage" value="' + data.videoImage + '">'
                    + '<input type="hidden" id="videoImageUrl" name="videoImageUrl" value="' + data.videoImageUrl + '">'
                    + '<input type="hidden" id="isDelete" name="isDelete" value="' + data.isDelete + '">'
                    + '<input type="hidden" id="videoIntegral" name="videoIntegral" value="' + data.videoIntegral + '">'
                    + '<input type="hidden" id="coverUrl" name="coverUrl" value="' + data.coverUrl + '">'
                    + '<input type="hidden" id="playbackVolume" name="playbackVolume" value="' + data.playbackVolume + '">'
                    + '<input type="hidden" id="videoDate" name="videoDate" value="' + data.videoDate + '">'
                    + '<table>'
                    + '<tr>'
                    + '<td>'
                    + '<div class="layui-form-item" style="margin-top: 20px">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">视频名</label>\n'
                    + '    <div class="layui-input-block">\n'
                    + '      <input type="tel" name="videoName" id="videoName" placeholder="请输入视频名" value="' + data.videoName + '" autocomplete="off" class="layui-input" '
                    + 'style="width: 150px; height: 30px; margin-top: 5px">\n'
                    + '    </div>\n'
                    + '  </div>'
                    + '</td>'
                    + '<td>'
                    + '  <div class="layui-form-item layui-inline">\n'
                    + '       <label class="layui-form-label" style="font-size: 13px">视频集数</label>\n'
                    + '       <div class="layui-input-block">\n'
                    + '         <input type="number" min="1" max="' + seriesNumber + '" step="1" id="videoNumber" value="' + data.videoNumber + '" placeholder="请选择视频集数"\n'
                    + '                                   autocomplete="off" class="layui-input"\n'
                    + '                                   style="width: 150px; height: 30px; margin-top: 5px">\n'
                    + '        </div>\n'
                    + '  </div>'
                    + '</td>'
                    + '</tr>'
                    + '<tr>'
                    + '<td>'
                    + '<div class="layui-form-item">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">类别</label>\n'
                    + '    <div class="layui-input-block">\n'
                    + ' <div class="layui-inline" style="width: 150px; height: 30px; margin-top: 5px">\n'
                    + '      <div class="layui-input-inline">\n' +
                    '                        <input type="tel" name="videoClassification" id="videoClassification1"\n' +
                    '                                       autocomplete="off"\n' +
                    '                                       class="layui-input" readonly\n' +
                    '                                       style="width: 150px; height: 30px; margin-top: 5px" value="'+ data.videoClassification + '">'
                    // + '        <select name="videoClassification" id="videoClassification1" style="width: 150px; height: 30px; margin-top: 5px" onchange="selectSeries1()" lay-verify="required" lay-search="">\n'
                    // + '          <option value="'+ data.videoClassification + '">默认：'+ data.videoClassification + '</option>\n'
                    // + '          <option value="编程语言">编程语言</option>\n'
                    // + '          <option value="云计算大数据">云计算大数据</option>\n'
                    // + '          <option value="计算机基础">计算机基础</option>\n'
                    // + '          <option value="移动开发">移动开发</option>\n'
                    // + '          <option value="前沿技术">前沿技术</option>\n'
                    // + '        </select>\n'
                    + '      </div>\n'
                    + '    </div>'
                    + '    </div>\n'
                    + '  </div>'
                    + '</td>'
                    + '<td>'
                    + '<div class="layui-form-item">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">二级分类</label>\n'
                    + '    <div class="layui-input-block">\n'
                    + ' <div class="layui-inline" style="width: 150px; height: 30px; margin-top: 5px">\n'
                    + '      <div class="layui-input-inline">\n' +
                    '                                <input type="tel" name="classificationLittle" id="classificationLittle1"\n' +
                    '                                       autocomplete="off"\n' +
                    '                                       class="layui-input" readonly\n' +
                    '                                       style="width: 150px; height: 30px; margin-top: 5px" value="'+ data.classificationLittle + '">'
                    // + '        <select name="classificationLittle" id="classificationLittle1" style="width: 150px; height: 30px; margin-top: 5px" lay-verify="required" lay-search="">\n'
                    // + '          <option value="'+ data.classificationLittle + '">默认：'+ data.classificationLittle + '</option>\n'
                    // +           '</select>\n'
                    + '      </div>\n'
                    + '    </div>'
                    + '    </div>\n'
                    + '  </div>'
                    + '</td>'
                    + '</tr>'
                    + '<tr>'
                    + '<td colspan="2">'
                    + '<div class="layui-form-item">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">视频介绍</label>\n'
                    + '    <div style="margin-left: 110px; width: 410px; ">\n'
                    + '      <textarea placeholder="请输入内容" name="videoIntroduce" id="videoIntroduce" class="layui-textarea">' + data.videoIntroduce + '</textarea>\n'
                    + '    </div>\n'
                    + '  </div>'
                    + '</td>'
                    + '</tr>'
                    // + '<tr>'
                    // + '<td colspan="2">'
                    // + '<div class="layui-form-item">\n'
                    // + '    <label class="layui-form-label" style="font-size: 13px">修改图片封面</label>\n'
                    // + '     <div class="layui-inline">\n'
                    // + '           <input type="file" id="imageFile" class="layui-btn layui-btn-primary layui-btn-sm">\n'
                    // + '     </div>\n'
                    // + '  </div>'
                    // + '</td>'
                    // + '</tr>'
                    + '</table>'
                    + '</div>'
                ,
                btn: ['保存', '取消'],
                btn1: function (index, layero) {
                    var formData = new FormData();
                    // var logo_file = document.getElementById("imageFile");
                    // if (logo_file !== null) {
                    //     var image = logo_file.files[0];
                    //     formData.append("image", image);
                    // }
                    var id = document.getElementById("id").value;
                    var videoName = document.getElementById("videoName").value;
                    var videoStatus = document.getElementById("videoStatus").value;
                    var videoNumber = document.getElementById("videoNumber").value;
                    var videoClassification = document.getElementById("videoClassification1").value;
                    var classificationLittle = document.getElementById("classificationLittle1").value;
                    var videoIntegral = document.getElementById("videoIntegral").value;
                    var coverUrl = document.getElementById("coverUrl").value;
                    var playbackVolume = document.getElementById("playbackVolume").value;
                    var videoDate = document.getElementById("videoDate").value;
                    var videoIntroduce = document.getElementById("videoIntroduce").value;
                    var isDelete = document.getElementById("isDelete").value;
                    var videoImageUrl = document.getElementById("videoImageUrl").value;
                    var videoImage = document.getElementById("videoImage").value;
                    formData.append("id", id);
                    formData.append("videoName", videoName);
                    formData.append("videoStatus", videoStatus);
                    formData.append("videoNumber", videoNumber);
                    formData.append("videoClassification", videoClassification);
                    formData.append("classificationLittle", classificationLittle);
                    formData.append("coverUrl", coverUrl);
                    formData.append("playbackVolume", playbackVolume);
                    formData.append("videoDate", videoDate);
                    formData.append("videoIntroduce", videoIntroduce);
                    formData.append("isDelete", isDelete);
                    formData.append("videoImage", videoImage);
                    formData.append("videoImageUrl", videoImageUrl);
                    $.ajax({
                        url: "/videoManage/updateVideo",
                        type: "post",
                        dataType: "json",
                        data: formData,
                        contentType: false,
                        processData: false,
                        success: function (msg) {
                            console.log(msg);
                            if (msg.data === true) {
                                //关闭弹框
                                layer.close(index);
                                layer.msg("更新成功", {icon: 6});
                                setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                                    window.location.reload();//页面刷新
                                }, 1000);
                            } else {
                                layer.msg("更新失败", {icon: 5});
                            }
                        }
                    });

                },
            });
        } else if (obj.event === 'detail') {
            window.location.href ="/userUrl/playSeries?videoId=" + data.id + "&seriesId=" + seriesId + "&pageNum=1";
        }
    });


    $('#getCheckData').on('click', function () {
        window.location.href = "/userUrl/uploadSeriesVideo?id=" + document.getElementById("seriesId").value;
    });

    $('#editSeries').on('click', function () {
        var userId1 = document.getElementById("userId").value;
        var seriesNumber1 = document.getElementById("seriesNumber").value;
        var seriesId1 = document.getElementById("seriesId").value;
        var seriesName1 = document.getElementById("seriesName").value;
        var seriesClassification1 = document.getElementById("seriesClassification").value;
        var classificationLittle1 = document.getElementById("classificationLittle").value;
        var introduction1 = document.getElementById("introduction").value;
        var seriesIntegral1 = document.getElementById("seriesIntegral").value;
        var seriesImage1 = document.getElementById("seriesImage").value;
        var seriesImageUrl1 = document.getElementById("seriesImageUrl").value;
        var seriesDate1 = document.getElementById("seriesDate").value;
        var isDelete1 = document.getElementById("isDelete").value;

        layer.open({
            type: 6,
            title: '修改信息',
            // skin:'layui-layer-rim',
            area: ['600px', 'auto'],

            content: '<div class="row" style="width: 420px;  margin-left:7px; margin-top:10px;">'
                + '<input type="hidden" id="id1" name="id" value="' + seriesId1 + '">'
                + '<table>'
                + '<tr>'
                + '<td>'
                + '<div class="layui-form-item" style="margin-top: 20px">\n'
                + '    <label class="layui-form-label" style="font-size: 13px">视频系列名</label>\n'
                + '    <div class="layui-input-block">\n'
                + '      <input type="tel" name="seriesName" id="seriesName1" placeholder="请输入系列名" value="' + seriesName1 + '" autocomplete="off" class="layui-input" '
                + 'style="width: 150px; height: 30px; margin-top: 5px">\n'
                + '    </div>\n'
                + '  </div>'
                + '</td>'
                + '</tr>'
                + '<tr>'
                + '<td>'
                + '<div class="layui-form-item">\n'
                + '    <label class="layui-form-label" style="font-size: 13px">总集数</label>\n'
                + '    <div class="layui-input-block">\n'
                + '      <input type="number" name="seriesNumber" min="1" step="1" id="seriesNumber1" placeholder="请输入总集数" value="' + seriesNumber1 + '" autocomplete="off" class="layui-input" '
                + 'style="width: 150px; height: 30px; margin-top: 5px">\n'
                + '    </div>\n'
                + '  </div>'
                + '</td>'
                + '</tr>'
                + '<tr>'
                + '<td>'
                + '<div class="layui-form-item">\n'
                + '    <label class="layui-form-label" style="font-size: 13px">类别</label>\n'
                + '    <div class="layui-input-block">\n'
                + ' <div class="layui-inline" style="width: 150px; height: 30px; margin-top: 5px">\n'
                + '      <div class="layui-input-inline">\n'
                + '        <select name="videoClassification" id="seriesClassification1" '
                + 'style="width: 150px; height: 30px; margin-top: 5px" onchange="selectSeries()" lay-verify="required" lay-search="">\n'
                + '          <option value="'+ seriesClassification1 + '">默认：'+ seriesClassification1 + '</option>\n'
                + '          <option value="编程语言">编程语言</option>\n'
                + '          <option value="云计算大数据">云计算大数据</option>\n'
                + '          <option value="计算机基础">计算机基础</option>\n'
                + '          <option value="移动开发">移动开发</option>\n'
                + '          <option value="前沿技术">前沿技术</option>\n'
                + '        </select>\n'
                + '      </div>\n'
                + '    </div>'
                + '    </div>\n'
                + '  </div>'
                + '</td>'
                + '<td>'
                + '<div class="layui-form-item">\n'
                + '    <label class="layui-form-label" style="font-size: 13px">二级分类</label>\n'
                + '    <div class="layui-input-block">\n'
                + ' <div class="layui-inline" style="width: 150px; height: 30px; margin-top: 5px">\n'
                + '      <div class="layui-input-inline">\n'
                + '        <select name="classificationLittle" id="classificationLittle1" '
                + 'style="width: 150px; height: 30px; margin-top: 5px" lay-verify="required" lay-search="">\n'
                + '          <option value="'+ classificationLittle1 + '">默认：'+ classificationLittle1 + '</option>\n'
                +           '</select>\n'
                + '      </div>\n'
                + '    </div>'
                + '    </div>\n'
                + '  </div>'
                + '</td>'
                + '</tr>'
                + '<tr>'
                + '<td colspan="2">'
                + '<div class="layui-form-item">\n'
                + '    <label class="layui-form-label" style="font-size: 13px">系列简介</label>\n'
                + '    <div style="margin-left: 110px; width: 410px; ">\n'
                + '      <textarea placeholder="请输入简介" name="introduction" id="introduction1" class="layui-textarea">' + introduction1 + '</textarea>\n'
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
                var id = document.getElementById("id1").value;
                var seriesName = document.getElementById("seriesName1").value;
                var seriesClassification = document.getElementById("seriesClassification1").value;
                var classificationLittle = document.getElementById("classificationLittle1").value;
                var seriesNumber = document.getElementById("seriesNumber1").value;
                var introduction = document.getElementById("introduction1").value;

                formData.append("id", id);
                formData.append("seriesName", seriesName);
                formData.append("seriesNumber", seriesNumber);
                formData.append("introduction", introduction);
                formData.append("seriesIntegral", seriesIntegral1);
                formData.append("seriesClassification", seriesClassification);
                formData.append("classificationLittle", classificationLittle);
                formData.append("seriesImage", seriesImage1);
                formData.append("seriesImageUrl", seriesImageUrl1);
                formData.append("seriesDate", seriesDate1);
                formData.append("isDelete", isDelete1);
                $.ajax({
                    url: "/videoSeriesManage/updateVideoSeries",
                    type: "post",
                    dataType: "json",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (msg) {
                        console.log(msg);
                        if (msg.data === true) {
                            //关闭弹框
                            layer.close(index);
                            layer.msg("更新成功", {icon: 6});
                            setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                                window.location.reload();//页面刷新
                            }, 1000);
                        } else {
                            layer.msg("更新失败", {icon: 5});
                        }
                    }
                });

            },
        });

    });

    /**
     * 获取时间
     */
    $.ajax({
        url: "/videoSeriesManage/getVideoSeriesById?id=" + document.getElementById("seriesId").value,
        type: "post",
        dataType: "json",
        contentType: false,
        processData: false,
        success: function (data) {
            $("#seriesDateA").empty();
            if (data.data !== null) {
                var appendhtml = "<span style=\"font-size: 12px; color: #999\">" + data.data.seriesDate + "</span>";
                $("#seriesDateA").append(appendhtml);
            }
        }
    });
})

function selectSeries(){
    var select=document.getElementById("seriesClassification1");
    var c=select.value;
    var area=document.getElementById("classificationLittle1");
    switch(c)
    {
        case "编程语言": area.innerHTML="" +
            "<option value=\"Java\">Java</option>" +
            "<option value=\"php\">php</option>" +
            "<option value=\"Python\">Python</option>" +
            "<option value=\"C\">C</option>";
            break;
        case "云计算大数据":area.innerHTML="" +
            "<option value=\"Hadoop\">Hadoop</option>" +
            "<option value=\"Spark\">Spark</option>" +
            "<option value=\"Hbase\">Hbase</option>" +
            "<option value=\"阿里云\">阿里云</option>" +
            "<option value=\"Docker\">Docker</option>";
            break;
        case "计算机基础":area.innerHTML="" +
            "<option value=\"计算机网络\">计算机网络</option>" +
            "<option value=\"算法与数据结构\">算法与数据结构</option>";
            break;
        case "移动开发":area.innerHTML="" +
            "<option value=\"Android\">Android</option>" +
            "<option value=\"iOS\">iOS</option>" +
            "<option value=\"React native\">React native</option>";
            break;
        case "前沿技术":area.innerHTML="" +
            "<option value=\"微服务\">微服务</option>" +
            "<option value=\"区块链\">区块链</option>" +
            "<option value=\"机器学习\">机器学习</option>" +
            "<option value=\"深度学习\">深度学习</option>" +
            "<option value=\"计算机视觉\">计算机视觉</option>";
            break;
        default:alert("error");
    }
};
function selectSeries1(){
    var select=document.getElementById("videoClassification1");
    var c=select.value;
    var area=document.getElementById("classificationLittle1");
    switch(c)
    {
        case "编程语言": area.innerHTML="" +
            "<option value=\"Java\">Java</option>" +
            "<option value=\"php\">php</option>" +
            "<option value=\"Python\">Python</option>" +
            "<option value=\"C\">C</option>";
            break;
        case "云计算大数据":area.innerHTML="" +
            "<option value=\"Hadoop\">Hadoop</option>" +
            "<option value=\"Spark\">Spark</option>" +
            "<option value=\"Hbase\">Hbase</option>" +
            "<option value=\"阿里云\">阿里云</option>" +
            "<option value=\"Docker\">Docker</option>";
            break;
        case "计算机基础":area.innerHTML="" +
            "<option value=\"计算机网络\">计算机网络</option>" +
            "<option value=\"算法与数据结构\">算法与数据结构</option>";
            break;
        case "移动开发":area.innerHTML="" +
            "<option value=\"Android\">Android</option>" +
            "<option value=\"iOS\">iOS</option>" +
            "<option value=\"React native\">React native</option>";
            break;
        case "前沿技术":area.innerHTML="" +
            "<option value=\"微服务\">微服务</option>" +
            "<option value=\"区块链\">区块链</option>" +
            "<option value=\"机器学习\">机器学习</option>" +
            "<option value=\"深度学习\">深度学习</option>" +
            "<option value=\"计算机视觉\">计算机视觉</option>";
            break;
        default:alert("error");
    }
};