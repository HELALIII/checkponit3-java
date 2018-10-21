//document.getElementById("text").style.fontFamily="Helvetica";
function gras() {
    document.getElementById("text").style.fontWeight= "bold";
}
function italic () {
    document.getElementById("text").style.fontStyle= "italic";
}
function underlined () {
    document.getElementById("text").style.textDecoration= "underline";
}
function niveau1 () {
    document.getElementById("text").style.fontSize= document.getElementById("select").value + 'px';
}
function font () {
    document.getElementById("text").style.fontFamily= document.getElementById("font").value
}