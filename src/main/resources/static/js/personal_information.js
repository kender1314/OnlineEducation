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


//触发事件
    var active0 = {
        offset: function (othis) {
            var type = othis.data('type');

            layer.open({
                type: 1
                ,
                offset: ['200px', '700px'] //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
                ,
                title: '积分充值'
                ,
                id: 'recharge' + type //防止重复弹出
                ,
                content: '<img src="../images/pay.jpg" width="200px"/>'
            });
        }
    };

    $('#recharge').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active0[method] ? active0[method].call(this, othis) : '';
    });

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
                id: 'edit-phone' + type //防止重复弹出
                ,
                content: '   <div class="layui-inline" style="margin-top: 20px; margin-right: 40px">\n' +
                    '       <label class="layui-form-label" style="font-size: 13px">电话</label>\n' +
                    '       <div class="layui-input-inline">\n' +
                    '        <input type="tel" name="phone" name="phone" id="phone" lay-verify="required|phone" autocomplete="off" class="layui-input"' +
                    'style="width: 200px; height: 30px; margin-top: 5px">' +
                    '       </div>\n' +
                    '   </div>'
                ,
                btn: ['保存', '取消']
                , btn1: function (index, layero) {
                    var param = document.getElementById("phone").value;
                    updateUser("phone", param, index);
                }
            });
        }
    };

    $('#edit-phone').on('click', function () {
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
                content: '   <div class="layui-inline" style="margin-top: 20px; margin-right: 40px">\n'
                    + '       <label class="layui-form-label" style="font-size: 13px">专业兴趣</label>\n'
                    + '       <div class="layui-input-inline">\n'
                    + '       <select name="major" id="major"\n'
                    + '             style="width: 200px; height: 30px; margin-top: 5px">\n'
                    + '             <option value="编程语言">编程语言</option>\n'
                    + '             <option value="云计算大数据">云计算大数据</option>\n'
                    + '             <option value="计算机基础">计算机基础</option>\n'
                    + '             <option value="移动开发">移动开发</option>\n'
                    + '             <option value="前沿技术">前沿技术</option>\n'
                    + '          </select>\n'
                    + '       </div>\n'
                    + '   </div>'
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
                area: ['600px', '270px'],
                content: '  <div style="margin-top: 20px; margin-right: 40px ">\n' +
                    '    <label class="layui-form-label">个人简介</label>\n' +
                    '    <div style="margin-left: 35px; width: 500px; ">\n' +
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
                    setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                        window.location.reload();//页面刷新
                    }, 1000);
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
                    + '      <input type="hidden" min="0" id="questionIntegral" value="0" placeholder="请输入悬赏积分" autocomplete="off" class="layui-input" '
                    + 'style="width: 150px; height: 30px; margin-top: 5px">\n'
                    + '<table>'
                    + '<tr>'
                    + '<td colspan="2">'
                    + '<div class="layui-form-item" style="margin-top: 20px">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">问题题目</label>\n'
                    + '    <div class="layui-input-block" style="margin-left: 110px; width: 410px; ">\n'
                    + '      <textarea placeholder="请输入问题题目" name="questionName" id="questionName" class="layui-textarea"></textarea>\n'
                    + '      <span style="font-size: 12px" id="question-name-tips"></span>\n'
                    + '     </div>\n'
                    + '  </div>'
                    + '</td>'
                    + '</tr>'
                    + '<tr>'
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
                    + '      <span style="font-size: 12px" id="question-content-tips"></span>\n'
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
                    var questionDate = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate();
                    var questionIsSolve = 0;
                    var isDelete = 0;
                    if (questionName === "") {
                        document.getElementById("question-name-tips").innerHTML = "<font color='red'>请输入问题名！</font>";
                    } else if (questionContent === "") {
                        document.getElementById("question-name-tips").innerHTML = "";
                        document.getElementById("question-content-tips").innerHTML = "<font color='red'>请输入问题内容！</font>";
                    } else {
                        document.getElementById("question-name-tips").innerHTML = "";
                        document.getElementById("question-content-tips").innerHTML = "";
                        formData.append("userId", userId);
                        formData.append("questionName", questionName);
                        formData.append("questionIntegral", questionIntegral);
                        formData.append("classification", classification);
                        formData.append("questionContent", questionContent);
                        formData.append("questionDate", questionDate);
                        formData.append("questionIsSolve", questionIsSolve);
                        formData.append("isDelete", isDelete);
                        formData.append("viewNumber", 0);
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
                                    setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                                        window.location.reload();//页面刷新
                                    }, 1000);
                                } else {
                                    layer.msg("添加失败", {icon: 5});
                                }
                            }
                        });
                    }

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
                    , layout: ['count', 'prev', 'page', 'next']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showSeriesByOrder(obj.curr, obj.limit, userId);
                    }
                });
            }
        });
    });

    /**
     * 获取自己上传的单个视频
     */
    $('#video-card, #show-video').on('click', function () {
        $.ajax({
            url: "/videoManage/getCountVideoByUserId?id=" + userId,
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demoPage'
                    , count: data.data
                    // , layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
                    , limit: 8
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showMyVideo(obj.curr, obj.limit, userId);
                    }
                });
            }
        });
    });

    $('#show-video-series').on('click', function () {
        $.ajax({
            url: "/videoSeriesManage/getCountVideoSeriesByUserId?id=" + userId,
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demoPage1'
                    , count: data.data
                    , layout: ['count', 'prev', 'page', 'next']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showMyVideoSeries(obj.curr, obj.limit, userId);
                    }
                });
            }
        });
    });

    /**
     * 获取自己上传的单个视频
     */
    $('#show-wait-pass-video').on('click', function () {
        $.ajax({
            url: "/videoAuditManage/getCountVideoNoAuditByUserId?userId=" + userId,
            type: "post",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                laypage.render({
                    elem: 'demoPage2'
                    , count: data.data
                    // , layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
                    , limit: 8
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showMyWaitPassVideo(obj.curr, obj.limit, userId);
                    }
                });
            }
        });
    });

    /**
     * 获取所有订单信息
     */
    $('#order-card, #all-order').on('click', function () {
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
                    , layout: ['count', 'prev', 'page', 'next']
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
                    , layout: ['count', 'prev', 'page', 'next']
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
                    , layout: ['count', 'prev', 'page', 'next']
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
                    , layout: ['count', 'prev', 'page', 'next']
                    , limit: 10
                    , jump: function (obj) {
                        //调用加载函数加载数据
                        showLoseEfficacOrder(obj.curr, obj.limit, userId);
                    }
                });
            }
        });
    });
    /**
     * 获取视频收藏列表
     */
    $('#collect-card, #collect-video').on('click', function () {
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
                    , layout: ['count', 'prev', 'page', 'next']
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
                    , layout: ['count', 'prev', 'page', 'next']
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
                    , layout: ['count', 'prev', 'page', 'next']
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
                    , layout: ['count', 'prev', 'page', 'next']
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
                        setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                            window.location.reload();//页面刷新
                        }, 1000);
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
                        setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                            window.location.reload();//页面刷新
                        }, 1000);
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
                        setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                            window.location.reload();//页面刷新
                        }, 1000);
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
                    , layout: ['count', 'prev', 'page', 'next']
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
                            + '      <input type="hidden" min="0" id="questionIntegral" value="' + data.data.questionIntegral + '" placeholder="请输入悬赏积分" autocomplete="off" class="layui-input" '
                            + 'style="width: 150px; height: 30px; margin-top: 5px">\n'
                            + '<table>'
                            + '<tr>'
                            + '<td colspan="2">'
                            + '<div class="layui-form-item" style="margin-top: 20px">\n'
                            + '    <label class="layui-form-label" style="font-size: 13px">问题题目</label>\n'
                            + '    <div class="layui-input-block" style="margin-left: 110px; width: 410px; ">\n'
                            + '      <textarea placeholder="请输入问题题目" name="questionName" id="questionName" class="layui-textarea">' + data.data.questionName + '</textarea>\n'
                            + '      <span style="font-size: 12px" id="question-name-tips"></span>\n'
                            + '    </div>\n'
                            + '  </div>'
                            + '</td>'
                            + '</tr>'
                            + '<tr>'
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
                            + '      <span style="font-size: 12px" id="question-content-tips"></span>\n'
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
                            // var viewNumber = document.getElementById("viewNumber").value;
                            var viewNumber = 0;
                            if (questionName === "") {
                                document.getElementById("question-name-tips").innerHTML = "<font color='red'>请输入问题名！</font>";
                            }else if(questionContent === ""){
                                document.getElementById("question-name-tips").innerHTML = "";
                                document.getElementById("question-content-tips").innerHTML = "<font color='red'>请输入问题名！</font>";
                            }else {
                                document.getElementById("question-name-tips").innerHTML = "";
                                document.getElementById("question-content-tips").innerHTML = "";
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
                                            setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                                                window.location.reload();//页面刷新
                                            }, 1000);
                                        } else {
                                            layer.msg("修改失败", {icon: 5});
                                        }
                                    }
                                });
                            }

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
                        setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                            window.location.reload();//页面刷新
                        }, 1000);
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

    window.showMyVideo = function (pageNo, pageSize, userId) {
        var formData = new FormData();
        formData.append("userId", userId);
        formData.append("limit", pageSize);
        formData.append("page", pageNo);
        $.ajax({
            url: "/videoManage/getVideoByUserId",
            type: "post",
            dataType: "json",
            async: false,
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                $("#my-video").empty();
                if (data.data.numberOfElements === 0) {
                    document.getElementById("demoPage").style.display = "none";
                    var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                        "<div>" +
                        "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                        "<span>暂无相关信息！</span>" +
                        "</div>" +
                        "</div>"
                    $("#my-video").append(appendhtml);
                } else {
                    document.getElementById("demoPage").style.display = "block";
                    for (var i = 0; i < data.data.numberOfElements; i++) {
                        var appendhtml = "<div class=\"layui-inline\" style=\"width: 212px; padding: 5px;\">\n" +
                            "                                <div class=\"layui-card\">\n" +
                            "                                        <a href=\"/userUrl/playVideo?id=" + data.data.content[i].id + "&pageNum=1\">" +
                            "                                        <img src=" + data.data.content[i].videoImageUrl + " width=\"212\" height=\"119\">\n" +
                            "                                            <div style=\"height: 40px\">\n" +
                            "                                                <span style=\"margin-left: 15px; font-size: 12px\">" + data.data.content[i].videoName + "</span>\n" +
                            "                                            </div>\n" +
                            "                                    </a>\n" +
                            "                                    <div class=\"layui-card-body\">\n" +
                            "                                        <div class=\"layui-input-inline\" style=\"float: left\">\n" +
                            "                                            <img src=\"../images/integral.png\" style=\"width: 16px; height: 16px\"/>\n" +
                            "                                            <span style=\"color: red; font-size: 10px\">" + data.data.content[i].videoIntegral + "</span>&nbsp;&nbsp;\n" +
                            "                                            <img src=\"../images/play.png\" style=\"width: 16px; height: 16px\"/>\n" +
                            "                                            <span style=\"font-size: 10px; color:#999;\">" + data.data.content[i].playbackVolume + "</span>\n" +
                            "                                        </div>\n" +
                            "                                        <div class=\"layui-input-inline\" style=\"float: right\">\n" +
                            "                                            <span style=\"font-size: 10px; color:#999;\">" + data.data.content[i].videoDate + "</span>\n" +
                            "                                        </div>\n" +
                            "                                        <div style=\"clear: both\"></div>\n" +
                            "                                        <div class=\"layui-btn-group\">\n" +
                            "                                            <button type=\"button\" class=\"layui-btn layui-btn-primary layui-btn-sm\"><i\n" +
                            "                                                    class=\"layui-icon\" onclick='updateVideo(" + data.data.content[i].id + ")'></i></button>\n" +
                            "                                            <button type=\"button\" class=\"layui-btn layui-btn-primary layui-btn-sm\"><i\n" +
                            "                                                    class=\"layui-icon\" onclick='deleteVideoById(" + data.data.content[i].id + ")'></i></button>\n" +
                            "                                        </div>\n" +
                            "                                    </div>\n" +
                            "                                </div>\n" +
                            "                            </div>";
                        $("#my-video").append(appendhtml);
                    }
                }

            }
        });
    }

    window.showMyVideoSeries = function (pageNo, pageSize, userId) {
        var formData = new FormData();
        formData.append("userId", userId);
        formData.append("limit", pageSize);
        formData.append("page", pageNo);
        $.ajax({
            url: "/videoSeriesManage/getVideoSeriesByUserId",
            type: "post",
            dataType: "json",
            async: false,
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                $("#my-video-series").empty();
                if (data.data.numberOfElements === 0) {
                    document.getElementById("demoPage1").style.display = "none";
                    var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                        "<div>" +
                        "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                        "<span>暂无相关信息！</span>" +
                        "</div>" +
                        "</div>"
                    $("#my-video-series").append(appendhtml);
                } else {
                    document.getElementById("demoPage1").style.display = "block";
                    for (var i = 0; i < data.data.numberOfElements; i++) {
                        var appendhtml = "<div class=\"layui-collapse\" lay-accordion=\"\">\n" +
                            "                            <div class=\"layui-colla-item\">\n" +
                            "                                <h2 class=\"layui-colla-title\">\n" +
                            "                                    <span>" + data.data.content[i].seriesName + "</span>\n" +
                            "                                <div class=\"layui-btn-group\" style=\"float: right\">\n" +
                            "                                    <button type=\"button\" class=\"layui-btn layui-btn-primary layui-btn-sm\" onclick='getVideoSeriesById(" + data.data.content[i].id + ")'>详情</button>\n" +
                            "                                    <button type=\"button\" class=\"layui-btn layui-btn-primary layui-btn-sm\" onclick='deleteVideoSeriesById(" + data.data.content[i].id + ")'><i class=\"layui-icon\"></i></button>\n" +
                            "                                </div>\n" +
                            "                                <div style=\"clear: both\"></div>\n" +
                            "                            </h2>\n" +
                            "                            </div>\n" +
                            "                        </div>";
                        $("#my-video-series").append(appendhtml);
                    }
                }

            }
        });
    }

    window.showMyWaitPassVideo = function (pageNo, pageSize, userId) {
        var formData = new FormData();
        formData.append("userId", userId);
        formData.append("limit", pageSize);
        formData.append("page", pageNo);
        $.ajax({
            url: "/videoAuditManage/getVideoNoAuditByUserId",
            type: "post",
            dataType: "json",
            async: false,
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                $("#my-wait-pass-video").empty();
                if (data.data.numberOfElements === 0) {
                    document.getElementById("demoPage2").style.display = "none";
                    var appendhtml = "<div style=\" text-align: center; background-color: white; height: 400px; width: 80%; margin-left: 10%; padding-top: 200px\">" +
                        "<div>" +
                        "<img src=\"../images/failure.png\" style=\"width: 100px; height: 100px; \"/>" +
                        "<span>暂无相关信息！</span>" +
                        "</div>" +
                        "</div>"
                    $("#my-wait-pass-video").append(appendhtml);
                } else {
                    document.getElementById("demoPage").style.display = "block";
                    for (var i = 0; i < data.data.numberOfElements; i++) {
                        var appendhtml = "<div class=\"layui-inline\" style=\"width: 212px; padding: 5px;\">\n" +
                            "                                <div class=\"layui-card\">\n" +
                            "                                        <a href=\"/userUrl/playVideo?id=" + data.data.content[i].id + "&pageNum=1\">" +
                            "                                        <img src=" + data.data.content[i].videoImageUrl + " width=\"212\" height=\"119\">\n" +
                            "                                            <div style=\"height: 40px\">\n" +
                            "                                                <span style=\"margin-left: 15px; font-size: 12px\">" + data.data.content[i].videoName + "</span>\n" +
                            "                                            </div>\n" +
                            "                                    </a>\n" +
                            "                                    <div class=\"layui-card-body\">\n" +
                            "                                        <div class=\"layui-input-inline\" style=\"float: left\">\n" +
                            "                                            <img src=\"../images/integral.png\" style=\"width: 16px; height: 16px\"/>\n" +
                            "                                            <span style=\"color: red; font-size: 10px\">" + data.data.content[i].videoIntegral + "</span>&nbsp;&nbsp;\n" +
                            "                                            <img src=\"../images/play.png\" style=\"width: 16px; height: 16px\"/>\n" +
                            "                                            <span style=\"font-size: 10px; color:#999;\">" + data.data.content[i].playbackVolume + "</span>\n" +
                            "                                        </div>\n" +
                            "                                        <div class=\"layui-input-inline\" style=\"float: right\">\n" +
                            "                                            <span style=\"font-size: 10px; color:#999;\">" + data.data.content[i].videoDate + "</span>\n" +
                            "                                        </div>\n" +
                            "                                        <div style=\"clear: both\"></div>\n" +
                            "                                    </div>\n" +
                            "                                </div>\n" +
                            "                            </div>";
                        $("#my-wait-pass-video").append(appendhtml);
                    }
                }

            }
        });
    }

    window.deleteVideoSeriesById = function (id) {
        layer.confirm('是否删除', function (index) {
            $.ajax({
                url: "/videoSeriesManage/deleteVideoSeriesById?id=" + id,
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
                        setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                            window.location.reload();//页面刷新
                        }, 1000);
                    } else {
                        layer.msg("删除失败", {icon: 5});
                    }
                }
            });
        });
    }

    window.getVideoSeriesById = function (id) {
        window.location.href = "/userUrl/showSeriesList?id=" + id;
    }

    window.deleteVideoById = function (id) {
        layer.confirm('是否删除', function (index) {
            $.ajax({
                url: "/videoManage/deleteVideoById?id=" + id,
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
                        setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                            window.location.reload();//页面刷新
                        }, 1000);
                    } else {
                        layer.msg("删除失败", {icon: 5});
                    }
                }
            });
        });
    }

    window.updateVideo = function (id) {
        $.ajax({
            url: "/videoManage/getVideoByVideoId?id=" + id,
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
                        area: ['650px', 'auto']
                        ,

                        content: '<div class="row" style="width: 420px;  margin-left:7px; margin-top:10px;">'
                            + '<input type="hidden" id="id" name="id" value="' + data.data.id + '">'
                            + '<input type="hidden" id="videoStatus" name="videoStatus" value="' + data.data.videoStatus + '">'
                            + '<input type="hidden" id="user" name="user" value="' + data.data.user + '">'
                            + '<input type="hidden" id="series" name="series" value="' + data.data.series + '">'
                            + '<input type="hidden" id="videoImage" name="videoImage" value="' + data.data.videoImage + '">'
                            + '<input type="hidden" id="videoImageUrl" name="videoImageUrl" value="' + data.data.videoImageUrl + '">'
                            + '<table>'
                            + '<tr>'
                            + '<td>'
                            + '<div class="layui-form-item" style="margin-top: 20px">\n'
                            + '    <label class="layui-form-label" style="font-size: 13px">视频名</label>\n'
                            + '    <div class="layui-input-block">\n'
                            + '      <input type="tel" name="videoName1" id="videoName1" placeholder="请输入视频名" value="' + data.data.videoName + '" autocomplete="off" class="layui-input" '
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
                            + '        <select name="videoClassification" id="videoClassification" '
                            + 'style="width: 150px; height: 30px; margin-top: 5px" onchange="selectSeries()" lay-verify="required" lay-search="">\n'
                            + '          <option value="' + data.data.videoClassification + '">默认：' + data.data.videoClassification + '</option>\n'
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
                            + '        <select name="classificationLittle" id="classificationLittle" '
                            + 'style="width: 150px; height: 30px; margin-top: 5px" lay-verify="required" lay-search="">\n'
                            + '          <option value="' + data.data.classificationLittle + '">默认：' + data.data.classificationLittle + '</option>\n'
                            + '</select>\n'
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
                            + '    <div style="margin-left: 110px; width: 460px; ">\n'
                            + '      <textarea placeholder="请输入内容" style="width: 460px; height: 200px" name="videoIntroduce" id="videoIntroduce" class="layui-textarea">' + data.data.videoIntroduce + '</textarea>\n'
                            + '    </div>\n'
                            + '  </div>'
                            + '</td>'
                            + '</tr>'
                            + '<tr>'
                            + '<td colspan="2">'
                            + '<div class="layui-form-item">\n'
                            + '    <label class="layui-form-label" style="font-size: 13px">修改图片封面</label>\n'
                            + '     <div class="layui-inline">\n'
                            + '           <input type="file" id="imageFile" class="layui-btn layui-btn-primary layui-btn-sm">\n'
                            + '     </div>\n'
                            + '  </div>'
                            + '</td>'
                            + '</tr>'
                            + '</table>'
                            + '</div>'
                        ,
                        btn: ['保存', '取消'],
                        btn1: function (index, layero) {
                            var formData = new FormData();
                            var id = document.getElementById("id").value;
                            var videoName = document.getElementById("videoName1").value;
                            var videoClassification = document.getElementById("videoClassification").value;
                            var classificationLittle = document.getElementById("classificationLittle").value;
                            var videoIntroduce = document.getElementById("videoIntroduce").value;
                            var logo_file = document.getElementById("imageFile");
                            if (logo_file !== null) {
                                var image = logo_file.files[0];
                                formData.append("image", image);
                            }
                            var videoImage = document.getElementById("videoImage").value;
                            var videoImageUrl = document.getElementById("videoImageUrl").value;
                            formData.append("id", id);
                            formData.append("videoName", videoName);
                            formData.append("videoClassification", videoClassification);
                            formData.append("classificationLittle", classificationLittle);
                            formData.append("videoIntroduce", videoIntroduce);

                            formData.append("coverUrl", data.data.coverUrl);
                            formData.append("videoStatus", data.data.videoStatus);
                            formData.append("videoIntegral", data.data.videoIntegral);
                            formData.append("playbackVolume", data.data.playbackVolume);
                            formData.append("videoDate", data.data.videoDate);
                            formData.append("videoImage", data.data.videoImage);
                            formData.append("videoImageUrl", data.data.videoImageUrl);
                            formData.append("isDelete", data.data.isDelete);
                            formData.append("videoNumber", data.data.videoNumber);
                            $.ajax({
                                url: "/videoManage/updateVideoImage",
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
                                        setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                                            window.location.reload();//页面刷新
                                        }, 1000);
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

    $('#uploadImage1').on('change', function () {
        var filePath = $(this).val(),         //获取到input的value，里面是文件的路径
            fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase();
        // 检查是否是图片
        if (!fileFormat.match(/.png|.jpg|.jpeg/)) {
            layer.msg("上传错误,文件格式必须为：png/jpg/jpeg", {icon: 5});
            document.getElementById('uploadImage1').value = ""
        }
    });

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

    $('#addVideoSeries').on('click', function () {
        var seriesName = document.getElementById("seriesName").value;
        var formData = new FormData();
        var logo_file = document.getElementById("uploadImage1");
        var image = logo_file.files[0];
        var introduction = document.getElementById("seriesIntroduction").value;
        if (image === undefined) {
            document.getElementById("image-tips").innerHTML = "<font color='red'>请上传封面!</font>";
        } else if (seriesName === "") {
            document.getElementById("image-tips").innerHTML = "";
            document.getElementById("seriesName-tips").innerHTML = "<font color='red'>系列名不能为空!</font>";
        } else if (introduction === "") {
            document.getElementById("image-tips").innerHTML = "";
            document.getElementById("seriesName-tips").innerHTML = "";
            document.getElementById("introduce-tips").innerHTML = "<font color='red'>简介不能为空!</font>";
        } else {
            document.getElementById("seriesName-tips").innerHTML = "";
            document.getElementById("image-tips").innerHTML = "";
            document.getElementById("introduce-tips").innerHTML = "";
            var seriesClassification = document.getElementById("seriesClassification1").value;
            var classificationLittle = document.getElementById("classificationLittle1").value;
            var seriesIntegral = document.getElementById("seriesIntegral").value;
            var seriesNumber = document.getElementById("seriesNumber").value;
            // var introduction = document.getElementById("seriesIntroduction").value;
            var myDate = new Date();
            var seriesDate = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate();

            formData.append("userId", userId);
            formData.append("seriesName", seriesName);
            formData.append("seriesNumber", seriesNumber);
            formData.append("introduction", introduction);
            formData.append("seriesIntegral", seriesIntegral);
            formData.append("seriesClassification", seriesClassification);
            formData.append("classificationLittle", classificationLittle);
            // formData.append("seriesImage", seriesImage1);
            // formData.append("seriesImageUrl", seriesImageUrl1);
            formData.append("seriesDate", seriesDate);
            formData.append("isDelete", 0);
            formData.append("image", image);
            $.ajax({
                url: "/videoSeriesManage/insertVideoSeriesAndImage",
                type: "post",
                dataType: "json",
                data: formData,
                contentType: false,
                processData: false,
                success: function (data) {
                    if (data.data === true) {
                        //关闭弹框
                        layer.msg("新建成功", {icon: 6});
                        setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                            window.location.reload();//页面刷新
                        }, 1000);
                    } else {
                        layer.msg("新建失败", {icon: 5});
                    }
                }
            });
        }
    });

    $('#addVideoAndImage').on('click', function () {
        var formData = new FormData();
        var uploadVideo_file = document.getElementById("uploadVideo");
        var uploadVideo = uploadVideo_file.files[0];
        var uploadVideoImage_file = document.getElementById("uploadVideoImage");
        var uploadVideoImage = uploadVideoImage_file.files[0];
        var videoName = document.getElementById("videoName").value;
        var videoClassification = document.getElementById("videoClassification2").value;
        var classificationLittle = document.getElementById("classificationLittle2").value;
        var videoIntegral = document.getElementById("videoIntegral").value;
        var introduction = document.getElementById("introduction").value;
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
            formData.append("uploadVideoImage", uploadVideoImage);
            formData.append("uploadVideo", uploadVideo);
            formData.append("userId", userId);
            formData.append("videoName", videoName);
            formData.append("videoClassification", videoClassification);
            formData.append("classificationLittle", classificationLittle);
            formData.append("videoIntroduce", introduction);
            formData.append("videoStatus", 0);
            formData.append("videoIntegral", videoIntegral);
            formData.append("playbackVolume", 0);
            formData.append("videoDate", videoDate);
            // formData.append("videoImage", 0);
            // formData.append("videoImageUrl", 0);
            // formData.append("coverUrl", 0);
            formData.append("isDelete", 0);
            formData.append("videoNumber", 0);
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
                        layer.msg("添加成功， 等待管理员审核", {icon: 6});
                        setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                            window.location.reload();//页面刷新
                        }, 2000);
                    } else {
                        layer.msg("添加失败", {icon: 5});
                    }
                }
            });
        }
    });

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
                        "                                        <a href=\"/userUrl/playVideo?id=" + data.data.content[i].video.id + "&pageNum=1\">" +
                        "                                           <img src=" + data.data.content[i].video.videoImageUrl + " width=\"212\" height=\"119\">\n" +
                        "                                            <div style=\"height: 40px\">\n" +
                        "                                                <span style=\"margin-left: 15px; font-size: 12px\">" + data.data.content[i].video.videoName + "</span>\n" +
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
                        "                                                    style=\"margin-left: 400px\" onclick='playVideoBySeries(" + data.data.content[i].videoSeries.id + ")'>继续学习\n" +
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

