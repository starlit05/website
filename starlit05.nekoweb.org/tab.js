function openBit(bitName) {
  var i;
  var x = document.getElementsByClassName("bit");
  for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";  
  }
  document.getElementById(bitName).style.display = "block";  
}