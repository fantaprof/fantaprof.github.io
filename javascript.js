function goto(link, bool) {
    if(bool == true){
        window.open(link, "_self")
    }
    else{
        window.open(link, "_blank")
    }
}

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

function random_splash() {

    var splashes = ["il primo fantagioco basato sulle azioni scolastiche", "entra in una lega e guadagna petti villosi", "punta su uno o più professori, ma cerca di non andare in deficit", "cosa c'entra il cocco?", "sei entrato sul server discord?", "scarica la nostra app per rimanere aggiornato con i punteggi!"]

    let splash = choose(splashes);

    document.getElementById("splash").innerHTML = '🥥 ' + splash + ' 🥥';

    console.log(splash);
}