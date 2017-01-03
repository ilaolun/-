/**
 * 没有全局变量
 * 用于协调各模块 
 * @module 整页入口模块 
 */


//打开后初始化页面，处理各div大小
window.onload=function(){
    var i标签栏       = document.getElementById("i标签栏")      ;
    var i内联框架盒子 = document.getElementById("i内联框架盒子");

    var i视口大小改变=function(){
        var i高=$通用.$获取视口高度();

        var i标签栏_高=30;
        var i内联框架盒子_高= i高 - i标签栏_高 ;
        i标签栏.style["height"] = i标签栏_高 + 'px' ;
        i内联框架盒子.style["height"] = i内联框架盒子_高 + 'px' ;
        
        $内联.$视口改变(i内联框架盒子_高);
    }

    $通用.$绑定事件(window, 'resize', i视口大小改变);
    i视口大小改变();//马上调用适应视口
    $内联.$载入("http://baidu.com");
}
