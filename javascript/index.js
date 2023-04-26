function storeTheUserInfo()
{
    var inputTag=document.querySelectorAll("input")
    var selectTag=document.querySelectorAll("select")
    var fName=inputTag[0].value
    var lName=inputTag[1].value
    var MIdOrPhno=inputTag[2].value
    var Pass=inputTag[3].value
    var date=inputTag[0].value
    var mo=inputTag[1].value
    var yy=inputTag[2].value
    window.sessionStorage.setItem("MailIdOrPhno",MIdOrPhno);
    window.sessionStorage.setItem("Pass",Pass);

    window.localStorage.setItem("mailIdOrphno",MIdOrPhno);
    window.localStorage.setItem("Pass",Pass);
    window.localStorage.setItem("fname",fName);
    window.localStorage.setItem("lname",lName);
    window.localStorage.setItem("date",date);
    window.localStorage.setItem("mo",mo);
    window.localStorage.setItem("yy",yy);

}
var gender=function gender(a){
    window.localStorage.setItem("gender",a);
}