import{j as e,k as n,h as c,p as h,m as d,n as p}from"./index-Fcl6wld0.js";const j=()=>{const t=[{image:c,h3:"Blaze Tech",description:"A landing page for a renowned tech company to show to its users the context of the company...",href:"blaze",to:"/first",tools:["#html","#bootstrap","#js"]},{image:h,h3:"Todo App",description:"An advanced todo web app with dark/light mode switch and also features tasks history",href:"todo",to:"/second",tools:["#react","#routing","#css"]},{image:d,h3:"BBNK Bank",description:"An webpage for an imaginary bank for an idea of what a futuristic bank webpage should look like",href:"bank",to:"/third",tools:["#react","#css","#antUI"]},{image:p,h3:"Calculator App",description:"A simple calculator that that shows results and also shows the inputted values above it",href:"cal",to:"/fourth",tools:["#html","#cs","#js"]}],a=["orange","blue","yellow"],i=t.map((s,r)=>e.jsx("li",{id:s.href,className:s.href,name:s.href,children:e.jsxs(n,{to:s.to,children:[e.jsx("img",{src:s.image,loading:"lazy"}),e.jsxs("div",{children:[e.jsx("h3",{children:s.h3}),e.jsxs("div",{children:[e.jsx("p",{children:s.description}),e.jsx("div",{children:s.tools.map((l,o)=>e.jsx("p",{style:{color:a[o]},children:l},o))})]})]})]})},r));return e.jsxs("div",{className:"projects",id:"projects",name:"projects",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"My Projects"}),e.jsx("p",{children:"Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."}),e.jsx("p",{children:"Click on each project to read more info and explore it live..."})]}),e.jsx("div",{className:"project-list",children:e.jsx("ul",{children:i})})]})};export{j as default};
