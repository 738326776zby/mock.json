"use strict";
const faker = require("faker");
const _ = require("lodash");
console.log(faker);
faker.locale = "zh_CN";
const conf = {
  'getSave':getSave
}
console.log(faker);

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