var emailIDorPhno=localStorage.getItem("MailIdOrPhno")
var Pass=localStorage.getItem("Pass")
var form=document.forms;
function passvalid()
{
    var inputTags=document.querySelectorAll("input")
    var userGivenMailorNum=inputTags[0].value
    var userGivenpassword=inputTags[1].value
    var borders=document.getElementsByClassName("inputdiv")
    if(emailIDorPhno!=userGivenMailorNum && Pass!=userGivenpassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)";
        borders[0].style.borderColor="red"
        borders[1].style.borderColor="red"
        document.getElementById("status").innerHTML="UserID AND PASSWORD IS WRONG"
    }
    else if(emailIDorPhno==userGivenMailorNum && Pass!=userGivenpassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,rgb(193, 0, 97),red)";
        borders[0].style.borderColor="royalblue"
        borders[1].style.borderColor="red"
        document.getElementById("status").innerHTML="PASSWORD IS WRONG"
    }
    else if(emailIDorPhno==userGivenMailorNum && Pass==userGivenpassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,purple)";
        borders[0].style.borderColor="red"
        borders[1].style.borderColor="royalblue"
        document.getElementById("status").innerHTML="EMAIL ID OR PHONE NUMBER IS WRONG"
    }
    else{
        form[0].action="carblog.html"
        form[0].elements[2].type="submit"

    }
}
function passVis(){
    form[0].elements[1].type="text"
    document.getElementById("passvis").style.transition="transform 0.3s"
    document.getElementById("passvis").src="eyesvisible.png"
    document.getElementById("passvis").style.transform="rotatey(180deg)"

} 
function passHid(){
    form[0].elements[1].type="password"
    document.getElementById("passvis").style.transition="transform 0.3s"
    document.getElementById("passvis").src="hidden.png"
    document.getElementById("passvis").style.transform="rotatey(0deg)"

} 
function bigButton(){
    form[0].elements[2].style.transform="scale(1.2)"
    form[0].elements[2].style.backgroundColor="purple"

}
function bigButton(){
    form[0].elements[2].style.transform="scale(1.2)"
    form[0].elements[2].style.backgroundColor="purple"

}
function smallButton(){
    form[0].elements[2].style.transform="scale(1)"
    form[0].elements[2].style.backgroundColor="transparent"

}

