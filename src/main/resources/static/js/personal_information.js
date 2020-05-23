var userId = document.getElementById("userId").value;

//左侧导航栏切换条
function card(i) {
    switch (i) {
        case 1:
            document.getElementById("my-content-course").style.display = "block";
            document.getElementById("my-content-info").style.display = "none";
            document.getElementById("my-content-order").style.display = "none";
            document.getElementById("my-content-collect").style.display = "none";
            document.getElementById("my-content-video").style.display = "none";
            document.getElementById("my-content-question").style.display = "none";
            break;
        case 2:
            document.getElementById("my-content-course").style.display = "none";
            document.getElementById("my-content-info").style.display = "block";
            document.getElementById("my-content-order").style.display = "none";
            document.getElementById("my-content-collect").style.display = "none";
            document.getElementById("my-content-video").style.display = "none";
            document.getElementById("my-content-question").style.display = "none";
            break;
        case 3:
            document.getElementById("my-content-course").style.display = "none";
            document.getElementById("my-content-info").style.display = "none";
            document.getElementById("my-content-order").style.display = "block";
            document.getElementById("my-content-collect").style.display = "none";
            document.getElementById("my-content-video").style.display = "none";
            document.getElementById("my-content-question").style.display = "none";
            break;
        case 4:
            document.getElementById("my-content-course").style.display = "none";
            document.getElementById("my-content-info").style.display = "none";
            document.getElementById("my-content-order").style.display = "none";
            document.getElementById("my-content-collect").style.display = "block";
            document.getElementById("my-content-video").style.display = "none";
            document.getElementById("my-content-question").style.display = "none";
            break;
        case 5:
            document.getElementById("my-content-course").style.display = "none";
            document.getElementById("my-content-info").style.display = "none";
            document.getElementById("my-content-order").style.display = "none";
            document.getElementById("my-content-collect").style.display = "none";
            document.getElementById("my-content-video").style.display = "block";
            document.getElementById("my-content-question").style.display = "none";
            break;
        case 6:
            document.getElementById("my-content-course").style.display = "none";
            document.getElementById("my-content-info").style.display = "none";
            document.getElementById("my-content-order").style.display = "none";
            document.getElementById("my-content-collect").style.display = "none";
            document.getElementById("my-content-video").style.display = "none";
            document.getElementById("my-content-question").style.display = "block";
            break;
    }
}

layui.use(['layer', 'table', 'flow', 'tree', 'util', 'upload', 'laypage', 'upload'], function () { //独立版的layer无需执行这一句
    var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
    var laypage = layui.laypage;
    var upload = layui.upload;
    var table = layui.table;
    var tree = layui.tree
        , util = layui.util;

    table.render({
        elem: '#test'
        , url: '/demo/table/user/'
        , cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        , cols: [[
            {field: 'id', width: 80, title: 'ID', sort: true}
            , {field: 'username', width: 80, title: '用户名'}
            , {field: 'sex', width: 80, title: '性别', sort: true}
            , {field: 'city', width: 80, title: '城市'}
            , {field: 'sign', title: '签名', width: '30%', minWidth: 100} //minWidth：局部定义当前单元格的最小宽度，layui 2.2.1 新增
            , {field: 'experience', title: '积分', sort: true}
            , {field: 'score', title: '评分', sort: true}
            , {field: 'classify', title: '职业'}
            , {field: 'wealth', width: 137, title: '财富', sort: true}
        ]]
    });

    //普通图片上传
    var uploadInst = upload.render({
        elem: '#test1'
        , url: 'https://httpbin.org/post' //改成您自己的上传接口
        , before: function (obj) {
            //预读本地文件示例，不支持ie8
            obj.preview(function (index, file, result) {
                $('#demo1').attr('src', result); //图片链接（base64）
            });
        }
        , done: function (res) {
            //如果上传失败
            if (res.code > 0) {
                return layer.msg('上传失败');
            }
            //上传成功
        }
        , error: function () {
            //演示失败状态，并实现重传
            var demoText = $('#demoText');
            demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
            demoText.find('.demo-reload').on('click', function () {
                uploadInst.upload();
            });
        }
    });

    //多文件列表示例
    var demoListView = $('#demoList')
        , uploadListIns = upload.render({
        elem: '#testList'
        , url: 'https://httpbin.org/post' //改成您自己的上传接口
        , accept: 'video'
        , multiple: true
        , auto: false
        , bindAction: '#testListAction'
        , choose: function (obj) {
            var files = this.files = obj.pushFile(); //将每次选择的文件追加到文件队列
            //读取本地文件
            obj.preview(function (index, file, result) {
                var tr = $(['<tr id="upload-' + index + '">'
                    , '<td>' + file.name + '</td>'
                    , '<td>' + (file.size / 1024).toFixed(1) + 'kb</td>'
                    , '<td>等待上传</td>'
                    , '<td>'
                    , '<button class="layui-btn layui-btn-xs demo-reload layui-hide">重传</button>'
                    , '<button class="layui-btn layui-btn-xs layui-btn-danger demo-delete">删除</button>'
                    , '</td>'
                    , '</tr>'].join(''));

                //单个重传
                tr.find('.demo-reload').on('click', function () {
                    obj.upload(index, file);
                });

                //删除
                tr.find('.demo-delete').on('click', function () {
                    delete files[index]; //删除对应的文件
                    tr.remove();
                    uploadListIns.config.elem.next()[0].value = ''; //清空 input file 值，以免删除后出现同名文件不可选
                });

                demoListView.append(tr);
            });
        }
        , done: function (res, index, upload) {
            if (res.files.file) { //上传成功
                var tr = demoListView.find('tr#upload-' + index)
                    , tds = tr.children();
                tds.eq(2).html('<span style="color: #5FB878;">上传成功</span>');
                tds.eq(3).html(''); //清空操作
                return delete this.files[index]; //删除文件队列已经上传成功的文件
            }
            this.error(index, upload);
        }
        , error: function (index, upload) {
            var tr = demoListView.find('tr#upload-' + index)
                , tds = tr.children();
            tds.eq(2).html('<span style="color: #FF5722;">上传失败</span>');
            tds.eq(3).find('.demo-reload').removeClass('layui-hide'); //显示重传
        }
    });

//触发事件
    var active = {
        offset: function (othis) {
            var type = othis.data('type');

            layer.open({
                type: 1
                ,
                offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
                ,
                title: '信息修改'
                ,
                id: 'edit-userName' + type //防止重复弹出
                ,
                content: '   <div class="layui-inline" style="margin-top: 20px; margin-right: 40px">\n' +
                    '       <label class="layui-form-label" style="font-size: 13px">用户名</label>\n' +
                    '       <div class="layui-input-inline">\n' +
                    '        <input type="tel" name="userName" id="userName" class="layui-input"' +
                    'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                    '       </div>\n' +
                    '   </div>'
                ,
                btn: ['保存', '取消'],
                btn1: function (index, layero) {
                    var param = document.getElementById("userName").value;
                    updateUser("userName", param, index);
                }
            });
        }
    };

    $('#edit-userName').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active[method] ? active[method].call(this, othis) : '';
    });

    var active1 = {
        offset: function (othis) {
            var type = othis.data('type');

            layer.open({
                type: 1
                ,
                offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
                ,
                title: '信息修改'
                ,
                id: 'edit-mail' + type //防止重复弹出
                ,
                content: '   <div class="layui-inline" style="margin-top: 20px; margin-right: 40px">\n' +
                    '       <label class="layui-form-label" style="font-size: 13px">邮件</label>\n' +
                    '       <div class="layui-input-inline">\n' +
                    '        <input type="tel" name="mail" id="mail" class="layui-input"' +
                    'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                    '       </div>\n' +
                    '   </div>'
                ,
                btn: ['保存', '取消']
                , btn1: function (index, layero) {
                    var param = document.getElementById("mail").value;
                    updateUser("mail", param, index);
                }
            });
        }
    };

    $('#edit-mail').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active1[method] ? active1[method].call(this, othis) : '';
    });

