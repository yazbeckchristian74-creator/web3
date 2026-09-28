document.addEventListener("DOMContentLoaded", function(){
    function onButtonClick(){
        let paragraphs=document.getElementsByTagName("p");
        let division=document.getElementsByTagName("div");
        let bigText=document.getElementsByClassName("bigText");
        let h=document.getElementsByTagName("a");
        let allElements=document.getElementsByTagName("*");
        for(let i=0;i<allElements.length;i++){
            allElements[i].style.display="none";
        }
    }
    const myButton=document.getElementById("btn1");
    myButton.addEventListener("click",onButtonClick);

});