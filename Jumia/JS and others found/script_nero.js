document.getElementById("box").innerHTML = "<b>Nero</b>";
document.getElementsByClassName("box")[0].innerHTML = "box";
// document.getElementsByTagName("main")[0].innerHTML = "main";

var box = document.getElementById("box");
var boxc = document.getElementsByClassName("box");

box.style.color = "red";
boxc[1].innerHTML = "Box2";