//自定义样式
    laypage.render({
        elem: 'demo2'
        , count: 100
        , theme: '#1E9FFF'
    });

    var active2 = {
        offset: function (othis) {
            var type = othis.data('type');

            layer.open({
                type: 1
                ,
                offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
                ,
                title: '信息修改'
                ,
                id: 'edit-hobby' + type //防止重复弹出
                ,
                content: '   <div class="layui-inline" style="margin-top: 20px; margin-right: 40px">\n' +
                    '       <label class="layui-form-label" style="font-size: 13px">专业兴趣</label>\n' +
                    '       <div class="layui-input-inline">\n' +
                    '        <input type="tel" name="major" id="major" class="layui-input"' +
                    'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                    '       </div>\n' +
                    '   </div>'
                ,
                btn: ['保存', '取消']
                , btn1: function (index, layero) {
                    var param = document.getElementById("major").value;
                    updateUser("major", param, index);
                }
            });
        }
    };

    $('#edit-hobby').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active2[method] ? active2[method].call(this, othis) : '';
    });

    var active7 = {
        offset: function (othis) {
            var type = othis.data('type');

            layer.open({
                type: 1
                ,
                offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
                ,
                title: '信息修改'
                ,
                id: 'edit-address' + type //防止重复弹出
                ,
                content: '   <div class="layui-inline" style="margin-top: 20px; margin-right: 40px">\n' +
                    '       <label class="layui-form-label" style="font-size: 13px">家庭住址</label>\n' +
                    '       <div class="layui-input-inline">\n' +
                    '        <input type="tel" name="address" id="address" class="layui-input"' +
                    'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                    '       </div>\n' +
                    '   </div>'
                ,
                btn: ['保存', '取消']
                , btn1: function (index, layero) {
                    var param = document.getElementById("address").value;
                    updateUser("address", param, index);
                }
            });
        }
    };

    $('#edit-address').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active7[method] ? active7[method].call(this, othis) : '';
    });

    var active8 = {
        offset: function (othis) {
            var type = othis.data('type');

            layer.open({
                type: 1
                ,
                offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
                ,
                title: '信息修改'
                ,
                id: 'edit-education' + type //防止重复弹出
                ,
                content: '   <div class="layui-inline" style="margin-top: 20px; margin-right: 40px">\n' +
                    '       <label class="layui-form-label" style="font-size: 13px">学历</label>\n' +
                    '       <div class="layui-input-inline">\n' +
                    '        <input type="tel" name="education" id="education" class="layui-input"' +
                    'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                    '       </div>\n' +
                    '   </div>'
                ,
                btn: ['保存', '取消']
                , btn1: function (index, layero) {
                    var param = document.getElementById("education").value;
                    updateUser("education", param, index);
                }
            });
        }
    };

    $('#edit-education').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active8[method] ? active8[method].call(this, othis) : '';
    });

    var active3 = {
        offset: function (othis) {
            var type = othis.data('type');

            layer.open({
                type: 1
                ,
                offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
                ,
                title: '信息修改'
                ,
                id: 'edit-introduce' + type //防止重复弹出
                ,
                content: '  <div style="margin-top: 20px; margin-right: 40px ">\n' +
                    '    <label class="layui-form-label">个人简介</label>\n' +
                    '    <div style="margin-left: 35px; width: 300px; ">\n' +
                    '      <textarea placeholder="请输入内容"  name="introduce" id="introduce" class="layui-textarea"></textarea>\n' +
                    '    </div>\n' +
                    '  </div>'
                ,
                btn: ['保存', '取消']
                , btn1: function (index, layero) {
                    var param = document.getElementById("introduce").value;
                    updateUser("introduce", param, index);
                }
            });
        }
    };

    $('#edit-introduce').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active3[method] ? active3[method].call(this, othis) : '';
    });

    var active4 = {
        offset: function (othis) {
            var type = othis.data('type');

            layer.open({
                type: 1
                ,
                offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
                ,
                title: '信息修改'
                ,
                id: 'password_edit' + type //防止重复弹出
                ,
                content: '<div class="layui-form-item" style="margin-top: 20px; margin-right: 40px">\n' +
                    '    <label class="layui-form-label" style="font-size: 13px">原始密码</label>\n' +
                    '    <div class="layui-input-block">\n' +
                    '      <input type="password" name="password" id="password"  onblur="checkPasswordA()" placeholder="请输入密码" autocomplete="off" class="layui-input" ' +
                    'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                    '<span id="password-na" style="color:red; font-size: 4px"></span>' +
                    '    </div>\n' +
                    '  </div>' +
                    '<div class="layui-form-item" style="margin-top: 20px; margin-right: 40px">\n' +
                    '    <label class="layui-form-label" style="font-size: 13px" >输入新密码</label>\n' +
                    '    <div class="layui-input-block">\n' +
                    '      <input type="password" name="newPassword1" id="newPassword1"  onblur="countPassword()"  lay-verify="required" lay-reqtext="请输入长度为6-12位的密码"placeholder="请输入密码" autocomplete="off" class="layui-input" ' +
                    'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                    '<span id="password-tips" style="color:red; font-size: 4px"></span>' +
                    '    </div>\n' +
                    '  </div>' +
                    '<div class="layui-form-item" style="margin-top: 20px; margin-right: 40px">\n' +
                    '    <label class="layui-form-label" style="font-size: 13px">确认新密码</label>\n' +
                    '    <div class="layui-input-block">\n' +
                    '      <input type="password" name="newPassword2" id="newPassword2" placeholder="请输入密码"  lay-verify="required" lay-reqtext="请输入长度为6-12位的密码" onblur="checkPassword()" autocomplete="off" class="layui-input" ' +
                    'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                    '<span id="tips" style="color:red; font-size: 4px"></span>' +
                    '    </div>\n' +
                    '  </div>'
                ,
                btn: ['保存', '取消']
                , btn1: function (index, layero) {
                    var param = document.getElementById("newPassword2").value;
                    updateUser("passsword", param, index);
                },
                btn2: function (index, layero) {
                    layer.close(index);
                }
            });
        }
    };


    $('#password_edit').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active4[method] ? active4[method].call(this, othis) : '';
    });

    window.checkPasswordA = function () {
        var password = document.getElementById("password").value;
        $.ajax({
            url: "/userManage/getUserInfoByUserId?userId=" + userId,
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                if (password === "") {
                    document.getElementById("password-na").innerHTML = "<br><font color='red'>请输入密码!</font>";
                } else {
                    if (data.data !== null) {
                        if (password === stringToDecode(data.data.userPassword, 10)) {
                            document.getElementById("password-na").innerHTML = "<br><font color='green'>输入密码正确!</font>";
                        } else {
                            document.getElementById("password-na").innerHTML = "<br><font color='red'>输入密码错误!</font>";
                        }
                    }
                }
            }
        })
    }

    window.countPassword = function () {
        var password = document.getElementById("newPassword1").value;
        if (password === "") {
            document.getElementById("password-tips").innerHTML = "<br><font color='red'>输入密码不能为空!</font>";
        } else if (password.length < 6) {
            document.getElementById("password-tips").innerHTML = "<br><font color='red'>密码至少得6个字符!</font>";
        } else {
            document.getElementById("password-tips").innerHTML = "";
        }
    }

    window.checkPassword = function () {
        var password = document.getElementById("newPassword1").value;
        var repassword = document.getElementById("newPassword2").value;
        if (password === "" || repassword === "") {
            document.getElementById("tips").innerHTML = "<br><font color='red'>输入密码不能为空!</font>";
        } else if (password === repassword) {
            document.getElementById("tips").innerHTML = "<br><font color='green'>两次密码输入一致</font>";
            document.getElementById("newPassword1").value = obscure(repassword, 10);
            document.getElementById("newPassword2").value = obscure(repassword, 10);
        } else {
            document.getElementById("tips").innerHTML = "<br><font color='red'>两次输入密码不一致!</font>";
        }
    }

    function updateUser(string, param, index) {
        var formData = new FormData();
        formData.append(string, param);
        formData.append("userId", userId);
        $.ajax({
            url: "/userManage/updateUserByParam",
            type: "post",
            dataType: "json",
            async: false,
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.data === true) {
                    //关闭弹框
                    layer.close(index);
                    layer.msg("更新成功", {icon: 6});
                } else {
                    layer.msg("更新失败", {icon: 5});
                }
            }
        });
    }

    var active5 = {
        offset: function (othis) {
            var type = othis.data('type');

            layer.open({
                type: 6
                ,
                offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
                ,
                title: '提出问题'
                ,
                area: ['600px', 'auto']
                ,
                id: 'addQuestion' + type //防止重复弹出
                ,
                content: '<div class="row" style="width: 420px;  margin-left:7px; margin-top:10px;">'
                    + '<table>'
                    + '<tr>'
                    + '<td colspan="2">'
                    + '<div class="layui-form-item" style="margin-top: 20px">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">问题题目</label>\n'
                    + '    <div class="layui-input-block" style="margin-left: 110px; width: 410px; ">\n'
                    + '      <textarea placeholder="请输入问题题目" name="questionName" id="questionName" class="layui-textarea"></textarea>\n'
                    + '    </div>\n'
                    + '  </div>'
                    + '</td>'
                    + '</tr>'
                    + '<tr>'
                    + '<td>'
                    + '<div class="layui-form-item">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">悬赏积分</label>\n'
                    + '    <div class="layui-input-block">\n'
                    + '      <input type="number" min="0" id="questionIntegral" value="" placeholder="请输入悬赏积分" autocomplete="off" class="layui-input" '
                    + 'style="width: 150px; height: 30px; margin-top: 5px">\n'
                    + '    </div>\n'
                    + '  </div>'
                    + '</td>'
                    + '<td >'
                    + '<div class="layui-form-item">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">类别</label>\n'
                    + '    <div class="layui-input-block">\n'
                    + ' <div class="layui-inline" style="width: 150px; height: 30px; margin-top: 5px">\n'
                    + '      <div class="layui-input-inline">\n'
                    + '        <select name="modules" name="classification" id="classification" '
                    + 'style="width: 150px; height: 30px" lay-verify="required" lay-search="">\n'
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
                    + '</tr>'
                    + '<tr>'
                    + '<td colspan="2">'
                    + '<div class="layui-form-item">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">问题内容</label>\n'
                    + '    <div class="layui-input-block" style="margin-left: 110px; width: 410px; ">\n'
                    + '      <textarea placeholder="请输入内容" name="questionContent" id="questionContent" class="layui-textarea"></textarea>\n'
                    + '    </div>\n'
                    + '  </div>'
                    + '</td>'
                    + '</tr>'
                    + '</table>'
                    + '</div>'
                , btn: ['保存', '取消']
                , btn1: function (index, layero) {
                    var formData = new FormData();
                    var myDate = new Date();
                    var questionName = document.getElementById("questionName").value;
                    var questionIntegral = document.getElementById("questionIntegral").value;
                    var classification = document.getElementById("classification").value;
                    var questionContent = document.getElementById("questionContent").value;
                    var questionDate = myDate.getFullYear() + "-" + myDate.getMonth() + "-" + myDate.getDate();
                    var questionIsSolve = 0;
                    var isDelete = 0;
                    formData.append("userId", userId);
                    formData.append("questionName", questionName);
                    formData.append("questionIntegral", questionIntegral);
                    formData.append("classification", classification);
                    formData.append("questionContent", questionContent);
                    formData.append("questionDate", questionDate);
                    formData.append("questionIsSolve", questionIsSolve);
                    formData.append("isDelete", isDelete);
                    $.ajax({
                        url: "/questionManage/insertQuestion",
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
                                layer.msg("添加成功", {icon: 6});
                            } else {
                                layer.msg("添加失败", {icon: 5});
                            }
                        }
                    });

                },
                btn2: function (index, layero) {
                    layer.close(index);
                }
            });
        }
    };

    $('#addQuestion').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active5[method] ? active5[method].call(this, othis) : '';
    });

    var active6 = {
        offset: function (othis) {
            var type = othis.data('type');
            var data = othis.data;
            layer.open({
                type: 6
                ,
                offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
                ,
                title: '提出问题'
                ,
                area: ['600px', 'auto']
                ,
                id: 'editQuestion' + type //防止重复弹出
                ,
                content: '<div class="row" style="width: 420px;  margin-left:7px; margin-top:10px;">'
                    + '<table>'
                    + '<tr>'
                    + '<td colspan="2">'
                    + '<div class="layui-form-item" style="margin-top: 20px">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">问题题目</label>\n'
                    + '    <div class="layui-input-block" style="margin-left: 110px; width: 410px; ">\n'
                    + '      <textarea placeholder="请输入问题题目" name="questionName" id="questionName" class="layui-textarea"></textarea>\n'
                    + '    </div>\n'
                    + '  </div>'
                    + '</td>'
                    + '</tr>'
                    + '<tr>'
                    + '<td>'
                    + '<div class="layui-form-item">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">悬赏积分</label>\n'
                    + '    <div class="layui-input-block">\n'
                    + '      <input type="number" min="0" id="questionIntegral" value="" placeholder="请输入悬赏积分" autocomplete="off" class="layui-input" '
                    + 'style="width: 150px; height: 30px; margin-top: 5px">\n'
                    + '    </div>\n'
                    + '  </div>'
                    + '</td>'
                    + '<td >'
                    + '<div class="layui-form-item">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">类别</label>\n'
                    + '    <div class="layui-input-block">\n'
                    + ' <div class="layui-inline" style="width: 150px; height: 30px; margin-top: 5px">\n'
                    + '      <div class="layui-input-inline">\n'
                    + '        <select name="modules" name="classification" id="classification" '
                    + 'style="width: 150px; height: 30px" lay-verify="required" lay-search="">\n'
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
                    + '</tr>'
                    + '<tr>'
                    + '<td colspan="2">'
                    + '<div class="layui-form-item">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">问题内容</label>\n'
                    + '    <div class="layui-input-block" style="margin-left: 110px; width: 410px; ">\n'
                    + '      <textarea placeholder="请输入内容" name="questionContent" id="questionContent" class="layui-textarea"></textarea>\n'
                    + '    </div>\n'
                    + '  </div>'
                    + '</td>'
                    + '</tr>'
                    + '</table>'
                    + '</div>'
                ,
                btn: ['保存', '取消']
            });
        }
    };

    $('#editQuestion').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active6[method] ? active6[method].call(this, othis) : '';
    });

    table.render({
        elem: '#test'
        , url: '/demo/table/user/'
        , cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        , cols: [[
            , {field: 'videoNumber', width: 80, title: '集'}
            , {field: 'videoName', title: '视频名', sort: true}
            , {field: 'videoDate', title: '上传时间'}
            , {field: 'playbackVolume', title: '播放量'} //minWidth：局部定义当前单元格的最小宽度，layui 2.2.1 新增
            , {fixed: 'right', title: '操作', toolbar: '#barDemo', width: 200}
        ]]
    });

    /**
     * 展示已购买的视频
     */
    $.ajax({
        url: "/orderManage/getCountListOfVideo?userId=" + userId,
        type: "post",
        dataType: "json",
        contentType: false,
        processData: false,
        success: function (data) {
            laypage.render({
                elem: 'demo7'
                , count: data.data
                // , layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
                , limit: 8
                , jump: function (obj) {
                    //调用加载函数加载数据
                    showVideoByOrder(obj.curr, obj.limit, userId);
                }
            });
        }
    });

    /**
     * 点击展示已购买的视频
     */
    $('#boughtVideo').on('click', function () {
        $.ajax({
            url: "/orderManage/getCountListOfVideo?userId=" + userId,
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demo7'
                    , count: data.data
                    // , layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
                    , limit: 8
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showVideoByOrder(obj.curr, obj.limit, userId);
                    }
                });
            }
        });
    });
    $('#boughtSeries').on('click', function () {
        $.ajax({
            url: "/orderManage/getCountListOfSeries?userId=" + userId,
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demo7'
                    , count: data.data
                    // , layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showSeriesByOrder(obj.curr, obj.limit, userId);
                    }
                });
            }
        });
    });

    $('#video-card').on('click', function () {
        $.ajax({
            url: "/orderManage/getCountListOfVideo?userId=" + userId,
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demo7'
                    , count: data.data
                    // , layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
                    , limit: 8
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showVideoByOrder(obj.curr, obj.limit, userId);
                    }
                });
            }
        });
    });

    $('#order-card').on('click', function () {
        $.ajax({
            url: "/orderManage/getCountOrderList?userId=" + userId,
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demo8'
                    , count: data.data
                    // , layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showAllOrder(obj.curr, obj.limit, userId);
                    }
                });
            }
        });
    });

    $('#order-non-payment').on('click', function () {
        $.ajax({
            url: "/orderManage/getCountNonPayment?userId=" + userId,
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demo8'
                    , count: data.data
                    // , layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showNonPaymentOrder(obj.curr, obj.limit, userId);
                    }
                });
            }
        });
    });
    $('#order-payment').on('click', function () {
        $.ajax({
            url: "/orderManage/getCountPayment?userId=" + userId,
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demo8'
                    , count: data.data
                    // , layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showPaymentOrder(obj.curr, obj.limit, userId);
                    }
                });
            }
        });
    });
    $('#order-lose-efficacy').on('click', function () {
        $.ajax({
            url: "/orderManage/getCountLoseEfficacy?userId=" + userId,
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demo8'
                    , count: data.data
                    // , layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showLoseEfficacOrder(obj.curr, obj.limit, userId);
                    }
                });
            }
        });
    });

    $('#collect-card').on('click', function () {
        $.ajax({
            url: "/bookmarkManage/getCountVideoBookmarks?userId=" + userId,
            type: "post",
            dataType: "json",
            async: false,
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demo9'
                    , count: data.data
                    // , layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
                    , limit: 10
                    , jump: function (obj) {
                        showCollectVideo(obj.curr, obj.limit, userId)
                    }
                });
            }
        });
    });

    $('#collect-question').on('click', function () {
        $.ajax({
            url: "/bookmarkManage/getCountQuestionBookmarks?userId=" + userId,
            type: "post",
            dataType: "json",
            async: false,
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demo9'
                    , count: data.data
                    // , layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
                    , limit: 10
                    , jump: function (obj) {
                        showCollectQuestion(obj.curr, obj.limit, userId)
                    }
                });
            }
        });
    });

    function showCollectVideo(pageNo, pageSize, userId) {
        var formData = new FormData();
        formData.append("userId", userId);
        formData.append("limit", pageSize);
        formData.append("page", pageNo);
        $.ajax({
            url: "/bookmarkManage/getVideoBookmarksList",
            type: "post",
            dataType: "json",
            async: false,
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                $("#book-mark-video").empty();
                if (data.data.numberOfElements === 0) {
                    document.getElementById("demo9").style.display = "none";
                    var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                        "<div>" +
                        "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                        "<span>暂无相关信息！</span>" +
                        "</div>" +
                        "</div>"
                    $("#book-mark-video").append(appendhtml);
                } else {
                    document.getElementById("demo9").style.display = "block";
                    for (var i = 0; i < data.data.numberOfElements; i++) {
                        var appendhtml = "<div class=\"layui-collapse\" lay-filter=\"test\">\n" +
                            "                                        <div class=\"layui-colla-item\">\n" +
                            "                                            <h2 class=\"layui-colla-title\">" +
                            "                                            <span onclick='showCollectVideoListA(\"" + data.data.content[i].bookmarkName + "\")'>" + data.data.content[i].bookmarkName + "" +
                            "                                            </span>" +
                            "                                            <div class=\"layui-btn-group\" style=\"float: right\">\n" +
                            "                                                    <button type=\"button\"\n" +
                            "                                                            class=\"layui-btn layui-btn-primary layui-btn-sm\"><i\n" +
                            "                                                            class=\"layui-icon\" onclick='updateBookmarkOfVideo(\"" + data.data.content[i].bookmarkName + "\")'></i></button>\n" +
                            "                                                    <button type=\"button\"\n" +
                            "                                                            class=\"layui-btn layui-btn-primary layui-btn-sm\"><i\n" +
                            "                                                            class=\"layui-icon\"  onclick='deleteBookmarkOfVideo(\"" + data.data.content[i].bookmarkName + "\")'></i></button>\n" +
                            "                                                </div>\n" +
                            "                                                <div style=\"clear: both\"></div>" +
                            "                                            </h2>\n" +
                            "                                            <div class=\"layui-colla-content\" id=\"book-mark-video-list" + i + "\">\n" +
                            "                                            </div>\n" +
                            "                                        </div>\n" +
                            "                                    </div>";
                        $("#book-mark-video").append(appendhtml);
                    }
                }
            }
        });
    }

    function showCollectQuestion(pageNo, pageSize, userId) {
        var formData = new FormData();
        formData.append("userId", userId);
        formData.append("limit", pageSize);
        formData.append("page", pageNo);
        $.ajax({
            url: "/bookmarkManage/getQuestionBookmarksList",
            type: "post",
            dataType: "json",
            async: false,
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                $("#book-mark-question").empty();
                if (data.data.numberOfElements === 0) {
                    document.getElementById("demo9").style.display = "none";
                    var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                        "<div>" +
                        "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                        "<span>暂无相关信息！</span>" +
                        "</div>" +
                        "</div>"
                    $("#book-mark-question").append(appendhtml);
                } else {
                    document.getElementById("demo9").style.display = "block";
                    for (var i = 0; i < data.data.numberOfElements; i++) {
                        var appendhtml = "<div class=\"layui-collapse\" lay-filter=\"test\">\n" +
                            "                                        <div class=\"layui-colla-item\">\n" +
                            "                                            <h2 class=\"layui-colla-title\">" +
                            "                                            <span onclick='showCollectQuestionListA(\"" + data.data.content[i].bookmarkName + "\")'>" + data.data.content[i].bookmarkName + "" +
                            "                                            </span>" +
                            "                                            <div class=\"layui-btn-group\" style=\"float: right\">\n" +
                            "                                                    <button type=\"button\"\n" +
                            "                                                            class=\"layui-btn layui-btn-primary layui-btn-sm\"><i\n" +
                            "                                                            class=\"layui-icon\" onclick='updateBookmarkOfQuestion(\"" + data.data.content[i].bookmarkName + "\")'></i></button>\n" +
                            "                                                    <button type=\"button\"\n" +
                            "                                                            class=\"layui-btn layui-btn-primary layui-btn-sm\"><i\n" +
                            "                                                            class=\"layui-icon\" onclick='deleteBookmarkOfQuestion(\"" + data.data.content[i].bookmarkName + "\")'></i></button>\n" +
                            "                                                </div>\n" +
                            "                                                <div style=\"clear: both\"></div>" +
                            "                                            </h2>\n" +
                            "                                            <div class=\"layui-colla-content\" id=\"book-mark-video-list" + i + "\">\n" +
                            "                                            </div>\n" +
                            "                                        </div>\n" +
                            "                                    </div>";
                        $("#book-mark-question").append(appendhtml);
                    }
                }
            }
        });
    }

    window.showCollectVideoListA = function (bookmarkName) {
        var formData = new FormData();
        formData.append("userId", userId);
        formData.append("bookmarkName", bookmarkName);
        $.ajax({
            url: "/bookmarkManage/getVideoBookmarksCount",
            type: "post",
            dataType: "json",
            async: false,
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demo9'
                    , count: data.data
                    // , layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showCollectVideoList(obj.curr, obj.limit, userId, bookmarkName);
                    }
                });
            }
        });
    }

    window.showCollectQuestionListA = function (bookmarkName) {
        var formData = new FormData();
        formData.append("userId", userId);
        formData.append("bookmarkName", bookmarkName);
        $.ajax({
            url: "/bookmarkManage/getQuestionBookmarksCount",
            type: "post",
            dataType: "json",
            async: false,
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demo9'
                    , count: data.data
                    // , layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showCollectQuestionList(obj.curr, obj.limit, userId, bookmarkName);
                    }
                });
            }
        });
    }

    window.deleteBookmarkOfVideo = function (bookmarkName) {
        var formData = new FormData();
        formData.append("userId", userId);
        formData.append("bookmarkName", bookmarkName);
        layer.confirm('是否删除', function (index) {
            $.ajax({
                url: "/bookmarkManage/deleteBookmarkOfVideo",
                type: "post",
                dataType: "json",
                async: false,
                data: formData,
                contentType: false,
                processData: false,
                success: function (data) {
                    if (data.data === true) {
                        //关闭弹框
                        layer.close(index);
                        layer.msg("删除成功", {icon: 6});
                    } else {
                        layer.msg("删除失败", {icon: 5});
                    }
                }
            });
        });
    }

    window.deleteBookmarkOfQuestion = function (bookmarkName) {
        var formData = new FormData();
        formData.append("userId", userId);
        formData.append("bookmarkName", bookmarkName);
        layer.confirm('是否删除', function (index) {
            $.ajax({
                url: "/bookmarkManage/deleteBookmarkOfQuestion",
                type: "post",
                dataType: "json",
                async: false,
                data: formData,
                contentType: false,
                processData: false,
                success: function (data) {
                    if (data.data === true) {
                        //关闭弹框
                        layer.close(index);
                        layer.msg("删除成功", {icon: 6});
                    } else {
                        layer.msg("删除失败", {icon: 5});
                    }
                }
            });
        });
    }

    window.deleteBookmakById = function (id) {
        layer.confirm('是否删除', function (index) {
            $.ajax({
                url: "/bookmarkManage/deleteBookmarkById?id=" + id,
                type: "post",
                dataType: "json",
                async: false,
                contentType: false,
                processData: false,
                success: function (data) {
                    if (data.data === true) {
                        //关闭弹框
                        layer.close(index);
                        layer.msg("删除成功", {icon: 6});
                    } else {
                        layer.msg("删除失败", {icon: 5});
                    }
                }
            });
        });
    }

    window.updateBookmarkOfVideo = function (bookmarkName) {
        layer.open({
            type: 6,
            title: '修改信息',
            // skin:'layui-layer-rim',
            area: ['auto', 'auto'],

            content: '  <div class="layui-inline" style="margin-top: 20px; margin-right: 40px">\n' +
                '       <label class="layui-form-label" style="font-size: 13px">收藏夹</label>\n' +
                '       <div class="layui-input-inline">\n' +
                '        <input type="tel" name="newBookmarkName" id="newBookmarkName" class="layui-input"' +
                'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                '       </div>\n' +
                '   </div>'
            ,
            btn: ['保存', '取消'],
            btn1: function (index, layero) {
                var formData = new FormData();
                var newBookmarkName = document.getElementById("newBookmarkName").value;
                formData.append("newBookmarkName", newBookmarkName);
                formData.append("bookmarkName", bookmarkName);
                formData.append("userId", userId);
                $.ajax({
                    url: "/bookmarkManage/updateBookmarkOfVideo",
                    type: "post",
                    dataType: "json",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (msg) {
                        if (msg.data === true) {
                            //关闭弹框
                            layer.close(index);
                            layer.msg("更新成功", {icon: 6});
                        } else {
                            layer.msg("更新失败", {icon: 5});
                        }
                    }
                });

            },
        });
    }

    window.updateBookmarkOfQuestion = function (bookmarkName) {
        layer.open({
            type: 6,
            title: '修改信息',
            // skin:'layui-layer-rim',
            area: ['auto', 'auto'],

            content: '  <div class="layui-inline" style="margin-top: 20px; margin-right: 40px">\n' +
                '       <label class="layui-form-label" style="font-size: 13px">收藏夹</label>\n' +
                '       <div class="layui-input-inline">\n' +
                '        <input type="tel" name="newBookmarkName1" id="newBookmarkName1" class="layui-input"' +
                'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                '       </div>\n' +
                '   </div>'
            ,
            btn: ['保存', '取消'],
            btn1: function (index, layero) {
                var formData = new FormData();
                var newBookmarkName1 = document.getElementById("newBookmarkName1").value;
                formData.append("newBookmarkName", newBookmarkName1);
                formData.append("bookmarkName", bookmarkName);
                formData.append("userId", userId);
                $.ajax({
                    url: "/bookmarkManage/updateBookmarkOfQuestion",
                    type: "post",
                    dataType: "json",
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (msg) {
                        if (msg.data === true) {
                            //关闭弹框
                            layer.close(index);
                            layer.msg("更新成功", {icon: 6});
                        } else {
                            layer.msg("更新失败", {icon: 5});
                        }
                    }
                });

            },
        });
    }

    $('#question-card').on('click', function () {
        $.ajax({
            url: "/questionManage/getCountQuestionByUserId?id=" + userId,
            type: "post",
            dataType: "json",
            async: false,
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demo10'
                    , count: data.data
                    // , layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
                    , limit: 10
                    , jump: function (obj) {
                        getQuestionByUserId(obj.curr, obj.limit, userId)
                    }
                });
            }
        });
    });

    window.getQuestionByUserId = function (pageNo, pageSize, userId) {
        var formData = new FormData();
        formData.append("userId", userId);
        formData.append("limit", pageSize);
        formData.append("page", pageNo);
        $.ajax({
            url: "/questionManage/getQuestionByUserId",
            type: "post",
            dataType: "json",
            async: false,
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                $("#question-list").empty();
                if (data.data.numberOfElements === 0) {
                    document.getElementById("demo10").style.display = "none";
                    var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                        "<div>" +
                        "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                        "<span>暂无相关信息！</span>" +
                        "</div>" +
                        "</div>"
                    $("#question-list").append(appendhtml);
                } else {
                    document.getElementById("demo10").style.display = "block";
                    for (var i = 0; i < data.data.numberOfElements; i++) {
                        var appendhtml = "<div class=\"layui-colla-item\">\n" +
                            "                    <h2 class=\"layui-colla-title\">" + data.data.content[i].questionName + "</h2>\n" +
                            "                    <div style=\"border: solid #97b3ff 1px; border-radius: 5px; padding: 10px\">\n" +
                            "                        <span style=\"font-size: 13px; color: #999\">" + data.data.content[i].questionContent + "</span>\n" +
                            "                        <div style=\"float: right\">\n" +
                            "                            <div class=\"layui-btn-group\">\n" +
                            "                                <button type=\"button\" class=\"layui-btn layui-btn-primary layui-btn-sm\" onclick='toQuestionDetail(" + data.data.content[i].id + ")'>详情</button>\n" +
                            "                                <button type=\"button\" class=\"layui-btn layui-btn-primary layui-btn-sm\"\n" +
                            "                                        data-method=\"offset\" data-type=\"auto\" id=\"editQuestion\"><i\n" +
                            "                                        class=\"layui-icon\" onclick='updateQuestion(" + data.data.content[i].id + ")'></i></button>\n" +
                            "                                <button type=\"button\" class=\"layui-btn layui-btn-primary layui-btn-sm\"><i\n" +
                            "                                        class=\"layui-icon\" onclick='deleteQuestionById(" + data.data.content[i].id + ")'></i></button>\n" +
                            "                            </div>\n" +
                            "                        </div>\n" +
                            "                        <div style=\"clear: both\"></div>\n" +
                            "                    </div>\n" +
                            "                </div>";
                        $("#question-list").append(appendhtml);
                    }
                }
            }
        })
    }

    window.updateQuestion = function (id) {
        $.ajax({
            url: "/questionManage/getQuestionById?id=" + id,
            type: "post",
            dataType: "json",
            async: false,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.data !== null) {
                    layer.open({
                        type: 6
                        ,
                        title: '修改问题'
                        ,
                        area: ['600px', 'auto']
                        ,
                        content: '<div class="row" style="width: 420px;  margin-left:7px; margin-top:10px;">'
                            + '<input type="hidden" id="questionDate" name="questionDate" value="' + data.data.questionDate + '">'
                            + '<input type="hidden" id="questionIsSolve" name="questionIsSolve" value="' + data.data.questionIsSolve + '">'
                            + '<input type="hidden" id="isDelete" name="isDelete" value="' + data.data.isDelete + '">'
                            + '<input type="hidden" id="viewNumber" name="viewNumber" value="' + data.data.viewNumber + '">'
                            + '<table>'
                            + '<tr>'
                            + '<td colspan="2">'
                            + '<div class="layui-form-item" style="margin-top: 20px">\n'
                            + '    <label class="layui-form-label" style="font-size: 13px">问题题目</label>\n'
                            + '    <div class="layui-input-block" style="margin-left: 110px; width: 410px; ">\n'
                            + '      <textarea placeholder="请输入问题题目" name="questionName" id="questionName" class="layui-textarea">' + data.data.questionName + '</textarea>\n'
                            + '    </div>\n'
                            + '  </div>'
                            + '</td>'
                            + '</tr>'
                            + '<tr>'
                            + '<td>'
                            + '<div class="layui-form-item">\n'
                            + '    <label class="layui-form-label" style="font-size: 13px">悬赏积分</label>\n'
                            + '    <div class="layui-input-block">\n'
                            + '      <input type="number" min="0" id="questionIntegral" value="' + data.data.questionIntegral + '" placeholder="请输入悬赏积分" autocomplete="off" class="layui-input" '
                            + 'style="width: 150px; height: 30px; margin-top: 5px">\n'
                            + '    </div>\n'
                            + '  </div>'
                            + '</td>'
                            + '<td >'
                            + '<div class="layui-form-item">\n'
                            + '    <label class="layui-form-label" style="font-size: 13px">类别</label>\n'
                            + '    <div class="layui-input-block">\n'
                            + ' <div class="layui-inline" style="width: 150px; height: 30px; margin-top: 5px">\n'
                            + '      <div class="layui-input-inline">\n'
                            + '        <select name="modules" name="classification" id="classification" '
                            + 'style="width: 150px; height: 30px" lay-verify="required" lay-search="">\n'
                            + '          <option value="' + data.classification + '">默认：' + data.data.classification + '</option>\n'
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
                            + '</tr>'
                            + '<tr>'
                            + '<td colspan="2">'
                            + '<div class="layui-form-item">\n'
                            + '    <label class="layui-form-label" style="font-size: 13px">问题内容</label>\n'
                            + '    <div class="layui-input-block" style="margin-left: 110px; width: 410px; ">\n'
                            + '      <textarea placeholder="请输入内容" name="questionContent" id="questionContent" class="layui-textarea">' + data.data.questionContent + '</textarea>\n'
                            + '    </div>\n'
                            + '  </div>'
                            + '</td>'
                            + '</tr>'
                            + '</table>'
                            + '</div>'
                        , btn: ['保存', '取消']
                        , btn1: function (index, layero) {

                            var formData = new FormData();
                            var myDate = new Date();
                            var questionName = document.getElementById("questionName").value;
                            var questionIntegral = document.getElementById("questionIntegral").value;
                            var classification = document.getElementById("classification").value;
                            var questionContent = document.getElementById("questionContent").value;
                            var questionDate = document.getElementById("questionDate").value;
                            var questionIsSolve = document.getElementById("questionIsSolve").value;
                            var isDelete = document.getElementById("isDelete").value;
                            var viewNumber = document.getElementById("viewNumber").value;
                            formData.append("id", id);
                            formData.append("userId", userId);
                            formData.append("questionName", questionName);
                            formData.append("questionIntegral", questionIntegral);
                            formData.append("classification", classification);
                            formData.append("questionContent", questionContent);
                            formData.append("questionDate", questionDate);
                            formData.append("questionIsSolve", questionIsSolve);
                            formData.append("isDelete", isDelete);
                            formData.append("viewNumber", viewNumber);
                            $.ajax({
                                url: "/questionManage/insertQuestion",
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
                                        layer.msg("修改成功", {icon: 6});
                                    } else {
                                        layer.msg("修改失败", {icon: 5});
                                    }
                                }
                            });

                        },
                        btn2: function (index, layero) {
                            layer.close(index);
                        }
                    });
                }
            }
        })
    }

    window.deleteQuestionById = function (id) {
        layer.confirm('是否删除', function (index) {
            $.ajax({
                url: "/questionManage/deleteQuestion?id=" + id,
                type: "post",
                dataType: "json",
                async: false,
                contentType: false,
                processData: false,
                success: function (data) {
                    if (data.data === true) {
                        //关闭弹框
                        layer.close(index);
                        layer.msg("删除成功", {icon: 6});
                    } else {
                        layer.msg("删除失败", {icon: 5});
                    }
                }
            });
        });
    }

    window.toQuestionDetail = function (id) {
        window.location.href = "/userUrl/question?id=" + id;
    }
});

