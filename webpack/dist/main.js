(()=>{"use strict";console.log("a.js > number:",300),console.log("b.js > number:",20),console.log("a_num: ",300),console.log("b_num: ",20),console.log("c_num: ",30);const e=document.querySelector("#button-a"),t=document.querySelector("#button-b"),n=document.querySelector("#button-c"),o=document.querySelector("#display");e.addEventListener("click",(function(){o.textContent=300})),t.addEventListener("click",(function(){o.textContent=20})),n.addEventListener("click",(function(){o.textContent=30}))})();