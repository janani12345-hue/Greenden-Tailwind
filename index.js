var menubar=document.getElementById("menubar")
var sidebar=document.getElementById("sidenave")
var wrong=document.getElementById("wrong")
sidebar.addEventListener("click()",function(){

})
menubar.addEventListener("click",function(){
    sidebar.style.right=0;
})
wrong.addEventListener("click",function(){
    sidebar.style.right="-50%";
})