function showVideoByOrder(pageNo, pageSize, userId) {
    var formData = new FormData();
    formData.append("userId", userId);
    formData.append("limit", pageSize);
    formData.append("page", pageNo);
    $.ajax({
        url: "/orderManage/getOrderListOfVideo",
        type: "post",
        dataType: "json",
        async: false,
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            $("#boughtVideoList").empty();
            if (data.data.numberOfElements === 0) {
                document.getElementById("demo7").style.display = "none";
                var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                    "<div>" +
                    "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                    "<span>暂无相关信息！</span>" +
                    "</div>" +
                    "</div>"
                $("#boughtVideoList").append(appendhtml);
            } else {
                document.getElementById("demo7").style.display = "block";
                for (var i = 0; i < data.data.numberOfElements; i++) {
                    var appendhtml = "<input type=\"hidden\" id=\"videoId\" name=\"videoId\" value=" + data.data.content[i].video.id + ">\n " +
                        "                               <div class=\"layui-col-md6\" style=\"width: 222px; padding: 5px;\">\n" +
                        "                                    <div class=\"layui-card\">\n" +
                        "                                        <a href=\"/userUrl/playVideo?id=" + data.data.content[i].video.id + "\">" +
                        "                                           <img src=" + data.data.content[i].video.videoImageUrl + " width=\"212\">\n" +
                        "                                            <div style=\"min-height: 30px; margin-left: 15px; \">\n" +
                        "                                                <span style=\"font-size: 12px\">" + data.data.content[i].video.videoName + "</span>\n" +
                        "                                            </div>\n" +
                        "                                        </a>\n" +
                        "                                        <div class=\"layui-card-body\">\n" +
                        "                                            <div class=\"layui-input-inline\" style=\"float: left\">\n" +
                        "                                                <img src=\"../images/integral.png\" style=\"width: 16px; height: 16px\"/>\n" +
                        "                                                <span style=\"color: red; font-size: 10px\">" + data.data.content[i].video.videoIntegral + "</span>&nbsp;&nbsp;" +
                        "                                                <img src=\"../images/play.png\" style=\"width: 16px; height: 16px\"/>\n" +
                        "                                                <span style=\"font-size: 10px; color:#999;\">" + data.data.content[i].video.playbackVolume + "</span>\n" +
                        "                                            </div>\n" +
                        "                                            <div class=\"layui-input-inline\" style=\"float: right\">\n" +
                        "                                                <span style=\"font-size: 10px; color:#999;\">" + data.data.content[i].video.videoDate + "</span>\n" +
                        "                                            </div>\n" +
                        "                                            <div style=\"clear: both\"></div>\n" +
                        "                                        </div>\n" +
                        "                                    </div>\n" +
                        "                                </div>";
                    $("#boughtVideoList").append(appendhtml);
                }
            }

        }
    });
}