function playVideoBySeries(seriesId) {
    window.location.href = "/userUrl/playSeriesBySeries?seriesId=" + seriesId + "&pageNum=1";
}

/**
 * 删除无效订单
 * @param orderId
 */
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
                    setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                        location.reload();
                    }, 1000);
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
                        appendhtml2 = "                                                    <span style=\"margin-left: 50px\">状态：<span\n" +
                            "                                                            style=\"color: green; \">未支付</span></span>\n" +
                            "                                                </div>\n" +
                            "                                                <div class=\"layui-input-inline\">\n" +
                            "                                                    <button type=\"button\"\n" +
                            "                                                            class=\"layui-btn layui-btn-sm layui-btn-normal  layui-btn-radius\"\n" +
                            "                                                            style=\"margin-left: 10px\" onclick='toPay(" + data.data.content[i].id + ", " + data.data.content[i].isVideo + ")'>立即支付\n" +
                            "                                                    </button>\n" +
                            "                                                    <button type=\"button\"\n" +
                            "                                                            class=\"layui-btn layui-btn-sm layui-btn-danger  layui-btn-radius\"\n" +
                            "                                                            style=\"margin-left: 10px\" onclick='cancelOrder(" + data.data.content[i].id + ")'>取消订单\n" +
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

function toPay(id, isVideo) {
    window.location.href = "/userUrl/toPay?id=" + id + "&isVideo=" + isVideo;
}

