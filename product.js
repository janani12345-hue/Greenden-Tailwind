var menubar=document.getElementById("menubar");
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
// product functionality search//
var productcontainer = document.getElementById("product-container");
var productlist = productcontainer.querySelectorAll("div");

var search = document.getElementById("Search");

search.addEventListener("keyup", function() {
    var enteredvalue = search.value.toLowerCase(); // Get the value entered in the input

    for (let count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("h3").textContent.toLowerCase(); // Get the product name

        if (productname.indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none"; // Hide if the product name does not match the search
        } else {
            productlist[count].style.display = "block"; // Show if the product name matches the search
        }
    }
});