function showSeriesByOrder(pageNo, pageSize, userId) {
    var formData = new FormData();
    formData.append("userId", userId);
    formData.append("limit", pageSize);
    formData.append("page", pageNo);
    $.ajax({
        url: "/orderManage/getOrderListOfSeries",
        type: "post",
        dataType: "json",
        async: false,
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            $("#boughtSeriesList").empty();
            $("#boughtVideoList").empty();
            if (data.data.numberOfElements === 0) {
                document.getElementById("demo7").style.display = "none";
                var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                    "<div>" +
                    "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                    "<span>暂无相关信息！</span>" +
                    "</div>" +
                    "</div>"
                $("#boughtSeriesList").append(appendhtml);
            } else {
                document.getElementById("demo7").style.display = "block";
                for (var i = 0; i < data.data.numberOfElements; i++) {
                    var appendhtml = "<div class=\"course\">\n" +
                        "                                    <div class=\"course-img layui-input-inline\">\n" +
                        "                                        <img src=" + data.data.content[i].videoSeries.seriesImageUrl + "\n" +
                        "                                             height=\"150\"\n" +
                        "                                             width=\"250\"/>\n" +
                        "                                    </div>\n" +
                        "                                    <div class=\"my-course-introduce layui-input-inline\">\n" +
                        "                                        <div class=\"layui-card-header\">" + data.data.content[i].videoSeries.seriesName + "</div>\n" +
                        "                                        <div class=\"layui-card-body\">\n" +
                        "                                             <span style=\"font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                        "                                                总集数：" + data.data.content[i].videoSeries.seriesNumber + "\n" +
                        "                                            </span>\n" +
                        "                                            <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                        "                                                分类：" + data.data.content[i].videoSeries.seriesClassification + "\n" +
                        "                                            </span>\n" +
                        "                                            <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                        "                                                二级分类：" + data.data.content[i].videoSeries.classificationLittle + "\n" +
                        "                                            </span>\n" +
                        "                                            <span style=\"margin-left: 20px; font-size: 12px; color: green; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                        "                                                <img src=\"../images/integral.png\" style=\"width: 13px; height: 13px\"/>\n" +
                        "                                                " + data.data.content[i].videoSeries.seriesIntegral + "（已购买）\n" +
                        "                                            </span>" +
                        "                                        </div>\n" +
                        "                                        <div class=\"layui-card-body\">\n" +
                        "                                            <button type=\"button\" class=\"layui-btn layui-btn-sm layui-btn-radius\"\n" +
                        "                                                    style=\"margin-left: 300px\">继续学习\n" +
                        "                                            </button>\n" +
                        "                                            <button type=\"button\" class=\"layui-btn layui-btn-sm layui-btn-danger layui-btn-radius\"\n" +
                        "                                                    style=\"margin-left: 50px\">删除课程\n" +
                        "                                            </button>\n" +
                        "                                        </div>\n" +
                        "                                    </div>\n" +
                        "                                </div>";
                    $("#boughtSeriesList").append(appendhtml);
                }
            }

        }
    });
}

