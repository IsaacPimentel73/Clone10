function verificar() {
    var fano = document.getElementById('txtano')
    var s = Number(fano.value) * 16.20
    var x = "Você gasta em média : "
    var y = " Reais por mes."
    res.innerHTML = x + s.toFixed(2) + y
}
function redirecionar2() {
    window.location.href = "Opener.html";
}