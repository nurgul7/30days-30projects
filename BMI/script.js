function calc() {
    let kg = parseInt(document.querySelector("#kg").value);
    document.querySelector("#kgvalue").textContent = kg + " " + "KG";

    let cm = parseInt(document.querySelector("#cm").value);
    document.querySelector("#cmvalue").textContent = cm + " " + "CM";

    let ibre = document.querySelector(".ibre")


    let result = (kg / Math.pow((cm / 100), 2)).toFixed();
    document.querySelector(".sonuc").innerText = result;


    if (result < 18) {
        document.querySelector(".deger").innerText = "Under Weıght"

    } else if (result >= 18 && result < 25) {
        document.querySelector(".deger").innerText = "Normal"

    } else if (result >= 25 && result < 30) {
        document.querySelector(".deger").innerText = "Excess Weıght"

    } else if (result >= 30 && result < 35) {
        document.querySelector(".deger").innerText = "Obesıty"
            // ibre.classList.add("ibre4")
    } else {
        document.querySelector(".deger").innerText = "Extremely Obesıty"
            // ibre.classList.add("ibre5")

    }

    if (document.querySelector(".deger").innerText == "Under Weıght") {
        ibre.classList.toggle("ibre1")
    }
    if (document.querySelector(".deger").innerText == "Normal") {
        ibre.classList.toggle("ibre2")
    }
    if (document.querySelector(".deger").innerText == "Excess Weıght") {
        ibre.classList.toggle("ibre3")
    }
    if (document.querySelector(".deger").innerText == "Obesıty") {
        ibre.classList.toggle("ibre4")
    }
    if (document.querySelector(".deger").innerText == "Extremely Obesıty") {
        ibre.classList.toggle("ibre5")
    }

}

function reset() {
    document.querySelector("#kg").value = "0";
    document.querySelector("#cm").value = "0";
    document.querySelector("#kgvalue").innerHTML = "00 KG";
    document.querySelector("#cmvalue").innerHTML = "00 CM";
    document.querySelector(".deger").innerHTML = "DAİMA SAĞLIK"
    document.querySelector(".sonuc").innerHTML = "";


}