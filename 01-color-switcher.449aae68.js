const t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")};let e=null;function o(t,e){e.setAttribute("disabled",1),t.removeAttribute("disabled")}t.start.addEventListener("click",(function(){o(t.stop,t.start),e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.stop.addEventListener("click",(function(){clearInterval(e),o(t.start,t.stop)}));
//# sourceMappingURL=01-color-switcher.449aae68.js.map
