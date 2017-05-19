function tupian(idt) {
  var nametu = "xiaotu" + idt;
  var tp = document.getElementById(nametu);
  tp.src = "../images/ico05.gif";

  for (var i = 1; i < 30; i++) {

    var nametu2 = "xiaotu" + i;
    if (i != idt * 1) {
      var tp2 = document.getElementById('xiaotu' + i);
      if (tp2 != undefined) {
        tp2.src = "../images/ico06.gif";
      }
    }
  }
}

function list(idstr) {
  var name1 = "subtree" + idstr;
  var name2 = "img" + idstr;
  var objectobj = document.all(name1);
  var imgobj = document.all(name2);


  //alert(imgobj);

  if (objectobj.style.display == "none") {
    for (i = 1; i < 10; i++) {
      var name3 = "img" + i;
      var name = "subtree" + i;
      var o = document.all(name);
      if (o != undefined) {
        o.style.display = "none";
        var image = document.all(name3);
        //alert(image);
        image.src = "../images/ico04.gif";
      }
    }
    objectobj.style.display = "";
    imgobj.src = "../images/ico03.gif";
  } else {
    objectobj.style.display = "none";
    imgobj.src = "../images/ico04.gif";
  }
}
window.onload = function() {
  var user = document.getElementById("useNameShow");
  var afterUrl = window.location.search.substring(1);
  var userType = afterUrl.replace(/[^0-9]/ig, "");
  console.log("Clay.." + afterUrl + userType);

  switch (userType) {
    case "1":
      user.innerHTML = "Admin";
      break;
    case "2":
      user.innerHTML = "Admin";
      break;
    case "3":
      user.innerHTML = "Admin";
      break;
    case "4":
      user.innerHTML = "Admin";
      break;
    case "5":
      user.innerHTML = "Admin";
      break;
    case "6":
      user.innerHTML = "Admin";
      break;
    case "7":
      user.innerHTML = "Admin";
      break;
    case "8":
      user.innerHTML = "Admin";
      break;
  }
 }



