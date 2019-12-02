// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// 首先引入对应的方法来创建虚拟DOM

//https://mp.weixin.qq.com/s?__biz=MzIxNjgwMDIzMA==&mid=2247484479&idx=1&sn=2d6461dd9bee8416da5f342064b5e540&chksm=9782cab6a0f543a0d2e54dd316f0921031b1b0add56fc291404a9afd82d0a68c6b8326ce7f8b&mpshare=1&srcid=&sharer_sharetime=1574734530770&sharer_shareid=b38edb4971cdf4d1683f7c798eb723fd&from=timeline&scene=2&subscene=2&clicktime=1575004312&enterid=1575004312&pass_ticket=%2FlOnYaEN2bjQkSD0KgrxPNSAeY1VrwA%2BGC46pCuM1IHNPuH0NSpy%2FI%2FIRvf9d5zC#rd
import { createElement, render, renderDom } from "./element";
// +++ 引入diff和patch方法
import diff from "./diff";
import patch from "./patch";
let virtualDom = createElement("ul", { class: "list" }, [
  createElement("li", { class: "item" }, ["周杰伦"]),
  createElement("li", { class: "item" }, ["林俊杰"]),
  createElement("li", { class: "item" }, ["王力宏"])
]);

console.log(virtualDom);

// +++
let el = render(virtualDom); // 渲染虚拟DOM得到真实的DOM结构
console.log(el);
// 直接将DOM添加到页面内
renderDom(el, document.getElementById("root"));
// +++
// 创建另一个新的虚拟DOM
let virtualDom2 = createElement("ul", { class: "list-group" }, [
  createElement("li", { class: "item active" }, ["七里香"]),
  createElement("li", { class: "item" }, ["一千年以后"]),
  createElement("li", { class: "item none" }, ["需要人陪"])
]);
// diff一下两个不同的虚拟DOM
let patches = diff(virtualDom, virtualDom2);
console.log(patches);
// 将变化打补丁，更新到el
patch(el, patches);
