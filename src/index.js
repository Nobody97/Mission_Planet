function myFunction(e) {
  e.classList.toggle("show");

  var element = document.getElementById('navID'),
  Style = window.getComputedStyle(element),
  right = Style.getPropertyValue("right");

  if(right == "0px") {
    element.style.rigth = "-260px";
  }else {
    element.style.left = "0px";
  }
}