function cancelOrder(orderId) {
    layer.confirm('是否取消订单？', function (index) {
        $.ajax({
            url: "/orderManage/cancelOrder?id=" + orderId,
            type: "post",
            dataType: "json",
            async: false,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.data === true) {
                    layer.close(index);
                    layer.msg("取消成功", {icon: 6});
                    setTimeout(function () {  //使用  setTimeout（）方法设百定定时2000毫秒度
                        location.reload();
                    }, 1000);
                } else {
                    layer.msg("取消失败", {icon: 5});
                }
            }
        });
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
                    appendhtml2 = "                                                    <span style=\"margin-left: 50px\">状态：<span\n" +
                        "                                                            style=\"color: green; \">未支付</span></span>\n" +
                        "                                                </div>\n" +
                        "                                                <div class=\"layui-input-inline\">\n" +
                        "                                                    <button type=\"button\"\n" +
                        "                                                            class=\"layui-btn layui-btn-sm layui-btn-normal  layui-btn-radius\"\n" +
                        "                                                            style=\"margin-left: 10px\" onclick='toPay(" + data.data.content[i].id + ", " + data.data.content[i].isVideo + ")'>立即支付\n" +
                        "                                                    </button>\n" +
                        "                                                    <button type=\"button\"\n" +
                        "                                                            class=\"layui-btn layui-btn-sm layui-btn-danger  layui-btn-radius\"\n" +
                        "                                                            style=\"margin-left: 10px\" onclick='cancelOrder(" + data.data.content[i].id + ")'>取消订单\n" +
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
                    var appendhtml = "<a href=\"/userUrl/playVideo?id=" + data.data.content[i].video.id + "&pageNum=1\"><img src=\"../images/collectList.png\" width=\"15\" height=\"15\"/><span style=\"margin-left: 10px\">" + data.data.content[i].video.videoName + "</span></a>" +
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

function selectSeries() {
    var select = document.getElementById("videoClassification");
    var c = select.value;
    var area = document.getElementById("classificationLittle");
    switch (c) {
        case "编程语言":
            area.innerHTML = "" +
                "<option value=\"Java\">Java</option>" +
                "<option value=\"php\">php</option>" +
                "<option value=\"Python\">Python</option>" +
                "<option value=\"C\">C</option>";
            break;
        case "云计算大数据":
            area.innerHTML = "" +
                "<option value=\"Hadoop\">Hadoop</option>" +
                "<option value=\"Spark\">Spark</option>" +
                "<option value=\"Hbase\">Hbase</option>" +
                "<option value=\"阿里云\">阿里云</option>" +
                "<option value=\"Docker\">Docker</option>";
            break;
        case "计算机基础":
            area.innerHTML = "" +
                "<option value=\"计算机网络\">计算机网络</option>" +
                "<option value=\"算法与数据结构\">算法与数据结构</option>";
            break;
        case "移动开发":
            area.innerHTML = "" +
                "<option value=\"Android\">Android</option>" +
                "<option value=\"iOS\">iOS</option>" +
                "<option value=\"React native\">React native</option>";
            break;
        case "前沿技术":
            area.innerHTML = "" +
                "<option value=\"微服务\">微服务</option>" +
                "<option value=\"区块链\">区块链</option>" +
                "<option value=\"机器学习\">机器学习</option>" +
                "<option value=\"深度学习\">深度学习</option>" +
                "<option value=\"计算机视觉\">计算机视觉</option>";
            break;
        default:
            alert("error");
    }
};

function selectSeries1() {
    var select = document.getElementById("seriesClassification1");
    var c = select.value;
    var area = document.getElementById("classificationLittle1");
    switch (c) {
        case "编程语言":
            area.innerHTML = "" +
                "<option value=\"Java\">Java</option>" +
                "<option value=\"php\">php</option>" +
                "<option value=\"Python\">Python</option>" +
                "<option value=\"C\">C</option>";
            break;
        case "云计算大数据":
            area.innerHTML = "" +
                "<option value=\"Hadoop\">Hadoop</option>" +
                "<option value=\"Spark\">Spark</option>" +
                "<option value=\"Hbase\">Hbase</option>" +
                "<option value=\"阿里云\">阿里云</option>" +
                "<option value=\"Docker\">Docker</option>";
            break;
        case "计算机基础":
            area.innerHTML = "" +
                "<option value=\"计算机网络\">计算机网络</option>" +
                "<option value=\"算法与数据结构\">算法与数据结构</option>";
            break;
        case "移动开发":
            area.innerHTML = "" +
                "<option value=\"Android\">Android</option>" +
                "<option value=\"iOS\">iOS</option>" +
                "<option value=\"React native\">React native</option>";
            break;
        case "前沿技术":
            area.innerHTML = "" +
                "<option value=\"微服务\">微服务</option>" +
                "<option value=\"区块链\">区块链</option>" +
                "<option value=\"机器学习\">机器学习</option>" +
                "<option value=\"深度学习\">深度学习</option>" +
                "<option value=\"计算机视觉\">计算机视觉</option>";
            break;
        default:
            alert("error");
    }
};

function selectSeries2() {
    var select = document.getElementById("videoClassification2");
    var c = select.value;
    var area = document.getElementById("classificationLittle2");
    switch (c) {
        case "编程语言":
            area.innerHTML = "" +
                "<option value=\"Java\">Java</option>" +
                "<option value=\"php\">php</option>" +
                "<option value=\"Python\">Python</option>" +
                "<option value=\"C\">C</option>";
            break;
        case "云计算大数据":
            area.innerHTML = "" +
                "<option value=\"Hadoop\">Hadoop</option>" +
                "<option value=\"Spark\">Spark</option>" +
                "<option value=\"Hbase\">Hbase</option>" +
                "<option value=\"阿里云\">阿里云</option>" +
                "<option value=\"Docker\">Docker</option>";
            break;
        case "计算机基础":
            area.innerHTML = "" +
                "<option value=\"计算机网络\">计算机网络</option>" +
                "<option value=\"算法与数据结构\">算法与数据结构</option>";
            break;
        case "移动开发":
            area.innerHTML = "" +
                "<option value=\"Android\">Android</option>" +
                "<option value=\"iOS\">iOS</option>" +
                "<option value=\"React native\">React native</option>";
            break;
        case "前沿技术":
            area.innerHTML = "" +
                "<option value=\"微服务\">微服务</option>" +
                "<option value=\"区块链\">区块链</option>" +
                "<option value=\"机器学习\">机器学习</option>" +
                "<option value=\"深度学习\">深度学习</option>" +
                "<option value=\"计算机视觉\">计算机视觉</option>";
            break;
        default:
            alert("error");
    }
};