/*consent*/
const consentOverlay = document.querySelector(".consent-overlay");
const acceptCookie = document.querySelector(".acceptCookie");
const rejectCookie = document.querySelector(".rejectCookie");
let geturl = document.querySelector(".geturl");
//show iframe when cookie is set
let ytsource = "";
geturl.addEventListener("click", function() {
    ytsource = "https://www.youtube.com/embed/" + document.getElementById("ytsource").value;  
    document.querySelector("iframe").setAttribute("src", ytsource);
    document.querySelector(".ytIframe").style.display= "block";      
});

document.addEventListener("DOMContentLoaded", function() {
    if (document.cookie.length!=0) {
        consentOverlay.classList.remove("noconsent");
        rejectCookie.style.display= "block";     
    }
})
//if consent set cookie and load the src for iframe
acceptCookie.addEventListener("click", function() {
    document.cookie="ytcookie=1";
    consentOverlay.classList.remove("noconsent");
    rejectCookie.style.display= "block";
});

rejectCookie.addEventListener("click", function() {
    document.cookie= "ytcookie=0;max-age=0";  
    consentOverlay.classList.add("noconsent"); 
    document.querySelector("iframe").setAttribute("src", "");
});
