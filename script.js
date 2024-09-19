function formularz () {
    let imie = document.getElementById("imie");
    let email = document.getElementById("email").value.toLowerCase();
    let lista = document.getElementById("wiadomosc");
    let wynik = document.getElementById("wynik");
wynik.innerHTML = imie.value + " " + "<br/>" + email + "<br/>" + "Wiadomość:" + " " + wiadomosc.value
}