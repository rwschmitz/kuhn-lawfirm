window.onload = function thankyou() {
    console.log("hello world?");
    var form = document.getElementById("needs-validation");
    for(var f in form) {
        form[f].onsubmit = xhr;
    }
};