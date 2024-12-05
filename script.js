
let currentIndex = 0;

const images = document.querySelectorAll('.slider img');

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

setInterval(showNextImage, 3000); 


images[currentIndex].style.display = 'block';


function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); 
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/"; 
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1); 
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length); 
        }
    }
    return ""; 
}


function showCookieBanner() {
    let consent = getCookie("cookieConsent");
    if (consent !== "true") {
        
        if (!document.getElementById("cookie-banner")) {
            const banner = document.createElement("div");
            banner.id = "cookie-banner";
            banner.style.position = "fixed";
            banner.style.bottom = "0";
            banner.style.left = "0";
            banner.style.width = "100%";
            banner.style.backgroundColor = "#333";
            banner.style.color = "white";
            banner.style.padding = "15px 0";
            banner.style.textAlign = "center";
            banner.style.zIndex = "1000";
            banner.style.fontFamily = "Arial, sans-serif";
            banner.style.fontSize = "14px";
            banner.style.lineHeight = "1.5";
            banner.style.boxShadow = "0 -2px 10px rgba(0, 0, 0, 0.2)";

            
            const message = document.createElement("p");
            message.style.margin = "0";
            message.style.padding = "0";
            message.textContent = "Ce site utilise des cookies pour améliorer votre expérience. En continuant, vous acceptez notre politique de cookies.";

            
            const acceptButton = document.createElement("button");
            acceptButton.textContent = "Accepter";
            acceptButton.style.backgroundColor = "#4CAF50";
            acceptButton.style.color = "white";
            acceptButton.style.border = "none";
            acceptButton.style.padding = "8px 16px";
            acceptButton.style.marginLeft = "10px";
            acceptButton.style.cursor = "pointer";
            acceptButton.style.borderRadius = "4px";
            acceptButton.onclick = acceptCookies;

            const rejectButton = document.createElement("button");
            rejectButton.textContent = "Refuser";
            rejectButton.style.backgroundColor = "#f44336";
            rejectButton.style.color = "white";
            rejectButton.style.border = "none";
            rejectButton.style.padding = "8px 16px";
            rejectButton.style.marginLeft = "10px";
            rejectButton.style.cursor = "pointer";
            rejectButton.style.borderRadius = "4px";
            rejectButton.onclick = rejectCookies;

            
            banner.appendChild(message);
            banner.appendChild(acceptButton);
            banner.appendChild(rejectButton);

            
            document.body.appendChild(banner);
        }
    }
}


function acceptCookies() {
    setCookie("cookieConsent", "true", 365); 
    const banner = document.getElementById("cookie-banner");
    if (banner) {
        banner.style.display = "none"; 
    }
}


function rejectCookies() {
    setCookie("cookieConsent", "false", 7); 
    const banner = document.getElementById("cookie-banner");
    if (banner) {
        banner.style.display = "none"; 
    }
}

window.onload = function() {
    showCookieBanner(); 
};