function deleteOrder(orderId) {
    layer.confirm('是否删除', function (index) {
        $.ajax({
            url: "/orderManage/deleteOrder?id=" + orderId,
            type: "post",
            dataType: "json",
            async: false,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.data === true) {
                    layer.close(index);
                    layer.msg("删除成功", {icon: 6});
                    location.reload();
                } else {
                    layer.msg("删除失败", {icon: 5});
                }
            }
        });
    });
}

function showAllOrder(pageNo, pageSize, userId) {
    var formData = new FormData();
    formData.append("userId", userId);
    formData.append("limit", pageSize);
    formData.append("page", pageNo);
    $.ajax({
        url: "/orderManage/getOrderListByUserId",
        type: "post",
        dataType: "json",
        async: false,
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            $("#order-all").empty();
            if (data.data.numberOfElements === 0) {
                document.getElementById("demo8").style.display = "none";
                var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                    "<div>" +
                    "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                    "<span>暂无相关信息！</span>" +
                    "</div>" +
                    "</div>"
                $("#order-all").append(appendhtml);
            } else {
                document.getElementById("demo8").style.display = "block";
                for (var i = 0; i < data.data.numberOfElements; i++) {
                    var appendhtml1 = "";
                    var appendhtml2 = "";
                    if (data.data.content[i].videoSeries === null) {
                        appendhtml1 = "<div class=\"course\">\n" +
                            "                                        <div class=\"course-img layui-input-inline\">\n" +
                            "                                            <img src=" + data.data.content[i].video.videoImageUrl + "\n" +
                            "                                                 height=\"150\"\n" +
                            "                                                 width=\"250\"/>\n" +
                            "                                        </div>\n" +
                            "                                        <div class=\"my-course-introduce layui-input-inline\">\n" +
                            "                                            <div class=\"layui-card-header\">\n" +
                            "                                                " + data.data.content[i].video.videoName + "\n" +
                            "                                            </div>\n" +
                            "                                            <div class=\"layui-card-body\">\n" +
                            "                                                <span style=\"font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                分类：" + data.data.content[i].video.videoClassification + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                二级分类：" + data.data.content[i].video.classificationLittle + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: green; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                积分：" + data.data.content[i].video.videoIntegral + "\n" +
                            "                                            </span>\n" +
                            "                                            </div>\n" +
                            "                                            <div class=\"layui-card-body\">\n" +
                            "                                                <div class=\"layui-input-inline\">\n" +
                            "                                            <span style=\"font-size: 10px; color: #999;\">下单日期：" + data.data.content[i].orderDate + "</span>\n" +
                            "                                                    <span style=\"margin-left: 50px\">订单类型：<span\n" +
                            "                                                            style=\"color: red\">视频</span></span>\n";
                    } else {
                        appendhtml1 = "<div class=\"course\">\n" +
                            "                                        <div class=\"course-img layui-input-inline\">\n" +
                            "                                            <img src=" + data.data.content[i].videoSeries.seriesImageUrl + "\n" +
                            "                                                 height=\"150\"\n" +
                            "                                                 width=\"250\"/>\n" +
                            "                                        </div>\n" +
                            "                                        <div class=\"my-course-introduce layui-input-inline\">\n" +
                            "                                            <div class=\"layui-card-header\">\n" +
                            "                                                " + data.data.content[i].videoSeries.seriesName + "\n" +
                            "                                            </div>\n" +
                            "                                            <div class=\"layui-card-body\">\n" +
                            "                                            <span style=\"font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                总集数：" + data.data.content[i].videoSeries.seriesNumber + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                分类：" + data.data.content[i].videoSeries.seriesClassification + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                二级分类：" + data.data.content[i].videoSeries.classificationLittle + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: green; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                积分：" + data.data.content[i].videoSeries.seriesIntegral + "\n" +
                            "                                            </span>\n" +
                            "                                            </div>\n" +
                            "                                            <div class=\"layui-card-body\">\n" +
                            "                                                <div class=\"layui-input-inline\">\n" +
                            "                                            <span style=\"font-size: 10px; color: #999;\">下单日期：" + data.data.content[i].orderDate + "</span>\n" +
                            "                                                    <span style=\"margin-left: 50px\">订单类型：<span\n" +
                            "                                                            style=\"color: red\">系列</span></span>\n";

                    }
                    if (data.data.content[i].orderStatus === 2) {
                        appendhtml2 = "                                                    <span style=\"margin-left: 100px\">状态：<span\n" +
                            "                                                            style=\"color: green; \">已支付</span></span>\n" +
                            "                                                </div>\n" +
                            "                                            </div>\n" +
                            "                                        </div>\n" +
                            "                                    </div>";
                    } else if (data.data.content[i].orderStatus === 1) {
                        appendhtml2 = "                                                    <span style=\"margin-left: 100px\">状态：<span\n" +
                            "                                                            style=\"color: green; \">未支付</span></span>\n" +
                            "                                                </div>\n" +
                            "                                                <div class=\"layui-input-inline\">\n" +
                            "                                                    <button type=\"button\"\n" +
                            "                                                            class=\"layui-btn layui-btn-sm layui-btn-danger  layui-btn-radius\"\n" +
                            "                                                            style=\"margin-left: 20px\">立即支付\n" +
                            "                                                    </button>\n" +
                            "                                                </div>\n" +
                            "                                            </div>\n" +
                            "                                        </div>\n" +
                            "                                    </div>";
                    } else {
                        appendhtml2 = "                                                    <span style=\"margin-left: 100px\">状态：<span\n" +
                            "                                                            style=\"color: green; \">已失效</span></span>\n" +
                            "                                                </div>\n" +
                            "                                                <div class=\"layui-input-inline\">\n" +
                            "                                                    <button type=\"button\"\n" +
                            "                                                            class=\"layui-btn layui-btn-sm layui-btn-primary  layui-btn-radius\"\n" +
                            "                                                            style=\"margin-left: 20px\" onclick='deleteOrder(" + data.data.content[i].id + ")'>删除订单\n" +
                            "                                                    </button>\n" +
                            "                                                </div>\n" +
                            "                                            </div>\n" +
                            "                                        </div>\n" +
                            "                                    </div>";
                    }
                    $("#order-all").append(appendhtml1 + appendhtml2);
                }
            }
        }
    });
}

