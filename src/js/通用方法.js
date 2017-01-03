/**
 * 会创建一个全局变量: $通用 
 * @module 通用函数模块 
 */



/**
 * 本模块唯一的全局变量
 * @class $通用
 * @static 
 */
var $通用={};


(function(){    /*立即调用函数*/

/**
 * 无须参数
 * @method $获取视口宽度 
 * @return {Number} 返回视口的宽度
 */
$通用.$获取视口宽度=function (){
        var kuan=window.innerWidtht;
        if(typeof kuan != "number")
        {
            if(document.compactMode=="CSS1Compat")
                kuan=document.documentElement.clientWidth;
            else kuan=document.body.clientWidth;
        }
        return kuan;
}

/**
 * 无须参数
 * @method $获取视口高度
 * @return {Number} 返回视口的高度
 */
$通用.$获取视口高度=function (){
        var gao=window.innerHeight;
        if(typeof gao != "number")
        {
            if(document.compactMode=="CSS1Compat")
                gao=document.documentElement.clientHeight;
            else gao=document.body.clientHeight;
        }
        return gao;
}

/**
 * 仅支持在冒泡阶段添加，可以兼容旧版IE
 * @method $绑定事件
 * @param {Object|String} 需要绑定事件的元素或者id
 * @param {String}        事件名称(不带on)
 * @param {Function}      触发是需要调用的处理函数(在处理函数中须自行处理旧版ie全局event对象的情况)
 * @return {void}         无返回值 
 */
$通用.$绑定事件=function ( $元素或id ,$事件名称, $处理函数 ){

    if (typeof $元素或id == "string")
        $元素或id=document.getElementById($元素或id);

    if($元素或id.addEventListener)
        $元素或id.addEventListener( $事件名称,$处理函数, false);
    else {
        $事件名称='on'+$事件名称;
        $元素或id.attachEvent( $事件名称,$处理函数 );
    }
}


/**
 * 可以兼容旧版IE
 * @method $获取事件目标
 * @param {Object}  event对象
 * @return {Object} 事件目标
 */
$通用.$获取事件目标=function(event){
    return (event.target || event.srcElement);
}

/**
 * 可以兼容旧版IE
 * @method $取消事件默认行为
 * @param {Object}  event对象
 * @return {void}   无返回值
 */
$通用.$取消事件默认行为=function(event){
    if(event.preventDefault)event.preventDefault();
    else event.returnValue = false;
}

}());
