import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//什么是jsx,有什么优点，特点
//三大特点 ：是一种语法，描述页面结构；会变成一个对象；
//优点：自动计算，自动拼接字符串，可使用变量，页面结构化；
//注意事项：
//保留关键字要规避:class改写成className
//要写成对象的形式：行内样式要与成对象的形式
//使用data-value写自定义属性：
//使用循环的时候，输出单个模板即可，类似vue的v-for;要加key值，提高查询效率；


let a="hello";
let b="world"
var arr=[100,200]

// var lists=<li>10</li>;  //写一个可以
//var lists=<li>10</li><li>20</li>;  //写多个报错
var lists=arr.map((value,index)=>{
    return <li key={index}>{value}</li>
})

var lists3=[<li key="1">100</li>,<li key="2">101</li>]

class App extends Component {
  render() {
    return (
      <div className="m40">
        <div data-value="1000" data-value2={a}>{2+3}</div>
          <div>{a+"  "+b}</div>
         <div>{a} <span style={{color:"red",fontSize:"30px"}}>{b}</span></div>
          <h2>循环写法一</h2>
          <ul>
              {lists}
          </ul>
          <h2>循环写法二</h2>
          <ul>
              {
                  arr.map((value,index)=>{
                      return <li key={index}>{value}</li>
                  })
              }
          </ul>
          <h2>循环写法三</h2>
          <ul>
              {lists3}
          </ul>
      </div>
    );
  }
}

export default App;
