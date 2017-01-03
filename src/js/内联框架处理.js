/**
 * 仅有一个全局变量: $内联
 * @module 内联框架处理模块
 */


/**
 * 本模块唯一的全局变量
 * @class $内联
 * @static 
 */
var $内联={};


(function (){
    var sz=[];    //用于记录打开了页面的集合
    var $高=200;  //用于记录外部盒子div的高度。
    var i内联框架盒子=document.getElementById("i内联框架盒子");

    //创建一个空白的内联框架,并添加到集合中    
    var $临时节点=document.createElement("iframe");
    sz.push({"url": "", "fra" : $临时节点});
    i内联框架盒子.appendChild($临时节点);

    var $当前显示索引=0;
    
    $内联.$视口改变=function(newHeight){
        $高=newHeight;
        for(var i=0;i<sz.length;i++){
            sz[i].fra.height=$高+ 'px';
        }
    }

    $内联.$载入=function ($要载入的url){
        //循环查找集合，确定是否已经打开
        for(var i=0;i<sz.length;i++){

            //该url已经打开，则隐藏当前显示的内联框架，显示要打开的那个框架
            if(sz[i].url==$要载入的url) {
		sz[$当前显示索引].fra.style.display="none";
		sz[i].fra.style.display="block";
                $当前显示索引=i;
                break ;
            }

            //该url还没有打开，则创建一个新的内联框架，并打开。
            //不处理隐藏和显示，留着下次执行循环体时处理。
            else if(i==sz.length-1){		
		$临时节点=document.createElement("iframe");
                $临时节点.height=$高+ 'px';
		sz.push({"url": $要载入的url, "fra" : $临时节点});
                $临时节点.src=$要载入的url;
		i内联框架盒子.appendChild($临时节点);		
            }
        }
	
    }

}())