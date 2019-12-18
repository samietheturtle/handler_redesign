window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log('sidenVises');

}


function footerFragtHide() {
    console.log('footerFragtHide');
    var element = document.getElementById("index_foot_knap");
    element.classList.toggle("hide");
}
