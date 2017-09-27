前端mock 几种数据的方法，以vue 为例
一.axios+ faker
1.配置 package.json
      "mock": "json-server mock/db.js --routes mock/routes.json --port 9999"
2.新建 db.js 文件
"use strict";
const faker = require("faker");
const _ = require("lodash");

faker.locale = "zh_CN";
const conf = {
  'getSave':getSave
}


function getSave(){
  return {
    status:0,
    error:0,
    data:{
      banner:_.times(3,function(n){
        return {
          auto_id:"10"+n
        }
      })
    }
  }
}

module.exports = function(){
  debugger;
  let data = {};
  for(let c in conf){
      if(conf.hasOwnProperty(c)){
           data[c] = conf[c]();
      }
  }
  return data;
}
3. 新建routes.json 文件 做路由配置
{
  "/getSave":"/getSave"
}
4.起一个前端服务
npm run dev
5.起后端服务
npm run mock
6.新建 一个空的 static 文件夹
7.通过fis3 起一个前端的服务 把 npm run build 生成后的文件放到 www 文件夾下
二.node server.js
 1.利用 node js 搭建后端的服务
 2.db.json
 3.mock 的数据


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
