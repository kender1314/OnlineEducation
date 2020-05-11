layui.use(['laypage', 'layer'], function(){
    var laypage = layui.laypage
        ,layer = layui.layer;

    laypage.render({
        elem: 'demo8'
        ,count: 1000
        ,layout: ['limit', 'prev', 'page', 'next']
    });
    laypage.render({
        elem: 'demo9'
        ,count: 1000
        ,layout: ['limit', 'prev', 'page', 'next']
    });
});
