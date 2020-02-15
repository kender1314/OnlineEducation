layui.use(['layer', 'table', 'flow'], function () { //独立版的layer无需执行这一句
    var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句

    //触发事件
    var active = {
        offset: function (othis) {
            var type = othis.data('type');

            layer.open({
                type: 1
                ,offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
                ,title: '信息修改'
                ,id: 'layerDemo' + type //防止重复弹出
                ,content: '<form class="layui-form my-login-form" action="/graduate/user/login" lay-filter="example" method="post">' +
                    '   <div class="layui-inline" style="margin-top: 20px; margin-right: 40px">\n' +
                    '       <label class="layui-form-label" style="font-size: 13px">用户名</label>\n' +
                    '       <div class="layui-input-inline">\n' +
                    '        <input type="tel" name="phone" lay-verify="required|phone" autocomplete="off" class="layui-input"' +
                    'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                    '       </div>\n' +
                    '   </div>' +
                    '      <button type="submit" class="layui-btn layui-btn-primary layui-btn-sm" ' +
                    'style="margin-left: 70%; margin-top: 50px; margin-bottom: 20px">修改</button>' +
                    '</form>'
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
                ,offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
                ,title: '信息修改'
                ,id: 'mail' + type //防止重复弹出
                ,content: '<form class="layui-form my-login-form" action="/graduate/user/login" lay-filter="example" method="post">' +
                    '   <div class="layui-inline" style="margin-top: 20px; margin-right: 40px">\n' +
                    '       <label class="layui-form-label" style="font-size: 13px">邮件</label>\n' +
                    '       <div class="layui-input-inline">\n' +
                    '        <input type="tel" name="phone" lay-verify="required|phone" autocomplete="off" class="layui-input"' +
                    'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                    '       </div>\n' +
                    '   </div>' +
                    '      <button type="submit" class="layui-btn layui-btn-primary layui-btn-sm" ' +
                    'style="margin-left: 70%; margin-top: 50px; margin-bottom: 20px">修改</button>' +
                    '</form>'
            });
        }
    };

    $('#mail').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active1[method] ? active1[method].call(this, othis) : '';
    });

    var active2 = {
        offset: function (othis) {
            var type = othis.data('type');

            layer.open({
                type: 1
                ,offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
                ,title: '信息修改'
                ,id: 'hobby' + type //防止重复弹出
                ,content: '<form class="layui-form my-login-form" action="/graduate/user/login" lay-filter="example" method="post">' +
                    '   <div class="layui-inline" style="margin-top: 20px; margin-right: 40px">\n' +
                    '       <label class="layui-form-label" style="font-size: 13px">专业兴趣</label>\n' +
                    '       <div class="layui-input-inline">\n' +
                    '        <input type="tel" name="phone" lay-verify="required|phone" autocomplete="off" class="layui-input"' +
                    'style="width: 200px; height: 30px; margin-top: 5px">\n' +
                    '       </div>\n' +
                    '   </div>' +
                    '      <button type="submit" class="layui-btn layui-btn-primary layui-btn-sm" ' +
                    'style="margin-left: 70%; margin-top: 50px; margin-bottom: 20px">修改</button>' +
                    '</form>'
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
                ,offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
                ,title: '信息修改'
                ,id: 'introduce' + type //防止重复弹出
                ,content: '<form class="layui-form my-login-form" action="/graduate/user/login" lay-filter="example" method="post">' +
                    '  <div style="margin-top: 20px; margin-right: 40px ">\n' +
                    '    <label class="layui-form-label">个人简介</label>\n' +
                    '    <div style="margin-left: 35px; width: 300px; ">\n' +
                    '      <textarea placeholder="请输入内容" class="layui-textarea"></textarea>\n' +
                    '    </div>\n' +
                    '  </div>' +
                    '      <button type="submit" class="layui-btn layui-btn-primary layui-btn-sm" ' +
                    'style="margin-left: 70%; margin-top: 50px; margin-bottom: 20px">修改</button>' +
                    '</form>'
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
                ,offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
                ,title: '信息修改'
                ,id: 'password_edit' + type //防止重复弹出
                ,content: '<form class="layui-form my-login-form" action="/graduate/user/login" lay-filter="example" method="post">' +
                    '<div class="layui-form-item" style="margin-top: 20px; margin-right: 40px">\n' +
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
                    '  </div>' +
                    '      <button type="submit" class="layui-btn layui-btn-primary layui-btn-sm" ' +
                    'style="margin-left: 70%; margin-top: 30px; margin-bottom: 20px">修改</button>' +
                    '</form>'
            });
        }
    };

    $('#password_edit').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active4[method] ? active4[method].call(this, othis) : '';
    });

    var table = layui.table;
    table.render({
        elem: '#test'
        ,url:''
        ,cols: [[
            ,{field:'user_name', width:80, title: '课程名'}
            ,{field:'password', width:80, title: '时间'}
            ,{field:'password', width:80, title: '金额'}
        ]]
        ,page: true
    });

    //滚动加载
    var flow = layui.flow;

    //编程语言-不限
    flow.load({
        elem: '#LAY_demo1_1' //流加载容器
        ,done: function(page, next){ //执行下一页的回调
            //模拟数据插入
            setTimeout(function(){
                var lis = [];
                for(var i = 0; i < 8; i++){
                    lis.push('<div class="layui-col-md6" style="width: 200px; padding: 5px; margin-left: 20px"> ' +
                        '<div class="layui-card"> ' +
                        '<a href=""><div class="layui-card-header">Java性能调优全解2.5</div></a> ' +
                        '<div class="layui-card-body"> ' +
                        '<span>8978人已报名</span> ' +
                        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' +
                        '<span>评分：6.81</span><br> ' +
                        '<span style="color: red">￥299.00</span> ' +
                        '</div> ' +
                        '</div> ' +
                        '</div>')
                }
                //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
                //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
                next(lis.join(''), page < 10); //假设总页数为 10
            }, 500);
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
            document.getElementById("my-content-integral").style.display = "none";
            document.getElementById("my-content-video-management").style.display = "none";
            break;
        case 2:
            document.getElementById("my-content-course").style.display = "none";
            document.getElementById("my-content-info").style.display = "block";
            document.getElementById("my-content-order").style.display = "none";
            document.getElementById("my-content-collect").style.display = "none";
            document.getElementById("my-content-integral").style.display = "none";
            document.getElementById("my-content-video-management").style.display = "none";
            break;
        case 3:
            document.getElementById("my-content-course").style.display = "none";
            document.getElementById("my-content-info").style.display = "none";
            document.getElementById("my-content-order").style.display = "block";
            document.getElementById("my-content-collect").style.display = "none";
            document.getElementById("my-content-integral").style.display = "none";
            document.getElementById("my-content-video-management").style.display = "none";
            break;
        case 4:
            document.getElementById("my-content-course").style.display = "none";
            document.getElementById("my-content-info").style.display = "none";
            document.getElementById("my-content-order").style.display = "none";
            document.getElementById("my-content-collect").style.display = "block";
            document.getElementById("my-content-integral").style.display = "none";
            document.getElementById("my-content-video-management").style.display = "none";
            break;
        case 5:
            document.getElementById("my-content-course").style.display = "none";
            document.getElementById("my-content-info").style.display = "none";
            document.getElementById("my-content-order").style.display = "none";
            document.getElementById("my-content-collect").style.display = "none";
            document.getElementById("my-content-integral").style.display = "block";
            document.getElementById("my-content-video-management").style.display = "none";
            break;
        case 6:
            document.getElementById("my-content-course").style.display = "none";
            document.getElementById("my-content-info").style.display = "none";
            document.getElementById("my-content-order").style.display = "none";
            document.getElementById("my-content-collect").style.display = "none";
            document.getElementById("my-content-integral").style.display = "none";
            document.getElementById("my-content-video-management").style.display = "block";
            break;
    }
}