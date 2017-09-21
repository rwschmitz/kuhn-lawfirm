window.onload = function thankyou() {
    console.log("hello world?");
    var form = document.getElementById("needs-validation");
    for(var f in form) {
        form[f].onsubmit = xhr;
    }
};

function xhr() {
    var endUser = new XMLHttpRequest();
    endUser.onreadystatechange = displayMessage;
}

function displayMessage() {
    if (this.readyState == 4 && this.status == 200) {
        $("thankYouModal").show();
    }
}

