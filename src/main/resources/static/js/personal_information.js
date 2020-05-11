layui.use(['layer', 'table', 'flow', 'tree', 'util', 'upload', 'laypage', 'upload'], function () { //独立版的layer无需执行这一句
    var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
    var laypage = layui.laypage;
    var upload = layui.upload;
    var table = layui.table;
    var tree = layui.tree
        , util = layui.util


        //模拟数据1
        , data1 = [{
            title: 'java'
            , id: 1
            , children: [{
                title: 'Java架构师体系课：跟随千万级项目从0到100全过程高效成长'
                , id: 1001
            }, {
                title: 'Spring Cloud + Vue 前后端分离 开发企业级在线视频课程系统'
                , id: 1002
            }]
        }, {
            title: 'c++'
            , id: 2
            , children: [{
                title: '大学计算机必修课新讲--编译原理+操作系统+图形学'
                , id: 2000
            }, {
                title: '2020 重学C++ 重构你的C++知识体系'
                , id: 2001
            }]
        }, {
            title: 'python'
            , id: 3
            , children: [{
                title: 'Python3入门人工智能 掌握机器学习+深度学习 提升实战能力'
                , id: 3000
            }, {
                title: 'Python Flask快速入门与进阶'
                , id: 3001
            }]
        }]
        , data2 = [{
            title: 'html'
            , id: 1
            , children: [{
                title: 'css自适应布局：css宽度自适应如何实现？'
                , id: 1001
            }, {
                title: '怎么让div的高度自适应屏幕的高度?'
                , id: 1002
            }]
        }, {
            title: 'java'
            , id: 2
            , children: [{
                title: '如何安装jdk？'
                , id: 2000
            }, {
                title: '如何进行前后端分页？'
                , id: 2001
            }]
        }, {
            title: 'python'
            , id: 3
            , children: [{
                title: '如何安装Python3？'
                , id: 3000
            }, {
                title: 'Python有什么作用'
                , id: 3001
            }]
        }];

    //开启节点操作图标
    tree.render({
        elem: '#test9'
        , data: data1
        , edit: ['add', 'update', 'del'] //操作节点的图标
        , click: function (obj) {
            layer.msg(JSON.stringify(obj.data));
        }
    });

    var table = layui.table;

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


    tree.render({
        elem: '#test10'
        , data: data2
        , edit: ['add', 'update', 'del'] //操作节点的图标
        , click: function (obj) {
            layer.msg(JSON.stringify(obj.data));
        }
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
                id: 'layerDemo' + type //防止重复弹出
                ,
                content: '   <div class="layui-inline" style="margin-top: 20px; margin-right: 40px">\n' +
                    '       <label class="layui-form-label" style="font-size: 13px">用户名</label>\n' +
                    '       <div class="layui-input-inline">\n' +
                    '        <input type="tel" name="phone" lay-verify="required|phone" autocomplete="off" class="layui-input"' +
                    'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                    '       </div>\n' +
                    '   </div>'
                ,
                btn: ['保存', '取消']
            });
        }
    };

    $('#userName').on('click', function () {
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
                id: 'mail' + type //防止重复弹出
                ,
                content: '   <div class="layui-inline" style="margin-top: 20px; margin-right: 40px">\n' +
                    '       <label class="layui-form-label" style="font-size: 13px">邮件</label>\n' +
                    '       <div class="layui-input-inline">\n' +
                    '        <input type="tel" name="phone" lay-verify="required|phone" autocomplete="off" class="layui-input"' +
                    'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                    '       </div>\n' +
                    '   </div>'
                ,
                btn: ['保存', '取消']
            });
        }
    };

    $('#mail').on('click', function () {
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
                id: 'hobby' + type //防止重复弹出
                ,
                content: '   <div class="layui-inline" style="margin-top: 20px; margin-right: 40px">\n' +
                    '       <label class="layui-form-label" style="font-size: 13px">专业兴趣</label>\n' +
                    '       <div class="layui-input-inline">\n' +
                    '        <input type="tel" name="phone" lay-verify="required|phone" autocomplete="off" class="layui-input"' +
                    'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                    '       </div>\n' +
                    '   </div>'
                ,
                btn: ['保存', '取消']
            });
        }
    };

    $('#hobby').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active2[method] ? active2[method].call(this, othis) : '';
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
                id: 'introduce' + type //防止重复弹出
                ,
                content: '  <div style="margin-top: 20px; margin-right: 40px ">\n' +
                    '    <label class="layui-form-label">个人简介</label>\n' +
                    '    <div style="margin-left: 35px; width: 300px; ">\n' +
                    '      <textarea placeholder="请输入内容" class="layui-textarea"></textarea>\n' +
                    '    </div>\n' +
                    '  </div>'
                ,
                btn: ['保存', '取消']
            });
        }
    };

    $('#introduce').on('click', function () {
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
                    '      <input type="password" name="password" placeholder="请输入密码" autocomplete="off" class="layui-input" ' +
                    'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                    '    </div>\n' +
                    '  </div>' +
                    '<div class="layui-form-item" style="margin-top: 20px; margin-right: 40px">\n' +
                    '    <label class="layui-form-label" style="font-size: 13px">输入新密码</label>\n' +
                    '    <div class="layui-input-block">\n' +
                    '      <input type="password" name="password" placeholder="请输入密码" autocomplete="off" class="layui-input" ' +
                    'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                    '    </div>\n' +
                    '  </div>' +
                    '<div class="layui-form-item" style="margin-top: 20px; margin-right: 40px">\n' +
                    '    <label class="layui-form-label" style="font-size: 13px">确认新密码</label>\n' +
                    '    <div class="layui-input-block">\n' +
                    '      <input type="password" name="password" placeholder="请输入密码" autocomplete="off" class="layui-input" ' +
                    'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                    '    </div>\n' +
                    '  </div>'
                ,
                btn: ['保存', '取消']
            });
        }
    };

    $('#password_edit').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active4[method] ? active4[method].call(this, othis) : '';
    });

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
                ,
                btn: ['保存', '取消']
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

    //监听行工具事件
    table.on('tool(tables)', function (obj) {
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
                    + '<div class="layui-form-item" style="margin-top: 20px">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">用户名</label>\n'
                    + '    <div class="layui-input-block">\n'
                    + '      <input type="tel" name="userName" id="userName" readonly="readonly" value="' + data.user.userName + '" autocomplete="off" class="layui-input" '
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
                    // + '      <input type="tel" name="videoClassification" id="videoClassification" placeholder="请输入类别" value="' + data.videoClassification + '" autocomplete="off" class="layui-input" '
                    // + 'style="width: 150px; height: 30px; margin-top: 5px">\n'
                    + ' <div class="layui-inline" style="width: 150px; height: 30px; margin-top: 5px">\n'
                    + '      <div class="layui-input-inline">\n'
                    + '        <select name="modules" name="videoClassification" id="videoClassification" '
                    + 'style="width: 150px; height: 30px; margin-top: 5px" onchange="selectSeries()" lay-verify="required" lay-search="">\n'
                    + '          <option value="' + data.videoClassification + '">默认：' + data.videoClassification + '</option>\n'
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
                    + '        <select name="modules" name="classificationLittle" id="classificationLittle" '
                    + 'style="width: 150px; height: 30px; margin-top: 5px" lay-verify="required" lay-search="">\n'
                    + '          <option value="' + data.classificationLittle + '">默认：' + data.classificationLittle + '</option>\n'
                    + '</select>\n'
                    + '      </div>\n'
                    + '    </div>'
                    + '    </div>\n'
                    + '  </div>'
                    + '</td>'
                    + '</tr>'
                    + '<tr>'
                    + '<td>'
                    + '<div class="layui-form-item">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">积分</label>\n'
                    + '    <div class="layui-input-block">\n'
                    + '      <input type="tel" name="videoIntegral" id="videoIntegral" placeholder="请输入积分" value="' + data.videoIntegral + '" autocomplete="off" class="layui-input" '
                    + 'style="width: 150px; height: 30px; margin-top: 5px">\n'
                    + '    </div>\n'
                    + '  </div>'
                    + '</td>'
                    + '</tr>'
                    + '<tr>'
                    + '<td colspan="2">'
                    + '<div class="layui-form-item">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">视频地址</label>\n'
                    + '    <div class="layui-input-block">\n'
                    + '      <input type="tel" name="coverUrl" id="coverUrl" readonly="readonly" value="' + data.coverUrl + '" autocomplete="off" class="layui-input" '
                    + 'style="width: 410px; height: 30px; margin-top: 5px">\n'
                    + '    </div>\n'
                    + '  </div>'
                    + '</td>'
                    + '</tr>'
                    + '<tr>'
                    + '<td>'
                    + '<div class="layui-form-item">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">播放量</label>\n'
                    + '    <div class="layui-input-block">\n'
                    + '      <input type="tel" name="playbackVolume" id="playbackVolume" placeholder="请输入播放量" value="' + data.playbackVolume + '" autocomplete="off" class="layui-input" '
                    + 'style="width: 150px; height: 30px; margin-top: 5px">\n'
                    + '    </div>\n'
                    + '  </div>'
                    + '</td>'
                    + '<td>'
                    + '<div class="layui-form-item">\n'
                    + '    <label class="layui-form-label" style="font-size: 13px">上传日期</label>\n'
                    + '    <div class="layui-input-block">\n'
                    + '        <input type="date" class="layui-input" id="videoDate" name="videoDate" id="test5" value="' + data.videoDate + '" placeholder="yyyy-MM-dd HH:mm:ss"' +
                    'style="width: 150px; height: 30px; margin-top: 5px">'
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
                    + '</table>'
                    + '</div>'
                ,
                btn: ['保存', '取消'],
                btn1: function (index, layero) {
                    var formData = new FormData();
                    var id = document.getElementById("id").value;
                    var videoName = document.getElementById("videoName").value;
                    var videoStatus = document.getElementById("videoStatus").value;
                    var videoClassification = document.getElementById("videoClassification").value;
                    var classificationLittle = document.getElementById("classificationLittle").value;
                    var videoIntegral = document.getElementById("videoIntegral").value;
                    var coverUrl = document.getElementById("coverUrl").value;
                    var playbackVolume = document.getElementById("playbackVolume").value;
                    var videoDate = document.getElementById("videoDate").value;
                    var videoIntroduce = document.getElementById("videoIntroduce").value;
                    formData.append("id", id);
                    formData.append("videoName", videoName);
                    formData.append("videoStatus", videoStatus);
                    formData.append("videoClassification", videoClassification);
                    formData.append("classificationLittle", classificationLittle);
                    formData.append("videoIntegral", videoIntegral);
                    formData.append("coverUrl", coverUrl);
                    formData.append("playbackVolume", playbackVolume);
                    formData.append("videoDate", videoDate);
                    formData.append("videoIntroduce", videoIntroduce);
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
                            } else {
                                layer.msg("更新失败", {icon: 5});
                            }
                        }
                    });

                },
            });
        } else if (obj.event === 'comment') {
            window.location.href = "/url/adminVideoComment?id=" + data.id;
        }
    });
});

function fun(i) {
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

function selectSeries() {
    var select = document.getElementById("videoClassification");
    var c = select.value;
    var area = document.getElementById("classificationLittle");
    switch (c) {
        case "编程语言":
            area.innerHTML = "" +
                "<option value=\"Java\">Java</option>" +
                "<option value=\"C++\">C++</option>" +
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
