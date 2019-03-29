import React from 'react';
import ReactDOM from 'react-dom';
//同步测试
//ReactDOM.render(<TodoApp />, document.getElementById('root'));
//render函数原理
let ele = <h1>hello world</h1>
console.log(ele);
//最终的React元素是这个样子的。
let eleObj = {
    type:"h1",
    props:{
        className:'red',
        id:1,
        children:["hello",{
            type:"span",
            props:{
                className:'green',
                children:["world"]
            }
        }]
    }
    
}
function render(eleObj,container){
    let {type,props} = eleObj;
    let ele = document.createElement(type);
    for(let attr in props){
        if(attr == 'className'){
            ele.setAttribute('class',props[attr]);
        }
        else if(attr == 'children'){
            props[attr].forEach(element => {
                if(typeof element == 'string'){
                let texNode = document.createTextNode(element);
                ele.appendChild(texNode);
            }
            else{
                render(element,ele);
            }
            });
        }
        else{
            ele.setAttribute(attr,props[attr]);
        }
    };
    container.appendChild(ele);
}

render(eleObj,document.getElementById('root'))
