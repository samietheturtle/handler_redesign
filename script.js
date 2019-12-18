window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log('sidenVises');

}


function footerÅbningstidertHide() {
    console.log('footerÅbningstiderHide');
    var element = document.getElementById("fragt");
    element.classList.toggle("hide");
}

function footerFragtHide() {
    console.log('footerFragtHide');
    var element = document.getElementById("index_foot_knap");
    element.classList.toggle("hide");
}

function satinbandOverlayHide() {
    console.log('footerFragtHide');
    var element = document.getElementById("index_foot_knap");
    element.classList.toggle("hide");
}


$(document).ready(function () {
    console.log('hover fjern class')
    $("#satinBand_2").hover(function () {
        $(this).toggleClass("hide");
    });
});
