YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "$内联",
        "$通用"
    ],
    "modules": [
        "内联框架处理模块",
        "整页入口模块",
        "通用函数模块"
    ],
    "allModules": [
        {
            "displayName": "内联框架处理模块",
            "name": "内联框架处理模块",
            "description": "仅有一个全局变量: $内联"
        },
        {
            "displayName": "整页入口模块",
            "name": "整页入口模块",
            "description": "没有全局变量\n用于协调各模块"
        },
        {
            "displayName": "通用函数模块",
            "name": "通用函数模块",
            "description": "会创建一个全局变量: $通用"
        }
    ],
    "elements": []
} };
});