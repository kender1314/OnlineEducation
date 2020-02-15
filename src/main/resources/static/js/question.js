layui.use(['laypage', 'layer'], function(){
    var laypage = layui.laypage
        ,layer = layui.layer;

    laypage.render({
        elem: 'demo8'
        ,count: 1000
        ,layout: ['limit', 'prev', 'page', 'next']
    });
});

function answer() {
    var answerContent = document.getElementById("my-answer-content").style.display;
    if(answerContent == "none"){
        document.getElementById("my-answer").style.display = "none";
        document.getElementById("my-answer-content").style.display = "block";
    }else {
        document.getElementById("my-answer").style.display = "block";
        document.getElementById("my-answer-content").style.display = "none";
    }
}