function showNonPaymentOrder(pageNo, pageSize, userId) {
    var formData = new FormData();
    formData.append("userId", userId);
    formData.append("limit", pageSize);
    formData.append("page", pageNo);
    $.ajax({
        url: "/orderManage/getNonPaymentList",
        type: "post",
        dataType: "json",
        async: false,
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            $("#order-non-payment-list").empty();
            if (data.data.numberOfElements === 0) {
                document.getElementById("demo8").style.display = "none";
                var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                    "<div>" +
                    "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                    "<span>暂无相关信息！</span>" +
                    "</div>" +
                    "</div>"
                $("#order-non-payment-list").append(appendhtml);
            } else {
                document.getElementById("demo8").style.display = "block";
                for (var i = 0; i < data.data.numberOfElements; i++) {
                    var appendhtml1 = "";
                    var appendhtml2 = "";
                    if (data.data.content[i].videoSeries === null) {
                        appendhtml1 = "<div class=\"course\">\n" +
                            "                                        <div class=\"course-img layui-input-inline\">\n" +
                            "                                            <img src=" + data.data.content[i].video.videoImageUrl + "\n" +
                            "                                                 height=\"150\"\n" +
                            "                                                 width=\"250\"/>\n" +
                            "                                        </div>\n" +
                            "                                        <div class=\"my-course-introduce layui-input-inline\">\n" +
                            "                                            <div class=\"layui-card-header\">\n" +
                            "                                                " + data.data.content[i].video.videoName + "\n" +
                            "                                            </div>\n" +
                            "                                            <div class=\"layui-card-body\">\n" +
                            "                                                <span style=\"font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                分类：" + data.data.content[i].video.videoClassification + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                二级分类：" + data.data.content[i].video.classificationLittle + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: green; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                积分：" + data.data.content[i].video.videoIntegral + "\n" +
                            "                                            </span>\n" +
                            "                                            </div>\n" +
                            "                                            <div class=\"layui-card-body\">\n" +
                            "                                                <div class=\"layui-input-inline\">\n" +
                            "                                            <span style=\"font-size: 10px; color: #999;\">下单日期：" + data.data.content[i].orderDate + "</span>\n" +
                            "                                                    <span style=\"margin-left: 50px\">订单类型：<span\n" +
                            "                                                            style=\"color: red\">视频</span></span>\n";
                    } else {
                        appendhtml1 = "<div class=\"course\">\n" +
                            "                                        <div class=\"course-img layui-input-inline\">\n" +
                            "                                            <img src=" + data.data.content[i].videoSeries.seriesImageUrl + "\n" +
                            "                                                 height=\"150\"\n" +
                            "                                                 width=\"250\"/>\n" +
                            "                                        </div>\n" +
                            "                                        <div class=\"my-course-introduce layui-input-inline\">\n" +
                            "                                            <div class=\"layui-card-header\">\n" +
                            "                                                " + data.data.content[i].videoSeries.seriesName + "\n" +
                            "                                            </div>\n" +
                            "                                            <div class=\"layui-card-body\">\n" +
                            "                                            <span style=\"font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                总集数：" + data.data.content[i].videoSeries.seriesNumber + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                分类：" + data.data.content[i].videoSeries.seriesClassification + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                二级分类：" + data.data.content[i].videoSeries.classificationLittle + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: green; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                积分：" + data.data.content[i].videoSeries.seriesIntegral + "\n" +
                            "                                            </span>\n" +
                            "                                            </div>\n" +
                            "                                            <div class=\"layui-card-body\">\n" +
                            "                                                <div class=\"layui-input-inline\">\n" +
                            "                                            <span style=\"font-size: 10px; color: #999;\">下单日期：" + data.data.content[i].orderDate + "</span>\n" +
                            "                                                    <span style=\"margin-left: 50px\">订单类型：<span\n" +
                            "                                                            style=\"color: red\">系列</span></span>\n";

                    }
                    appendhtml2 = "                                                    <span style=\"margin-left: 100px\">状态：<span\n" +
                        "                                                            style=\"color: green; \">未支付</span></span>\n" +
                        "                                                </div>\n" +
                        "                                                <div class=\"layui-input-inline\">\n" +
                        "                                                    <button type=\"button\"\n" +
                        "                                                            class=\"layui-btn layui-btn-sm layui-btn-danger  layui-btn-radius\"\n" +
                        "                                                            style=\"margin-left: 20px\">立即支付\n" +
                        "                                                    </button>\n" +
                        "                                                </div>\n" +
                        "                                            </div>\n" +
                        "                                        </div>\n" +
                        "                                    </div>";
                    $("#order-non-payment-list").append(appendhtml1 + appendhtml2);
                }
            }
        }
    });
}

