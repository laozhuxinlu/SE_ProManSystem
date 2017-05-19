
var value;
function login() {
  // body...
  // window.open('index.html?value=1');
  // return;
  console.log("Clay:: login");
  if(!value){
    alert("NO User Type!");
    return;
  }

  if(checkUsename()&&checkPassword()){
    var link = 'index.html?value=' + value;
    window.open(link);
  }
}

function checkUsename() {
  // body...
  var username = document.getElementById("useN").value;
  if(username != "admin"){
    alert("username error!");
    return false;
  }
  return true;
}

function checkPassword() {
  // body...
  var password = document.getElementById("passW").value;
  if(password != "123456"){
    alert("password error!");
    return false;
  }
  return true;
}

function gradeChange() {
  // body...
  var objS = document.getElementById("selectPid");
  value = objS.options[objS.selectedIndex].value;
  console.log("Clay:: value --> " + value);

}