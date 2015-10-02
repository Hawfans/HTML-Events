var rect1  = document.querySelector(".long-rect")
var rect2 = document.querySelector(".short-rect")
var ginger = false;
document.addEventListener("DOMContentLoaded", function(){
  console.log("Done and Done")
});
  rect1.addEventListener("mouseover", function() { 
    rect2.innerHTML = "Mouse In!";
  });
  rect1.addEventListener("mouseout", function() {
    rect2.innerHTML = "Mouse Out!";
    ginger = true;
    }); 
    rect2.addEventListener("click", function() {
    if (ginger) {
      alert("Boom goes the dynamite!"); }
});
