
var userType = null;

function getUserType() {
  // body...
  var afterUrl =  window.location.search.substring(1);
  var userType = afterUrl.replace(/[^0-9]/ig,"");
  document.getElementById("leftType").src =
          "files/left_" + userType + ".html?type=" + userType;
}

window.onload = function() {
  // body...
  getUserType();
}

function aaa() {
  // body...
  console.log("Clay:: aaa");
  // if(ActiveXObject){

    var con = new ActiveXObject("ADODB.Connection");
    console.log("Clay:: ccc");
    con.ConnectionString = "DRIVER={MySQL ODBC 5.1 Driver};OPTION=3;SERVER=127.0.0.1;User ID=root;Password=Aa123456;Database=SE_System;Port=3306";

    //服务器地址，数据库 账号密码，数据库名，端口
    con.open;
    var rs = new ActiveXObject("ADODB.Recordset");
    rs.open("select * from user", con);
    while (!rs.eof) {
    var u = rs.Fields("username");//这里的User是user表中的一个字段
    alert(u);
    rs.moveNext;
    }
    rs.close();
    rs = null;
    con.close();
    con = null;
  // }

}