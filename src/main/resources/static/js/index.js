layui.use(['carousel', 'form', 'flow'], function () {
    var carousel = layui.carousel
        , form = layui.form;

    //图片轮播
    carousel.render({
        elem: '#test10'
        , width: '80%'
        , height: '300px'
        , interval: 5000
    });

    var $ = layui.$, active = {
        set: function (othis) {
            var THIS = 'layui-bg-normal'
                , key = othis.data('key')
                , options = {};

            othis.css('background-color', '#5FB878').siblings().removeAttr('style');
            options[key] = othis.data('value');
            ins3.reload(options);
        }
    };

    //监听开关
    form.on('switch(autoplay)', function () {
        ins3.reload({
            autoplay: this.checked
        });
    });

    $('.demoSet').on('keyup', function () {
        var value = this.value
            , options = {};
        if (!/^\d+$/.test(value)) return;

        options[this.name] = value;
        ins3.reload(options);
    });

    //其它示例
    $('.demoTest .layui-btn').on('click', function () {
        var othis = $(this), type = othis.data('type');
        active[type] ? active[type].call(this, othis) : '';
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
                    lis.push('<div class="layui-col-md6" style="width: 300px; padding: 5px"> ' +
                        '<div class="layui-card"> ' +
                        '<a href=""><img src="https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBnAoWaErmJAIM4Caqr18HXAuLMUkNUNBh5aXXcu5M0mc3ia80DejSwSbZTA5Lib14vk/356" width="290"></a> ' +
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
    //编程语言-java
    flow.load({
        elem: '#LAY_demo1_2' //流加载容器
        ,done: function(page, next){ //执行下一页的回调
            //模拟数据插入
            setTimeout(function(){
                var lis = [];
                for(var i = 0; i < 8; i++){
                    lis.push('<div class="layui-col-md6" style="width: 300px; padding: 5px"> ' +
                        '<div class="layui-card"> ' +
                        '<a href=""><img src="https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLAbmOdIJ1HHhFdK32Yy7hJgNyMm7PWs8ZSaxJPia0j2FoNSice6qXfdSPS5UkvgRx8hg/356" width="290"></a> ' +
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
    //编程语言-C++
    flow.load({
        elem: '#LAY_demo1_3' //流加载容器
        ,done: function(page, next){ //执行下一页的回调
            //模拟数据插入
            setTimeout(function(){
                var lis = [];
                for(var i = 0; i < 8; i++){
                    lis.push('<div class="layui-col-md6" style="width: 300px; padding: 5px"> ' +
                        '<div class="layui-card"> ' +
                        '<a href=""><img src="https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLAbmOdIJ1HHhFdK32Yy7hJgNyMm7PWs8ZSaxJPia0j2FoNSice6qXfdSPS5UkvgRx8hg/356" width="290"></a> ' +
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
    //编程语言-Python
    flow.load({
        elem: '#LAY_demo1_4' //流加载容器
        ,done: function(page, next){ //执行下一页的回调
            //模拟数据插入
            setTimeout(function(){
                var lis = [];
                for(var i = 0; i < 8; i++){
                    lis.push('<div class="layui-col-md6" style="width: 300px; padding: 5px"> ' +
                        '<div class="layui-card"> ' +
                        '<a href=""><img src="https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLAjuJdictnIwVmC0KMia4sfNvnZ9OXkSzpMU4Ag4ZsAI66cicoSoLLhcKCeuIyHh3d5ico/356" width="290"></a> ' +
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
    //编程语言-C
    flow.load({
        elem: '#LAY_demo1_5' //流加载容器
        ,done: function(page, next){ //执行下一页的回调
            //模拟数据插入
            setTimeout(function(){
                var lis = [];
                for(var i = 0; i < 8; i++){
                    lis.push('<div class="layui-col-md6" style="width: 300px; padding: 5px"> ' +
                        '<div class="layui-card"> ' +
                        '<a href=""><img src="https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBnAoWaErmJAIM4Caqr18HXAuLMUkNUNBh5aXXcu5M0mc3ia80DejSwSbZTA5Lib14vk/356" width="290"></a> ' +
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