// This function makes it so that when a practice area is clicked, an active class is set.  After, the function removes the active class from all other practice areas.

var pa = []; // Creates an array for the pa elements in index.html.  The pa elements are the buttons to be clicked
var paArr = []; // Used later in the forEach array method to avoid the nested arrays that using pa has

var si = []; // Creates an array for the si elements in index.html.  The si elements are the divs where the actual practice area statements will be displayed
var siArr = []; // Used later in the forEach array method to avoid the nested arrays that using si has

var totalPracticeAreas = 20; // Client has 19 practice areas.



var paInfo = [
    "Practice area 1:  This is some information about practice area 1! The client will fill out information about practice area 1 here!",
    "Practice area 2:  This is some information about practice area 2! The client will fill out information about practice area 2 here!",
    "Practice area 3:  This is some information about practice area 3! The client will fill out information about practice area 3 here!",
    "Practice area 4:  This is some information about practice area 4! The client will fill out information about practice area 4 here!",
    "Practice area 5:  This is some information about practice area 5! The client will fill out information about practice area 5 here!",
    "Practice area 6:  This is some information about practice area 6! The client will fill out information about practice area 6 here!",
    "Practice area 7:  This is some information about practice area 7! The client will fill out information about practice area 7 here!",
    "Practice area 8:  This is some information about practice area 8! The client will fill out information about practice area 8 here!",
    "Practice area 9:  This is some information about practice area 9! The client will fill out information about practice area 9 here!",
    "Practice area 10:  This is some information about practice area 10! The client will fill out information about practice area 10 here!",
    "Practice area 11:  This is some information about practice area 11! The client will fill out information about practice area 11 here!",
    "Practice area 12:  This is some information about practice area 12! The client will fill out information about practice area 12 here!",
    "Practice area 13:  This is some information about practice area 13! The client will fill out information about practice area 13 here!",
    "Practice area 14:  This is some information about practice area 14! The client will fill out information about practice area 14 here!",
    "Practice area 15:  This is some information about practice area 15! The client will fill out information about practice area 15 here!",
    "Practice area 16:  This is some information about practice area 16! The client will fill out information about practice area 16 here!",
    "Practice area 17:  This is some information about practice area 17! The client will fill out information about practice area 17 here!",
    "Practice area 18:  This is some information about practice area 18! The client will fill out information about practice area 18 here!",
    "Practice area 19:  This is some information about practice area 19! The client will fill out information about practice area 19 here!",
];

for(var i = 1; i < totalPracticeAreas; i++) {
    pa[i] = document.getElementsByClassName("pa-" + i);
    si[i] = document.getElementsByClassName("si-" + i);
}

pa.forEach(function(element) {
    paArr.push(element[0]);
});

si.forEach(function(element){
    siArr.push(element[0]);
})

 for (var i = 0; i < paArr.length; i++) {
    paArr[i].addEventListener("click", displayInfo, false);
} 

function displayInfo (e) {
    var target = e.target;

    for (var i = 0; i < paArr.length; i++) {
        if(e.target === paArr[i]) {
            paArr[i].classList.add("pa-button-active");
            $(".si-" + [i+1]).fadeIn(1000).text(paInfo[i]);
        }
        if(e.target !== paArr[i] && paArr[i].classList.value !== "pa-button pa-" + [i+1] + "pa-button-active") {
            paArr[i].classList.remove("pa-button-active");
            $(".si-" + [i+1]).hide().text(paInfo[i]);
        }
    }
}