function showPaymentOrder(pageNo, pageSize, userId) {
    var formData = new FormData();
    formData.append("userId", userId);
    formData.append("limit", pageSize);
    formData.append("page", pageNo);
    $.ajax({
        url: "/orderManage/getPaymentList",
        type: "post",
        dataType: "json",
        async: false,
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            $("#order-payment-list").empty();
            if (data.data.numberOfElements === 0) {
                document.getElementById("demo8").style.display = "none";
                var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                    "<div>" +
                    "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                    "<span>暂无相关信息！</span>" +
                    "</div>" +
                    "</div>"
                $("#order-payment-list").append(appendhtml);
            } else {
                document.getElementById("demo8").style.display = "block";
                for (var i = 0; i < data.data.numberOfElements; i++) {
                    console.log("aaa" + i);
                    var appendhtml1 = "";
                    var appendhtml2 = "";
                    if (data.data.content[i].videoSeries === null) {
                        appendhtml1 = "<div class=\"course\">\n" +
                            "                                        <div class=\"course-img layui-input-inline\">\n" +
                            "                                            <img src=" + data.data.content[i].video.videoImageUrl + "\n" +
                            "                                                 height=\"150\"\n" +
                            "                                                 width=\"250\"/>\n" +
                            "                                        </div>\n" +
                            "                                        <div class=\"my-course-introduce layui-input-inline\">\n" +
                            "                                            <div class=\"layui-card-header\">\n" +
                            "                                                " + data.data.content[i].video.videoName + "\n" +
                            "                                            </div>\n" +
                            "                                            <div class=\"layui-card-body\">\n" +
                            "                                                <span style=\"font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                分类：" + data.data.content[i].video.videoClassification + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                二级分类：" + data.data.content[i].video.classificationLittle + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: green; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                积分：" + data.data.content[i].video.videoIntegral + "\n" +
                            "                                            </span>\n" +
                            "                                            </div>\n" +
                            "                                            <div class=\"layui-card-body\">\n" +
                            "                                                <div class=\"layui-input-inline\">\n" +
                            "                                            <span style=\"font-size: 10px; color: #999;\">下单日期：" + data.data.content[i].orderDate + "</span>\n" +
                            "                                                    <span style=\"margin-left: 50px\">订单类型：<span\n" +
                            "                                                            style=\"color: red\">视频</span></span>\n";
                    } else {
                        appendhtml1 = "<div class=\"course\">\n" +
                            "                                        <div class=\"course-img layui-input-inline\">\n" +
                            "                                            <img src=" + data.data.content[i].videoSeries.seriesImageUrl + "\n" +
                            "                                                 height=\"150\"\n" +
                            "                                                 width=\"250\"/>\n" +
                            "                                        </div>\n" +
                            "                                        <div class=\"my-course-introduce layui-input-inline\">\n" +
                            "                                            <div class=\"layui-card-header\">\n" +
                            "                                                " + data.data.content[i].videoSeries.seriesName + "\n" +
                            "                                            </div>\n" +
                            "                                            <div class=\"layui-card-body\">\n" +
                            "                                            <span style=\"font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                总集数：" + data.data.content[i].videoSeries.seriesNumber + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                分类：" + data.data.content[i].videoSeries.seriesClassification + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                二级分类：" + data.data.content[i].videoSeries.classificationLittle + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: green; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                积分：" + data.data.content[i].videoSeries.seriesIntegral + "\n" +
                            "                                            </span>\n" +
                            "                                            </div>\n" +
                            "                                            <div class=\"layui-card-body\">\n" +
                            "                                                <div class=\"layui-input-inline\">\n" +
                            "                                            <span style=\"font-size: 10px; color: #999;\">下单日期：" + data.data.content[i].orderDate + "</span>\n" +
                            "                                                    <span style=\"margin-left: 50px\">订单类型：<span\n" +
                            "                                                            style=\"color: red\">系列</span></span>\n";

                    }
                    appendhtml2 = "                                                    <span style=\"margin-left: 100px\">状态：<span\n" +
                        "                                                            style=\"color: green; \">已支付</span></span>\n" +
                        "                                                </div>\n" +
                        "                                            </div>\n" +
                        "                                        </div>\n" +
                        "                                    </div>";
                    $("#order-payment-list").append(appendhtml1 + appendhtml2);
                }
            }
        }
    });
}

function showLoseEfficacOrder(pageNo, pageSize, userId) {
    var formData = new FormData();
    formData.append("userId", userId);
    formData.append("limit", pageSize);
    formData.append("page", pageNo);
    $.ajax({
        url: "/orderManage/getLoseEfficacyList",
        type: "post",
        dataType: "json",
        async: false,
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            $("#order-lose-efficacy-list").empty();
            if (data.data.numberOfElements === 0) {
                document.getElementById("demo8").style.display = "none";
                var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                    "<div>" +
                    "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                    "<span>暂无相关信息！</span>" +
                    "</div>" +
                    "</div>"
                $("#order-lose-efficacy-list").append(appendhtml);
            } else {
                document.getElementById("demo8").style.display = "block";
                for (var i = 0; i < data.data.numberOfElements; i++) {
                    var appendhtml1 = "";
                    var appendhtml2 = "";
                    if (data.data.content[i].videoSeries === null) {
                        appendhtml1 = "<div class=\"course\">\n" +
                            "                                        <div class=\"course-img layui-input-inline\">\n" +
                            "                                            <img src=" + data.data.content[i].video.videoImageUrl + "\n" +
                            "                                                 height=\"150\"\n" +
                            "                                                 width=\"250\"/>\n" +
                            "                                        </div>\n" +
                            "                                        <div class=\"my-course-introduce layui-input-inline\">\n" +
                            "                                            <div class=\"layui-card-header\">\n" +
                            "                                                " + data.data.content[i].video.videoName + "\n" +
                            "                                            </div>\n" +
                            "                                            <div class=\"layui-card-body\">\n" +
                            "                                                <span style=\"font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                分类：" + data.data.content[i].video.videoClassification + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                二级分类：" + data.data.content[i].video.classificationLittle + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: green; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                积分：" + data.data.content[i].video.videoIntegral + "\n" +
                            "                                            </span>\n" +
                            "                                            </div>\n" +
                            "                                            <div class=\"layui-card-body\">\n" +
                            "                                                <div class=\"layui-input-inline\">\n" +
                            "                                            <span style=\"font-size: 10px; color: #999;\">下单日期：" + data.data.content[i].orderDate + "</span>\n" +
                            "                                                    <span style=\"margin-left: 50px\">订单类型：<span\n" +
                            "                                                            style=\"color: red\">视频</span></span>\n";
                    } else {
                        appendhtml1 = "<div class=\"course\">\n" +
                            "                                        <div class=\"course-img layui-input-inline\">\n" +
                            "                                            <img src=" + data.data.content[i].videoSeries.seriesImageUrl + "\n" +
                            "                                                 height=\"150\"\n" +
                            "                                                 width=\"250\"/>\n" +
                            "                                        </div>\n" +
                            "                                        <div class=\"my-course-introduce layui-input-inline\">\n" +
                            "                                            <div class=\"layui-card-header\">\n" +
                            "                                                " + data.data.content[i].videoSeries.seriesName + "\n" +
                            "                                            </div>\n" +
                            "                                            <div class=\"layui-card-body\">\n" +
                            "                                            <span style=\"font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                总集数：" + data.data.content[i].videoSeries.seriesNumber + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                分类：" + data.data.content[i].videoSeries.seriesClassification + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: #23b8ff; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                二级分类：" + data.data.content[i].videoSeries.classificationLittle + "\n" +
                            "                                            </span>\n" +
                            "                                                <span style=\"margin-left: 20px; font-size: 12px; color: green; border:  1px solid #23b8ff; padding: 5px; background-color: white\">\n" +
                            "                                                积分：" + data.data.content[i].videoSeries.seriesIntegral + "\n" +
                            "                                            </span>\n" +
                            "                                            </div>\n" +
                            "                                            <div class=\"layui-card-body\">\n" +
                            "                                                <div class=\"layui-input-inline\">\n" +
                            "                                            <span style=\"font-size: 10px; color: #999;\">下单日期：" + data.data.content[i].orderDate + "</span>\n" +
                            "                                                    <span style=\"margin-left: 50px\">订单类型：<span\n" +
                            "                                                            style=\"color: red\">系列</span></span>\n";

                    }
                    appendhtml2 = "                                                    <span style=\"margin-left: 100px\">状态：<span\n" +
                        "                                                            style=\"color: green; \">已失效</span></span>\n" +
                        "                                                </div>\n" +
                        "                                                <div class=\"layui-input-inline\">\n" +
                        "                                                    <button type=\"button\"\n" +
                        "                                                            class=\"layui-btn layui-btn-sm layui-btn-primary  layui-btn-radius\"\n" +
                        "                                                            style=\"margin-left: 20px\" onclick='deleteOrder(" + data.data.content[i].id + ")'>删除订单\n" +
                        "                                                    </button>\n" +
                        "                                                </div>\n" +
                        "                                            </div>\n" +
                        "                                        </div>\n" +
                        "                                    </div>";
                    $("#order-lose-efficacy-list").append(appendhtml1 + appendhtml2);
                }
            }
        }
    });
}

function showCollectVideoList(pageNo, pageSize, userId, bookmarkName) {
    var formData = new FormData();
    formData.append("userId", userId);
    formData.append("bookmarkName", bookmarkName);
    formData.append("limit", pageSize);
    formData.append("page", pageNo);
    $.ajax({
        url: "/bookmarkManage/getVideoBookmarks",
        type: "post",
        dataType: "json",
        async: false,
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            $("#book-mark-video").empty();
            $("#book-mark-video").append("<h2>“" + bookmarkName + "”收藏夹</h2><br><br>");
            if (data.data.numberOfElements === 0) {
                document.getElementById("demo9").style.display = "none";
                var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                    "<div>" +
                    "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                    "<span>暂无相关信息！</span>" +
                    "</div>" +
                    "</div>"
                $("#book-mark-video").append(appendhtml);
            } else {
                document.getElementById("demo9").style.display = "block";
                for (var i = 0; i < data.data.numberOfElements; i++) {
                    var appendhtml = "<a href=\"/userUrl/playVideo?id=" + data.data.content[i].video.id + "\"><img src=\"../images/collectList.png\" width=\"15\" height=\"15\"/><span style=\"margin-left: 10px\">" + data.data.content[i].video.videoName + "</span></a>" +
                        "<div class=\"layui-btn-group\" style=\"float: right\">\n" +
                        "                                                    <button type=\"button\"\n" +
                        "                                                            class=\"layui-btn layui-btn-primary layui-btn-sm\"><i\n" +
                        "                                                            class=\"layui-icon\"  onclick='deleteBookmakById(\"" + data.data.content[i].id + "\")'></i></button>\n" +
                        "                                                </div>\n" +
                        "                                                <div style=\"clear: both\"></div>" +
                        "<hr>";
                    $("#book-mark-video").append(appendhtml);
                }
            }
        }
    });
}

function showCollectQuestionList(pageNo, pageSize, userId, bookmarkName) {
    var formData = new FormData();
    formData.append("userId", userId);
    formData.append("bookmarkName", bookmarkName);
    formData.append("limit", pageSize);
    formData.append("page", pageNo);
    $.ajax({
        url: "/bookmarkManage/getQuestionBookmarks",
        type: "post",
        dataType: "json",
        async: false,
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            $("#book-mark-question").empty();
            $("#book-mark-question").append("<h2>“" + bookmarkName + "”收藏夹</h2><br><br>");
            if (data.data.numberOfElements === 0) {
                document.getElementById("demo9").style.display = "none";
                var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                    "<div>" +
                    "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                    "<span>暂无相关信息！</span>" +
                    "</div>" +
                    "</div>"
                $("#book-mark-question").append(appendhtml);
            } else {
                document.getElementById("demo9").style.display = "block";
                for (var i = 0; i < data.data.numberOfElements; i++) {
                    var appendhtml = "<a href=\"/userUrl/question?id=" + data.data.content[i].question.id + "\"><img src=\"../images/collectList.png\" width=\"15\" height=\"15\"/><span style=\"margin-left: 10px\">" + data.data.content[i].question.questionName + "</span></a>" +
                        "<div class=\"layui-btn-group\" style=\"float: right\">\n" +
                        "                                                    <button type=\"button\"\n" +
                        "                                                            class=\"layui-btn layui-btn-primary layui-btn-sm\"><i\n" +
                        "                                                            class=\"layui-icon\" onclick='deleteBookmakById(\"" + data.data.content[i].id + "\")'></i></button>\n" +
                        "                                                </div>\n" +
                        "                                                <div style=\"clear: both\"></div>" +
                        "<hr>";
                    $("#book-mark-question").append(appendhtml);
                }
            }
        }
    });
}

